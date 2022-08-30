const abtBtn = document.querySelector('.aboutBtn');
const abtOpen = document.querySelector('.nav-about-open');
const dlBtn = document.querySelector('.dealsBtn');
const dlOoen = document.querySelector('.nav-deals-open');  



const tl = gsap.timeline({defaults:{duration: 1}, paused: true, reversed: true});



function Start(){

  tl.add('start')
  tl.to('.move', 1, {width: '60%', ease: Power2.easeOut},'start')
  tl.to('.action', {width: '80%'}, 'start')
  tl.to('.list-item', { margin: 'auto'}, 'start')
  tl.to('.nav-deals-open', {display: 'block'})
  tl.from( '.deals', 1, {x: '-500', opacity: 0})
}

if(document.body.offsetWidth > 576 && document.body.offsetWidth < 991){

  tl.add('change')
  tl.to('.jumbotron', 1, {opacity: 0} )
  tl.to('.jumbotron', {display: 'none'}, 'change')
  tl.to('.nav-about-open', {display: 'block'}, 'change')
  tl.from('.about', {opacity: 0})
}

  if(document.body.offsetWidth >= 992){
      Start();
 }
 
 abtBtn.addEventListener('click', () =>{
  active()
  toggleTween(tl)

  let x = "about";
  

})

dlBtn.addEventListener('click', () =>{
  active()
  toggleTween(tl)
  
  
})

function active(){
  if(tl.isActive() == true){
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
    
}
}

function toggleTween(tween){
  tween.reversed() ? tween.play() : tween.reverse();
}
