const tl = gsap.timeline({defaults:{duration: 1}});



if(document.body.offsetWidth > 576){
    //tl.to('.move', 1, {width: '60%', ease: Power2.easeOut})
   // tl.to('.action', {display: 'none'})
   //tl.to('.nav-about-open', {display: 'block'})
   tl.from('.about', 1, {x: '-500', opacity: 0})
    
}