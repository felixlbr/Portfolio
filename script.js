

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(EasePack) 


////////////////////////////////////////////////////////////////
/* WELOME PAGE */
let tl_welcome_page = gsap.timeline({
  scrollTrigger: {
    trigger: "#welcome_page",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    //pin: true,
  },
});
tl_welcome_page.to("#welcome_page h1", {scale: 50})
.to("#welcome_page", {opacity: 0}, "<")
.set("#welcome_page h1", {scale: 0})

////////////////////////////////////////////////////////////////
/* PORTFOLIO PAGE */

////////////////////////////////////////////////////////////////
/* PAGE 1 */
ScrollTrigger.create({
  trigger: "#portfolio_page",
  start: "top top",
  end: () => "+=" + document.getElementById('page1').offsetHeight,
  onEnter: () => {
    gsap.fromTo("header, #page1 *", {y:-100, opacity:0}, { y:0,opacity:1});
  },
  onLeave: () => {
    gsap.fromTo("#page1 *", {y:0, opacity:1}, { y:-100,opacity:0});
  },
  onEnterBack: () => {
    gsap.fromTo("#page1 *", {y:-100, opacity:0}, { y:0,opacity:1});
  },
  onLeaveBack: () => {
    gsap.fromTo("header, #page1 *", {y:0, opacity:1}, { y:-100,opacity:0});
    //gsap.to(window, {scrollTo: {y: 0}, duration: 0.5});
  }
});
////////////////////////////////////////////////////////////////
/* Text + Picture */
let tl_portfolio_page = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio_page",
    start: "top top",
    end: () => "+=" + document.getElementById('page1').offsetHeight,
  },
});
CustomEase.create("custom", "M0,0 C0,0 0.021,0.105 0.115,0.198 0.143,0.226 0.24,0.158 0.274,0.19 0.334,0.248 0.413,0.269 0.478,0.343 0.621,0.505 0.661,0.806 0.742,0.942 0.781,1.008 0.884,0.945 0.927,0.962 0.955,0.973 1,1 1,1 ")
tl_portfolio_page
.fromTo("header, #portfolio_page #page1 *", {y:-100, opacity:0}, { y:0,opacity:1})
.to(window, {scrollTo:{y:window.innerHeight+1}})
//.set("body", {overflowY: "hidden"})
.from("#page1 .paragraph .text", {
  duration: 10, 
  text: "", 
  ease: "custom",
},"<")
.set("body", {overflowY: "scroll"});


////////////////////////////////////////////////////////////////
/* PAGE 2 */
ScrollTrigger.create({
  trigger: "#page2",
  pin: true,
  start: "top 100",
  end: () => "+=" + document.getElementById('page2').offsetHeight,
});

let panelsP2 = gsap.utils.toArray("#page2 .case");
panelsP2.forEach((item) => {
  const contentElements = item.querySelectorAll("#page2 .case > *");
  gsap.set(contentElements, {
    opacity: 0.1,
  });
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onEnter: ({ progress, direction, isActive }) => {
      gsap.fromTo(contentElements, {opacity: 0.1}, {opacity: 1, stagger: 0.05 });
      console.log("scroll", window.scrollY);
    },
    onLeaveBack: ({ progress, direction, isActive }) => {   
      gsap.fromTo(contentElements, {opacity: 1}, {opacity: 0.1});
    },
  });
});

let pinWrap1 = document.querySelector("#page2 .container");
let pinWrapWidth1 = pinWrap1.offsetWidth;
let horizontalScrollLength1 = pinWrapWidth1 +20//- window.innerWidth + 100;

let tl_bouygues = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: () => "+=" + pinWrapWidth1,
    scrub: 1,
    pin: true,
  }
});
tl_bouygues
.to("#page2 h1.title", {opacity:0})
.to("#page2 .container .case:nth-child(2)", {x:horizontalScrollLength1},"<")
.to("#page2 .container", {x:-horizontalScrollLength1},"<")
.to("#page2 .container .case:nth-child(2)", {yPercent:-150})

let description = gsap.utils.toArray("#page2 .extensionPage2 .description");
description.forEach((item) => {
  gsap.set(item, {
    opacity: 0,
  });
  ScrollTrigger.create({
    trigger: item,
    start:(window.innerWidth+100) + " top",
    end: () => "+=" + item.offsetHeight,
    scrub: 1,
    onEnter: () => {
      gsap.fromTo(item, {opacity: 0.1}, {opacity: 1, stagger: 0.05 });
    },
    onLeaveBack: () => {   
      gsap.fromTo(item, {opacity: 1}, {opacity: 0});
    },
  });
});
/*
gsap.to("#page2 .container", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: () => "+=" + pinWrapWidth1,
    scrub: 1,
    pin: true,
    markers:true,
  },
  x: -horizontalScrollLength1,
  ease: "none"
});
*/
////////////////////////////////////////////////////////////////
/* PAGE 3 */
let pinWrap2 = document.querySelector("#page3 .container");
let pinWrapWidth2 = pinWrap2.offsetWidth;
let horizontalScrollLength2 = pinWrapWidth2 + window.innerWidth +100;
gsap.to("#page3 .container", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: () => "+=" + pinWrapWidth2,
    scrub: 1,
    pin: true,
  },
  x: -horizontalScrollLength2,
  ease: "none"
});


let panelP3 = gsap.utils.toArray("#page3 .case");
panelP3.forEach((item, i) => {
  const contentElements = item.querySelectorAll(".case > *");
  gsap.set(contentElements, {
    opacity: 0
  });
  ScrollTrigger.create({
    trigger: item,
    start: "center center",
    end:() => "+=" +item.offsetHeight*3,
    onEnter: ({ progress, direction, isActive }) => {
      console.log("onEnter", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-entry 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-entry 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-entry 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-entry 2s"});
      gsap.set("._7_0_", {animation: "progress-bar70-entry 2s"});
    },
    onLeave: ({ progress, direction, isActive }) => {
      console.log("onLeave", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: -80, opacity: 0, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-exit 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-exit 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-exit 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-exit 2s"});
      gsap.set("._7_0_", {animation: "progress-bar70-exit 2s"});
    },
    onLeaveBack: ({ progress, direction, isActive }) => {
      console.log("onLeaveBack", progress, direction, isActive);      
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: 80, opacity: 0, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-exit 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-exit 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-exit 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-exit 2s"});
      gsap.set("._7_0_", {animation: "progress-bar70-exit 2s"});
    },
    onEnterBack: ({ progress, direction, isActive }) => {
      console.log("onEnterBack", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: -80, opacity: 0 }, { y: 0,opacity: 1, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-entry 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-entry 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-entry 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-entry 2s"});
      gsap.set("._7_0_", {animation: "progress-bar70  -entry 2s"});
    }
  });
});

const containers = document.querySelectorAll('#page4 .case');
const item = document.querySelectorAll('#page4 .item');
const shadow = document.querySelectorAll('#page4 .shadow');

containers.forEach(container => {
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight * 1.5 - (e.pageY - Math.abs(window.scrollY-700))) / 20;
    item.forEach(item => {
      item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  });
  container.addEventListener("mouseenter", (e) => {
    item.forEach(item => {
      item.style.transition = `none`;
    });
    shadow.forEach(shadow => {
      shadow.style.transform = 'translateZ(40px)';
    });
  });
  container.addEventListener("mouseleave", (e) => {
    item.forEach(item => {
      item.style.transform = `rotateY(0deg) rotateX(0deg)`;
      item.style.transition = `all 0.5s ease`;
    });
    shadow.forEach(shadow => {
      shadow.style.transform = 'translateZ(0px)';
    });
  });
});


let panels = gsap.utils.toArray("#page4 .case");
panels.forEach((item, i) => {
  const contentElements = item.querySelectorAll("#page4 .case > *");
  gsap.set(contentElements, {
    opacity: 0
  });
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    end: "bottom center",
    snap: { snapTo: [0.5], duration: 1, delay: 0},
    onEnter: ({ progress, direction, isActive }) => {
      gsap.fromTo(contentElements, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
    },
    onLeave: ({ progress, direction, isActive }) => {
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: -80, opacity: 0, stagger: 0.05 });
    },
    onLeaveBack: ({ progress, direction, isActive }) => {
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: 80, opacity: 0, stagger: 0.05 });
    },
    onEnterBack: ({ progress, direction, isActive }) => {
      gsap.fromTo(contentElements, { y: -80, opacity: 0 }, { y: 0,opacity: 1, stagger: 0.05 });
    }
  });
});
//
//let tl_header = gsap.timeline({
//  scrollTrigger: {
//    trigger: "header",
//    start: "top top",
//    end: "bottom top",
//    //pin: true,
//  },
//});

//tl_header
//.set(window, {scrollTo: {y: window.scrollY}, duration: 5})
//.from(".paragraph .text", {duration: 10, text: "", ease: "linear"})
//
//let reachedTop=false;
//window.addEventListener('scroll', function() {
//  var header = document.querySelector('header');
//  var scrollPos = window.scrollY;
//  var elementPosition = header.getBoundingClientRect().top + window.scrollY;
//  if(header.offsetTop>0){
//    reachedTop = true;
//  }
//  if(elementPosition == this.window.innerHeight && reachedTop){
//    window.scrollTo(0, this.window.innerHeight);
//  }
//});

//.set("#welcome_page", {display: "none"})
//.set("body > .pin-spacer", {height:"0"})

//let reachedPortfolio = false;
//const portfolioSection = document.getElementById('portfolio_page');
//window.addEventListener('scroll', function() {
//  const rect = portfolioSection.getBoundingClientRect();
//  if (rect.top <= 0 && rect.bottom >= 0 && !reachedPortfolio) {
//    reachedPortfolio = true;
//    gsap.to(window, { duration: 1, scrollTo: portfolioSection.offsetTop, ease: "power2.inOut" });
//  } 
//  // Si l'utilisateur a déjà atteint la section portfolio, empêcher le défilement vers le haut
//  if (reachedPortfolio) {
//    gsap.to(window, { duration: 1, scrollTo: portfolioSection.offsetTop, ease: "power2.inOut" });
//  }
//});
/*
gsap.to(".welcome_page h1", {
  scale: 50,
  scrollTrigger: {
    trigger: ".welcome_page",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    markers: true,
    pin: true,
  },
})
*/
/*
const containers = document.querySelectorAll('.case');
const item = document.querySelectorAll('.item');
const shadow = document.querySelectorAll('.shadow');
const text = document.querySelectorAll('.wrapper');
const bar = document.querySelectorAll('.skills-progress-box');

containers.forEach(container => {
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight * 1.5 - (e.pageY - Math.abs(window.scrollY-700))) / 20;
    item.forEach(item => {
      item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  });
  container.addEventListener("mouseenter", (e) => {
    item.forEach(item => {
      item.style.transition = `none`;
    });
    shadow.forEach(shadow => {
      shadow.style.transform = 'translateZ(40px)';
    });
    text.forEach(text => {
      text.style.transform = 'translateZ(40px)';
    });
    bar.forEach(bar => {
      bar.style.transform = 'translateZ(40px)';
    });
  });
  container.addEventListener("mouseleave", (e) => {
    item.forEach(item => {
      item.style.transform = `rotateY(0deg) rotateX(0deg)`;
      item.style.transition = `all 0.5s ease`;
    });
    shadow.forEach(shadow => {
      shadow.style.transform = 'translateZ(0px)';
    });
    text.forEach(text => {
      text.style.transform = 'translateZ(0px)';
    });
    bar.forEach(bar => {
      bar.style.transform = 'translateZ(0px)';
    });
  });
});



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer)
gsap.registerPlugin(ScrollToPlugin)

let panels = gsap.utils.toArray(".case");

panels.forEach((item, i) => {
  // Get the to be staggered elements
  const contentElements = item.querySelectorAll(".case > *");
  // Set initial state on the to be staggered elements
  gsap.set(contentElements, {
    opacity: 0
  });

  ScrollTrigger.create({
    trigger: item,
    //endTrigger: ".matrice3x3",
    pin: true,
    start: "center center",
    end: "center top",
    //snap: { snapTo: [0.5], duration: 1, delay: 0},
    onEnter: ({ progress, direction, isActive }) => {
      console.log("onEnter", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-entry 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-entry 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-entry 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-entry 2s"});
      gsap.set("._7_0_", {animation: "progress-bar85-entry 2s"});
    },
    onLeave: ({ progress, direction, isActive }) => {
      console.log("onLeave", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: -80, opacity: 0, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-exit 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-exit 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-exit 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-exit 2s"});
      gsap.set("._7_0_", {animation: "progress-bar85-exit 2s"});
    },
    onLeaveBack: ({ progress, direction, isActive }) => {
      console.log("onLeaveBack", progress, direction, isActive);      
      gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: 80, opacity: 0, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-exit 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-exit 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-exit 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-exit 2s"});
      gsap.set("._7_0_", {animation: "progress-bar85-exit 2s"});
    },
    onEnterBack: ({ progress, direction, isActive }) => {
      console.log("onEnterBack", progress, direction, isActive);
      gsap.fromTo(contentElements, { y: -80, opacity: 0 }, { y: 0,opacity: 1, stagger: 0.05 });
      gsap.set("._9_5_", {animation: "progress-bar95-entry 2s"});
      gsap.set("._9_0_", {animation: "progress-bar90-entry 2s"});
      gsap.set("._8_5_", {animation: "progress-bar85-entry 2s"});
      gsap.set("._8_0_", {animation: "progress-bar80-entry 2s"});
      gsap.set("._7_0_", {animation: "progress-bar85-entry 2s"});
    }
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "+=500",
    scrub: 1,
    markers: true,
    pin: true,
  }
});
tl.fromTo("#page3 > .title",{yPercent:-100, opacity : 0}, {yPercent : 100, opacity: 1})
.fromTo("#page3 #img1",{scale:1, opacity:0}, {opacity:1,scale:0.8})
.fromTo("#page3 #img1", {x:50},{x:0})
.fromTo("#page3 h3.text",{scale:1, opacity:0}, {opacity:1,scale:0.8})
.fromTo("#page3 h3.text", {x:50},{x:0})
.fromTo("#page3 .inf",{scale:1, opacity:0}, {opacity:1,scale:0.8})
.fromTo("#page3 .inf", {x:50},{x:0})
//.set("#page3 span:nth-child(1)", {animation: "span-top-progress 2s"})
//.set("#page3 span:nth-child(2)", {animation: "span-bottom-progress 2s"})
.set("#page3 #img1", {animation: "shine-img 0.8s ease-in-out"})
*/
//Observer.create({
//    target: window, // can be any element (selector text is fine)
//    type: "wheel,touch", // comma-delimited list of what to listen for
//    onUp: () => previous(),
//    onDown: () => next(),
//    ignore : "header"
//  });
//let current = 0,
//    pages = gsap.utils.toArray(".page");
//
//function next() {
//    if (current < pages.length - 1) {
//        gsap.to(window, {scrollTo: pages[++current], duration: 0.5});
//    }
//}
//function previous() {
//    if (current > 0) {
//        gsap.to(window, {scrollTo: pages[--current], duration: 0.5});
//    }
//}
//
//
//let panels = gsap.utils.toArray(".case");
//
//panels.forEach((item, i) => {
//  // Get the to be staggered elements
//  const contentElements = item.querySelectorAll(".case > *");
//  // Set initial state on the to be staggered elements
//  gsap.set(contentElements, {
//    opacity: 0
//  });
//
//  ScrollTrigger.create({
//    trigger: item,
//    //endTrigger: ".matrice3x3",
//    markers: true,
//    //pin: true,
//    start: "bottom center",
//    end: "100 top",
//    //snap: { snapTo: [0.5], duration: 1, delay: 0},
//    onEnter: ({ progress, direction, isActive }) => {
//      console.log("onEnter", progress, direction, isActive);
//      gsap.fromTo(contentElements, { /*y: 80,*/ opacity: 0 }, { /*y: 0,*/ opacity: 1, /*stagger: 0.05*/ });
//    },
//    onLeave: ({ progress, direction, isActive }) => {
//      console.log("onLeave", progress, direction, isActive);
//      gsap.fromTo(contentElements, { /*y: 0,*/ opacity: 1 }, { /*y: -80,*/ opacity: 0, /*stagger: 0.05*/ });
//    },
//    onLeaveBack: ({ progress, direction, isActive }) => {
//      console.log("onLeaveBack", progress, direction, isActive);      
//      gsap.fromTo(contentElements, { /*y: 0,*/ opacity: 1 }, { /*y: -80,*/ opacity: 0, /*stagger: 0.05*/ });
//    },
//    onEnterBack: ({ progress, direction, isActive }) => {
//      console.log("onEnterBack", progress, direction, isActive);
//      gsap.fromTo(contentElements, { /*y: -80,*/ opacity: 0 }, { /*y: 0,*/ opacity: 1, /*stagger: 0.05*/ });
//    }
//  });
//
//});
