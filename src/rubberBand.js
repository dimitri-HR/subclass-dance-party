var RubberBandDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

RubberBandDancer.prototype = Object.create(Dancer.prototype);
RubberBandDancer.prototype.constructor = RubberBandDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
RubberBandDancer.prototype.oldStep = RubberBandDancer.prototype.step;
RubberBandDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // BlinkyDancer.prototype.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.addClass('rubberband-dancer');
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //
  var animation = 'animated rubberBand';
  // this.$node.addClass('animated shake');

  this.$node.addClass(animation).one(animationEnd, function() {
    $(this).removeClass(animation);
  });

};
