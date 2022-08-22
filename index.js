// FUNCTION LIST
//******************************************************************************** */

function hide(element){
    element.classList.add('hide')
}
function show(element){
    element.classList.remove('hide')
}
function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}
//******************************************************************************** */


const fadeOut       =document.getElementById    ('fade-out')
const menu          =document.getElementById    ('menu')
const cancel        =document.getElementById    ('close')
const navBar        =document.getElementById    ('list-div')




menu.addEventListener('click', function(){
    hide(menu)
    show(cancel)
    show(navBar)
    show(fadeOut)
   disableScroll()
})



cancel.addEventListener('click', function(){
    show(menu)
    hide(cancel)
    hide(navBar)
    hide(fadeOut)  
    enableScroll()  
})

fadeOut.addEventListener('click', function(){
    show(menu)
    hide(cancel)
    hide(navBar)
    hide(fadeOut)    
    enableScroll()
})