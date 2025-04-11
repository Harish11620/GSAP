gsap.registerPlugin(ScrollTrigger);

gsap.from(".p1 h1", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".p1 h1",
        start: "top 95%",
        scroller: "body",
        scrub: 2,
    },
})

gsap.from(".p2 h1", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".p2 h1",
        start: "top 60%",
        scroller: "body",
        scrub: 2,
    },
})
gsap.from(".p2 h2", {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".p2 h1",
        start: "top 80%",
        scroller: "body",
        scrub: 2,
    },
})

gsap.from(".p3 .box", {
    scale: 0,
    rotate: 180,
    scrollTrigger: {
        trigger: ".p3 .box",
        start: "top 80%",
        scroller: "body",
        scrub: 2,
    },
})

gsap.to(".p3 .box", {
    backgroundcolor: "#2563eb",
    scrollTrigger: {
        trigger: ".p3 .box",
        start: "top 80%",
        scroller: "body",
        scrub: 2,
    },
})


gsap.to(".p4 .b", {
    x: -500,
    borderRadius: "50%",
    scrollTrigger: {
        trigger: ".p4 .b",
        start: "top 100%",
        scroller: "body",
        scrub: 2,
    },
})

gsap.to(".p5 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: ".p5 ",
        start: "top 0%",
        end: "top -100%",
        scroller: "body",
        scrub: 5,
        pin: true,
    },
})

var initialPath = `M 10 150 Q 500 150 990 150`; // Initial path
var finalPath = initialPath; // Ensure finalPath matches the initial path

var string = document.querySelector(".string");

string.addEventListener("mousemove", function (dets) {
    var path = `M 10 150 Q ${dets.x} ${dets.y} 990 150`; 
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: Power3.easeOut,
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath }, // Reset to the finalPath
        duration: 0.8,
        ease: Elastic.easeOut.config(1, 0.2), // Correct easing function
    });
});

var main =document.querySelector(".main");
var cursor =document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
        duration: 0.5,
    })
});

var image = document.querySelector(".image");
image.addEventListener("mousemove",function(){
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale: 4,
        backgroundColor:"#daff0675"
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:"#D9FF06"
    })
})

var menu = document.querySelector(".nav i");
var cross = document.querySelector(".full i");

var tl = gsap.timeline();

tl.to(".full",{
    right:0,
    duration:0.4,
    ease:Power3.easeOut,
})

tl.from(".full h4",{
    x:50,
    opacity:0,
    duration:0.4,
    stagger:0.3,
})

tl.from(".full i",{
    opacity:0,
    duration:1,
    ease:Power3.easeOut,
})
tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})
cross.addEventListener("click",function(){
    tl.reverse();
})