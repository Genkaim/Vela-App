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
  let max = 24;
  let min = -14;
  let rt= Math.random() * (max - min) + min;
  rt = parseFloat(rt.toFixed(1));
  return rt;
}
function easeIn(t) {
  return t * t * t;
}

function getTranslateY(time) {
  time = Math.min(1500, time);
  let progress = time / 1500;
  let easedProgress = easeIn(progress);
  return easedProgress * 450;
}
export default {
    protected: {
      num: 0,
      clientX: 250,
      daizi: 0,
      clientY: 0,
      width: 336,
      height: 480,
      hongxia: 1,
      liang: -1,
      time: 0,
      reward: 0,
      controlWidth: 150,
      controlHeight: 200,
      circleDiameter: 100,
      numLimit: 3,
      aniDuration: 1500,
      updateCycle: 500,
      daimaoList: [],
      sleepFlag: false,
      rewardLimit: 3,
      hongxiaFlag: true,
      temp: 0x3f3f3f3f
    }, 
    activeHongixa() {
      if(this.hongxiaFlag)this.hongxia = 1 - this.hongxia;
      //setTimeout(() => this.activeHongixa(), 2000);
      setTimeout(this.activeHongixa.bind(this), 2000);
    },
    activeTime() {
      this.time += this.updateCycle
      //setTimeout(() => this.activeTime(), this.updateCycle);
      setTimeout(this.activeTime.bind(this), this.updateCycle);
    },
    activeDaimao() {
      for(let i = 0; i < this.daimaoList.length; i++) {
        let timeInterval = this.time-this.daimaoList[i].createTime;
        if(timeInterval > this.aniDuration){
          continue;
        }
        let temp = this.daimaoList[i].left + this.daimaoList[i].add;
        temp = Math.max(0, Math.min(temp, 360));
        this.daimaoList[i].left = temp; 
        this.daimaoList[i].top = 150 + getTranslateY(timeInterval); 
      }
      setTimeout(this.activeDaimao.bind(this), 80);
    },
    cleanReward() {
      this.sleepFlag = true;
      this.reward = 0;
      this.daizi = -1;
      this.liang = 3;
      this.temp = 0x3f3f3f3f;
      setTimeout(() => { this.daizi = 0; }, 1500);
      setTimeout(() => { this.liang = -1; }, 1500);
      setTimeout(() => { this.sleepFlag = false; }, 2300);
      vibrator.vibrate({mode: 'long'});
      //tTimeout(() => { vibrator.vibrate({mode: 'short'}); }, 300);
    },    
    activeCalculate() {
      var toDelete = []; 
      var vibrateFlag = false; 
      for(let i = 0; i < this.daimaoList.length; i++) {
        let timeInterval = this.time-this.daimaoList[i].createTime;
        let x, y, d;
        x = this.daimaoList[i].left;
        y = 540 - this.daimaoList[i].top;
        d = Math.sqrt(Math.pow(x-this.clientX, 2) + Math.pow(y-this.clientY, 2));
        if(d < 100) {
          if (!vibrateFlag) { 
            vibrator.vibrate({
              mode: 'short'
            });
            vibrateFlag = true; 
          }
          toDelete.push(i); 
          this.num--;
          this.reward++;
        }
      }
      for (let i = toDelete.length - 1; i >= 0; i--) {
        this.daimaoList.splice(toDelete[i], 1);
      }

      if(this.reward > this.rewardLimit && !this.sleepFlag) {
        this.daizi = 1;
        this.liang = 0;
        this.hongxia = 1;
        this.hongxiaFlag = false;
      }
      else if(!this.sleepFlag) {
        this.daizi = 0;
        this.liang = -1;
        this.temp = this.time
        this.hongxiaFlag = true;
      }
      if(!this.sleepFlag && this.reward > this.rewardLimit && this.time-this.temp > 1000) {
        let d = Math.sqrt(Math.pow(380-this.clientX, 2) + Math.pow(250-this.clientY, 2));
        if(d < 400) this.liang = 2;
        else this.liang = 1;
        if(d < 100) this.cleanReward();
      }
      //setTimeout(() => this.activeCalculate(), this.updateCycle);
      setTimeout(this.activeCalculate.bind(this), 150);
    },
    onInit() {
      storage.get({
        key: 'firstTime',
        default: 'true',
        success: function(e) { 
          if(stringToBool(e)) {
            storage.set({
              key: 'firstTime',
              value: String(false),
              success: function() { },
              fail: function(data, code) { }
            });
            router.push({
              uri: '/pages/help'
            });
          }
        },
        fail: function() { }
      });
      this.activeTime();
      this.activeHongixa();
      this.activeDaimao();
      this.activeCalculate();
    },
    onShow() { },
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
        this.daimaoList.push({uniqueId: this.num, top: 150, left: 120, add: getRandomArbitrary(), createTime: this.time});
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