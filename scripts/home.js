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