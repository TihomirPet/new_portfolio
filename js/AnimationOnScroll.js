TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".box", 1.5, {
  scale: 0,
  cycle: {
    z: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.90
  }
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#stage",
    duration: "50%",
    triggerHook: 0.59
  })
  .addIndicators({
    // name: "Box Timeline",
    // colorTrigger: "white",
    // colorStart: "white",
    // colorEnd: "white"
  })
  .setTween(tl)
  .addTo(controller);