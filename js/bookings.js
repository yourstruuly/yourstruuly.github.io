let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close_btn');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
})
closeBtn.addEventListener('click', function(){
    menu.classList.remove('active');
})




/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(` .imagee`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(` .head-policy,
          .inputBox`,{
    origin: 'left',
})

sr.reveal(`.normal_content, .radioBox`,{
    origin: 'right',
    interval: 100,
})

