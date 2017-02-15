var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('blinking-dancer');
  this.$node.toggle();
};


// ********************************

//   // var timeBetweenSteps = 100;
//   // blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);

// //   dancer.step = function() {
// //     // the basic dancer doesn't do anything interesting at all on each step,
// //     // it just schedules the next step
// //     setTimeout(dancer.step, timeBetweenSteps);
// //   };
// //   dancer.step();



// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
