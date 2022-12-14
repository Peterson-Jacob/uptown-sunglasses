const abtBtn = document.querySelector('.aboutBtn');
const abtOpen = document.querySelector('.nav-about-open');
const dlBtn = document.querySelector('.dealsBtn');
const dlOpen = document.querySelector('.nav-deals-open');
const spBtn = document.querySelector('.shopBtn');
const shOpen = document.querySelector('.nav-shop-open');
const ckBtn = document.querySelector('.checkoutBtn');
const ckOpen = document.querySelector('.nav-checkout-open');
const front = document.querySelector('.move');  
const logo = document.querySelector('.header-logo');  


const t = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl2 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl3 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl4 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl5 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});

let winWidth = document.body.offsetWidth;

gsap.from('.cover', 3, {opacity: 0})
gsap.from('.header-logo',  {delay: 0, y: '100'})
gsap.from('.header-logo',  {delay: 0, opacity: 0})
gsap.from('.action',  {delay: 1, x: '-100'})
gsap.from('.action',  {delay: 1, opacity: 0})
gsap.to('.actionHeader', {delay: 0.75, duration: 2, text: "Z-Model Sunglasses", ease: "none"});
gsap.from('.list-item',  {delay: 1, opacity: 0, stagger: 0.5})




if(winWidth <= 991){
  
  t.add('change')
  t.to('.jumbotron', 1, {opacity: 0}, 'change')
  t.to('.jumbotron', {display: 'none'}, 'change')
  tl.to('.nav-about-open', {display: 'block'})
  tl.from('.about', {opacity: 0})
  tl2.to('.nav-deals-open', {display: 'block'})
  tl2.from('.deals', {opacity: 0})
  tl3.to('.nav-shop-open', {display: 'block'})
  tl3.from('.shop', {opacity: 0})
  tl4.to('.nav-checkout-open', {display: 'block'})
  tl4.from('.checkout', {opacity: 0})
  tl5.to('.nav-checkout-open', {display: 'none'})
  tl5.to('.nav-thankyou-open', {display: 'block'})
}

  if(winWidth >= 992){
  
    t.add('start')
    t.to(front, 1, {width: '60%', ease: Power4.out},'start')
    t.to('.action', {width: '100%'}, 'start')
    t.to('.list-item', { margin: 'auto'}, 'start')
    tl.to('.nav-about-open', {display: 'block'})
    tl.from( '.about' , 1, {x: '-500', opacity: 0}) 
    tl2.to('.nav-deals-open', {display: 'block'})
    tl2.from( '.deals'  , 1, {y: '-250', opacity: 0}) 
    tl3.to('.nav-shop-open', {display: 'block'})
    tl3.from( '.shop' , 1, {x: '-50', opacity: 0}) 
    tl4.to('.nav-checkout-open', {display: 'block'})
    tl4.from( '.checkout' , 1, {y: '-500', opacity: 0}) 
    tl5.to('.nav-checkout-open', {display: 'none'})
    tl5.to('.nav-thankyou-open', {display: 'block'})
    
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

logo.addEventListener('click', () =>{

  if(t.reversed() == false){
    t.reverse()
    tl.reverse(true)
    tl2.reverse(true)
    tl3.reverse(true)
    tl4.reverse(true)
    tl5.reverse(true)
  }
})

function active(e){
  if(e.isActive() == true){
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
    
}
}

function toggleTween(tween){ 
 
  if(tween == tl){

     if(tl.reversed() == false){
       t.reverse()
     }
     if(tl.reversed() == true){
      t.play()
      
    }

    if(tl5.reversed() == false){
      tl5.reverse(true)
     }

    
    tl2.reverse(true)
    tl3.reverse(true)
    tl4.reverse(true)
    
    tl.reversed() ? tween.play() : tween.reverse();
   
  }

  if(tween == tl2){
    if(tl2.reversed() == false){
      t.reverse()
    }
    if(tl2.reversed() == true){
     t.play()
    
   }

   if(tl5.reversed() == false){
    tl5.reverse(true)
   }
   
    tl.reverse(true)
    tl3.reverse(true)
    tl4.reverse(true)
    tl2.reversed() ? tween.play() : tween.reverse();  
  }

  if(tween == tl3){
   
    if(tl3.reversed() == false){
      t.reverse()
    }
    if(tl3.reversed() == true){
     t.play()
     
   }

   if(tl5.reversed() == false){
    tl5.reverse(true)
   }

    tl.reverse(true)
    tl2.reverse(true)
    tl4.reverse(true)
    tl3.reversed() ? tween.play() : tween.reverse(); 
  }

  if(tween == tl4){
    
    
    if(tl4.reversed() == false){
      t.reverse()
      tl5.reverse(true);
  
    }
    if(tl4.reversed() == true){
     t.play()
    
   }
 
    tl.reverse(true)
    tl2.reverse(true)
    tl3.reverse(true)
    tl4.reversed() ? tween.play() : tween.reverse(); 
  } 
    
 }

