document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}


function backToTop() {
	/*
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	*/

	var popup = document.querySelector('.popup-nav')
	popup.classList.toggle('active')

	var button = document.querySelector('.backtotop');
	button.classList.toggle('rotateleft')
}


backtotop = document.getElementById("#backtotop");


window.addEventListener('scroll', function() {
	var container = document.querySelector('.about');
	var bottom = container.getBoundingClientRect().top;
	var h = window.innerHeight / 2.5;

	var nav = document.querySelector('.popup-nav-container')

	if (bottom < h) {
		/*
		nav.style.display = 'block'
		*/
		nav.classList.add('visible')

		
	}
	else {
		/*
		nav.style.display = 'none'
		*/

		nav.classList.remove('visible')
		
	}

})