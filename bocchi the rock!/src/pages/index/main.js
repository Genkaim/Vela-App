import device from '@system.device' 
import router from '@system.router' 
import app from '@system.app' 
import storage from '@system.storage'
import vibrator from '@system.vibrator'
function stringToBool(str) {
  if (str.toLowerCase() === "true") return true;
  if (str.toLowerCase() === "false") return false;
  throw new Error("Invalid string value for boolean conversion");
}
function getRandomArbitrary() {
  let max = 20;
  let min = -10;
  let rt= Math.random() * (max - min) + min;
  rt = parseFloat(rt.toFixed(1));
  return rt;
}
function easeIn(t) {
  return t * t * t; // 对应于三次贝塞尔曲线(0.42, 0, 1, 1)
}

function getTranslateY(time) {
  time = Math.min(1500, time);
  let progress = time / 1500; // 计算动画进度
  let easedProgress = easeIn(progress); // 应用ease-in函数

  return easedProgress * 450; // 计算translateY值
}
let currentIndex = 0;
export default {
    public: {
      num: 0,
      clientX: 250,
      daizi: true,
      clientY: 0,
      width: 0,
      height: 0,
      swipe: false,
      hongxia: 1,
      time: 0,
      reward: 0,
      controlWidth: 150,
      controlHeight: 200,
      circleDiameter: 100,
      numLimit: 5,
      aniDuration: 1500,
      updateCycle: 500,
      daimaoList: []
    }, 
    activeHongixa() {
      var self = this;
      this.hongxia = 1 - this.hongxia;
      setTimeout(() => self.activeHongixa(), 2000);
    },
    activeTime() {
      var self = this;
      this.time += this.updateCycle
      setTimeout(() => self.activeTime(), this.updateCycle);
    },
    activeDaimao() {
      var self = this;
      let temp;
      for(let i = 0; i < self.daimaoList.length; i++) {
        if(this.time-self.daimaoList[i].createTime > this.aniDuration){
          continue;
        }
        temp = self.daimaoList[i].left + self.daimaoList[i].add;
        temp = Math.max(0, Math.min(temp, 380));
        self.daimaoList[i].left = temp; 
      }
      setTimeout(() => self.activeDaimao(), 50);
    },
    activeCalculate() {
      var self = this;
      for(let i = 0; i < self.daimaoList.length; i++) {
        let timeInterval = this.time-self.daimaoList[i].createTime;
        let x, y, d;
        x = self.daimaoList[i].left;
        y = getTranslateY(timeInterval)+11;
        y = 475-y;
        d = Math.abs((x-this.clientX) * (y-this.clientY));
        if(d < 1500) {
          vibrator.vibrate({
            mode: 'short'
          });
          self.daimaoList.splice(i, 1);
          this.num--;
          this.reward++;
          i--;
        }
      }
      setTimeout(() => self.activeCalculate(), this.updateCycle);
    },
    onInit() {
      this.activeTime();
      this.activeHongixa();
      this.activeDaimao();
      this.activeCalculate();
      var self = this;
      device.getInfo({
        success: function(ret) {
          self.width = ret.screenWidth
          self.height= ret.screenHeight
        }
      });
      this.swipe = this.$app.$def.data.swipe;
      storage.get({
        key: 'genkaim_bocchi_swipe',
        success: function(e) {
          e && (self.swipe = stringToBool(e))
        },
        fail: function() { }
      });
    },
    onShow() {
      this.swipe = this.$app.$def.data.swipe;
    },
    at(event) { },
    goBack(event) {
      app.terminate();
    },
    goToSettings(event) { 
        router.push({
          uri: '/pages/settings'
        });
    },
    createDaimao(event) {
      if(this.num < this.numLimit) {
        this.num++;
        this.daimaoList.push({uniqueId: this.num, left: 120, add: getRandomArbitrary(), createTime: this.time});
        vibrator.vibrate({
          mode: 'short'
        });
      }
    },
    move(event) { 
      for (let touch of event.touches) {
        let relativeX = touch.clientX - 200;
        let relativeY = touch.clientY - 400;
        let _x = ((relativeX / this.controlWidth) * (this.width+100)).toFixed(1);
        let _y = ((relativeY / this.controlHeight) * (this.height)).toFixed(1);
        _x = parseFloat(_x);
        _y = parseFloat(_y);
        _y = 450-_y;
        if(_x > this.width - 20){
          _x = this.width - 20;
        }
        if(_x < 0){
          _x = 0;
        }
        if(_y > this.height + 20){
          _y = this.height + 20;
        }
        if(_y < 0){
          _y = 0;
        }
        /*
        _x = _x.toFixed(1);
        _y = _y.toFixed(1);
        _x = parseFloat(_x);
        _y = parseFloat(_y);*/
        this.clientX = _x;
        this.clientY = _y;
      }
    }
}