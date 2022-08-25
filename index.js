const tl = gsap.timeline({defaults:{duration: 1}});



if(document.body.offsetWidth > 576){
    tl.from('.action', {y: "random(-250, 250)", opacity: 0}, "+=.25")
}