// function onReady() {

//   var clock = createClock('#clock');
//   var clock = createClock('#clock2');

// }

// function createClock(id) {
//   // create an object
//   var c = new Object();
//       // add method 'updateClock'
//       c.updateClock = function() {
//         var date = new Date();

//         var clock = document.querySelector(id);
//         clock.innerHTML = this.formatDigits(date.getHours()) + ':' + this.formatDigits(date.getMinutes()) + ':' + this.formatDigits(date.getSeconds());
//       };

//       c.formatDigits = function(val) {
//         if(val<10) val = "0" + val;
//         return val;
//       };


//   setInterval(function() { c.updateClock(); }, 1000);
//   c.updateClock();


//   return c;
// }




// USING CONSTRUCTORS

function onReady() {

  var clock = new Clock('#clock');
  var clock = new Clock('#clock2', -300, 'ETC');

}

function Clock(id, offset, label) {
  
  offset = offset || 0;
  label = label || 'utc';

  var d = new Date();
  this.offset = (offset + d.getTimezoneOffset())*60*1000;
  this.id = id;
  this.label = label;



  var self = this;
  setInterval(function() { 
    self.updateClock();
  }, 1000);

  this.updateClock();
  
}


Clock.prototype.updateClock = function() {
  var date = new Date();
      date = new Date(this.offset + date.getTime());
  var clock = document.querySelector(this.id);
  clock.innerHTML = this.formatDigits(date.getHours()) + ':' + this.formatDigits(date.getMinutes()) + ':' + this.formatDigits(date.getSeconds() + ' ' + this.label);
};

Clock.prototype.formatDigits = function(val) {
  if(val<10) val = '0' + val;
  return val;
};



window.onload = onReady;