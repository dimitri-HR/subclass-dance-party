describe('dancinFools', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    shakyDancer = new ShakyDancer(7, 12, 150);
    dimitriDancer = new DimitriDancer(14, 30, 125);
    rubberBandit = new RubberBandDancer(20, 30, 175);
    codyDancer = new CodyDancer(5, 30, 185);
  });

  describe('BlinkyDancer', function() {
    it('should have a jQuery $node object', function() {
      expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it('should have a step function that makes its node blink', function() {
      sinon.spy(blinkyDancer.$node, 'toggle');
      blinkyDancer.step();
      expect(blinkyDancer.$node.toggle.called).to.be.true;
    });
  });

  describe('other dancers', function() {
    it('should add the animated rubberBand class to RubberBandDancer', function() {
      expect(rubberBandit.$node.hasClass('animated rubberBand')).to.equal(true);
    });

    it('should add the animated shake class to ShakyDancer', function() {
      expect(shakyDancer.$node.hasClass('animated shake')).to.equal(true);
    });
    it('should add the animated flipOutY class to DimitriDancer', function() {
      expect(dimitriDancer.$node.hasClass('animated flipOutY')).to.equal(true);
    });

    it('should add the animated rollIn class to CodyDancer', function() {
      expect(codyDancer.$node.hasClass('animated rollIn')).to.equal(true);
    });
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  //write new tests for each new dancer type

});
