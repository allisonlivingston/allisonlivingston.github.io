// -- IMAGE CAROUSEL -- //

var myIndex = 0
carousel()

function carousel() {
    var i
    var x = document.getElementsByClassName('myImages')
    for (i = 0; i < x.length; i++) {
       x[i].style.display = 'none'
    }
    myIndex++
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = 'block'
    setTimeout(carousel, 8500)
}

// -- STICKY NAV BAR -- //

const nav = document.querySelector('#navigation')
const navTop = nav.offsetTop

function stickyNav() {
  if(window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px'
    document.body.classList.add('fixed-header')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-header')
  }
}

window.addEventListener('scroll', stickyNav)
