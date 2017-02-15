var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.oldStep = ShakyDancer.prototype.step;
ShakyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.$node.addClass('shaky-dancer');
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //
  var animation = 'animated shake';

  this.$node.addClass(animation).one(animationEnd, function() {
    $(this).removeClass(animation);
  });

};
