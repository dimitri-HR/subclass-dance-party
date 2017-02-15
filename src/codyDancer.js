var CodyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

CodyDancer.prototype = Object.create(Dancer.prototype);
CodyDancer.prototype.constructor = CodyDancer;

CodyDancer.prototype.oldStep = CodyDancer.prototype.step;
CodyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.$node.addClass('rolling-dancer');
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  var animation = 'animated rollIn';

  this.$node.addClass(animation).one(animationEnd, function() {
    $(this).removeClass(animation);
  });
};
