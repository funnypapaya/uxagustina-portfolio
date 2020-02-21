document.addEventListener("DOMContentLoaded", function () {
  var anchorLinks = document.querySelectorAll('a[href*="#"]')

    for(anchorLink of anchorLinks) {
        anchorLink.addEventListener('click', function (event) {
            event.preventDefault()
            var link = event.currentTarget
            var id = link.hash
            var target = document.querySelector(id)
            
            target.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        })
    }


});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 0 || prevScrollpos >= currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-4.37rem";
    }
    prevScrollpos = currentScrollPos;
}