window.onload = () =>{

const abtBtn = document.querySelector('.aboutBtn');
const abtOpen = document.querySelector('.nav-about-open');
const dlBtn = document.querySelector('.dealsBtn');
const dlOpen = document.querySelector('.nav-deals-open');
const front = document.querySelector('.move');  



const tl = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});
const tl2 = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});

const x = "deals";
const y = "about";

function Start(t){
    t.add('start')
    t.to(front, 1, {width: '60%', ease: Power2.easeOut},'start')
    t.to('.action', {width: '80%'}, 'start')
    t.to('.list-item', { margin: 'auto'}, 'start')
   // tl.to('.nav-' + y + '-open', {display: 'block'})
}


if(document.body.offsetWidth > 576 && document.body.offsetWidth < 991){

  tl.add('change')
  tl.to('.jumbotron', 1, {opacity: 0} )
  tl.to('.jumbotron', {display: 'none'}, 'change')
  tl.to('.nav-about-open', {display: 'block'}, 'change')
  tl.from('.about', {opacity: 0})
}

  if(document.body.offsetWidth >= 992){

    Start(tl);
    tl.to('.nav-' + y + '-open', {display: 'block'})
    tl.from( '.' + y , 1, {x: '-500', opacity: 0}) 

    Start(tl2);
    tl2.to('.nav-' + x + '-open', {display: 'block'})
    tl2.from( '.' + x , 1, {x: '-250', opacity: 0}) 
}

 abtBtn.addEventListener('click', () =>{
  active(tl)
  toggleTween(tl)

})

dlBtn.addEventListener('click', () =>{
  
  active(tl2)
  toggleTween(tl2)
   
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
    tl2.reverse({delay: 1})
    tl.reversed() ? tween.play() : tween.reverse();
   
  }

  if(tween == tl2){
    
    tl.reverse({delay: 1})
    tl2.reversed() ? tween.play() : tween.reverse();
  }

  
  
  //tween.reversed() ? tween.play() : tween.reverse();
  
}

}