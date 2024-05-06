// Used this codepen as a base for project:
// https://codepen.io/GreenSock/pen/KKpLdWW
// Soo helped during Study Hall

gsap.registerPlugin(ScrollTrigger);


let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
          snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    },
    duration: 0.5
  }
});

// arrow animations

let arrow = document.querySelector('.arrow');
let arrowRight = document.querySelector('.arrow-right');
assets/IMG_4880.JPG
if(arrow){
  gsap.to(arrow, {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

if(arrowRight){
  gsap.to(arrowRight, {x: -12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

//slideshow code (found through chat gpt)


