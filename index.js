const tl = gsap.timeline({defaults:{duration: 1}});

//tl.to('.move', 1, {width: '60%', ease: Power2.easeOut},'start')


if(document.body.offsetWidth > 576){

  //  tl.add('start')
  // tl.to('.move', 1, {width: '60%', ease: Power2.easeOut}, 'start')
  // tl.to('.list-item', {margin: '0px auto'}, 'start')
  // tl.to('.nav-about-open', {display: 'block'})
  // tl.from('.about', 1, {x: '-500', opacity: 0}) 
}

 if(document.body.offsetWidth >= 992){
     tl.add('start')
    tl.to('.move', 1, {width: '60%', ease: Power2.easeOut},'start')
    tl.to('.action', {width: '80%'}, 'start')
//tl.to('.header-logo', {fontSize: '1.5rem'}, 'start')
    tl.to('.list-item', { margin: 'auto'}, 'start')
    tl.to('.nav-shop-open', {display: 'block'})
    tl.from('.about', 1, {x: '-500', opacity: 0})
   // tl.from('.deals', {x: '-250', opacity: 0})
    
}  