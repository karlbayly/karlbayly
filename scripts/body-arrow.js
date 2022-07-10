//Gets button

let mybutton = document.getElementById('body-arrow')

// when scrolls past 100px from the top button apears

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop < 100 ||
    document.documentElement.scrollTop < 100
  ) {
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of page

function topFunction() {
  document.body.scrollTop = 1
  document.documentElement.scrollTop = 1
}
