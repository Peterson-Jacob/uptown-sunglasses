const abtBtn = document.querySelector('.aboutBtn');
const abtOpen = document.querySelector('.nav-about-open');
const dlBtn = document.querySelector('.dealsBtn');
const dlOpen = document.querySelector('.nav-deals-open');
const spBtn = document.querySelector('.shopBtn');
const shOpen = document.querySelector('.nav-shop-open');
const ckBtn = document.querySelector('.checkoutBtn');
const ckOpen = document.querySelector('.nav-checkout-open');
const front = document.querySelector('.move');  



const tl = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl2 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl3 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl4 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});


const x = "deals";
const y = "about";
const q = "shop";
const c = "checkout";

function Start(t){

     t.add('start')
     t.to(front, 1, {width: '60%', ease: Power2.easeOut},'start')
     t.to('.action', {width: '80%'}, 'start')
     t.to('.list-item', { margin: 'auto'}, 'start')
   //tl.to('.nav-' + y + '-open', {display: 'block'})
}

function Change(t){
  t.add('change')
  t.to('.jumbotron', 1, {opacity: 0} )
  t.to('.jumbotron', {display: 'none'}, 'change')
}


if(document.body.offsetWidth > 576 && document.body.offsetWidth < 991){

  Change(tl);
  tl.to('.nav-' + y + '-open', {display: 'block'})
  tl.from('.' + y, {opacity: 0})
  Change(tl2);
  tl2.to('.nav-' + x + '-open', {display: 'block'})
  tl2.from('.' + x, {opacity: 0})
  Change(tl3);
  tl3.to('.nav-' + q + '-open', {display: 'block'})
  tl3.from('.' + q, {opacity: 0})
  Change(tl4);
  tl4.to('.nav-' + c + '-open', {display: 'block'})
  tl4.from('.' + c, {opacity: 0})


}


  if(document.body.offsetWidth >= 992){

    // t.add('start')
    // t.to(front, 1, {width: '60%', ease: Power2.easeOut},'start')
    // t.to('.action', {width: '80%'}, 'start')
    // t.to('.list-item', { margin: 'auto'}, 'start')
    
    Start(tl);
    tl.to('.nav-' + y + '-open', {display: 'block'})
    tl.from( '.' + y , 1, {x: '-500', opacity: 0}) 

    Start(tl2);
    tl2.to('.nav-' + x + '-open', {display: 'block'})
    tl2.from( '.' + x , 1, {x: '-250', opacity: 0}) 

    Start(tl3);
    tl3.to('.nav-' + q + '-open', {display: 'block'})
    tl3.from( '.' + q , 1, {x: '-250', opacity: 0}) 

    Start(tl4);
    tl4.to('.nav-' + c + '-open', {display: 'block'})
    tl4.from( '.' + c , 1, {x: '-250', opacity: 0}) 
}

 abtBtn.addEventListener('click', () =>{
  active(tl)
  toggleTween(tl)
  

})

dlBtn.addEventListener('click', () =>{
  
  active(tl2)
  toggleTween(tl2)
   
})

spBtn.addEventListener('click', () =>{
  
  active(tl3)
  toggleTween(tl3)
   
})

ckBtn.addEventListener('click', () =>{
  
  active(tl4)
  toggleTween(tl4)
   
})

function active(z){
  if(z.isActive() == true){
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
    
}
}

function toggleTween(tween){
  
  if(tween == tl){
    
  

    // if(t.reversed(false)){
    //   t.play()
    //   tl2.reverse()
    // }

    // if(t.reversed(true)){
    //   t.reverse()
    // }
 
   // t.play()
    tl2.reverse()
    tl3.reverse()
    tl4.reverse()
    //t.reversed() ? t.play() : t.reverse();
   // t.reversed() ? t.play() : t.reverse();
    tl.reversed() ? tween.play() : tween.reverse();
   
  }

  if(tween == tl2){

   
    tl.reverse()
    tl3.reverse()
    tl4.reverse()
    //t.reversed() ? t.play() : t.reverse()
     //t.play()//
    tl2.reversed() ? tween.play() : tween.reverse();  
  }

  if(tween == tl3){
    tl.reverse()
    tl2.reverse()
    tl4.reverse()
    tl3.reversed() ? tween.play() : tween.reverse(); 
  }

  if(tween == tl4){
    tl.reverse()
    tl2.reverse()
    tl3.reverse()
    tl4.reversed() ? tween.play() : tween.reverse(); 
  }

  
  
  //tween.reversed() ? tween.play() : tween.reverse();
  
}
