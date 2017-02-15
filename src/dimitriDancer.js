var DimitriDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

DimitriDancer.prototype = Object.create(Dancer.prototype);
DimitriDancer.prototype.constructor = DimitriDancer;

DimitriDancer.prototype.oldStep = DimitriDancer.prototype.step;
DimitriDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.$node.addClass('flipping-dancer');
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  var animation = 'animated flipOutY';

  this.$node.addClass(animation).one(animationEnd, function() {
    $(this).removeClass(animation);
  });
};
