//Gets button

var mybutton = document.getElementById('body-arrow')

// when scrolls past 100px from the top button apears

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of page

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
