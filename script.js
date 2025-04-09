let cursor = document.querySelector('.cursor')

let main = document.querySelector('main')
let heroImg = document.querySelectorAll('img')
 

heroImg.forEach((val)=>{ 

val.addEventListener('mouseenter',function(dets){
    cursor.classList.add('cursor-info')
    cursor.innerHTML = 'view more' 
})

val.addEventListener('mouseleave',function(dets){ 
    cursor.classList.remove('cursor-info')
    cursor.innerHTML = ' '

    console.log('mouse leave')
})

})



 

main.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';

    
})

main.addEventListener('touchmove',function(e){

    const touch = e.touches[0]
    
    cursor.style.left = touch.pageX + 'px';
    cursor.style.top = touch.pageY + 'px';
})

 