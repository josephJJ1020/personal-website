// set html scroll behavior to smooth when clicking anchor tag
document.addEventListener('click', function(e){  
  var anchor = e.target.closest('a');
  if(anchor !== null) {
  	console.log('hello world');
  	document.querySelector('html').style.scrollBehavior = 'smooth';
    //do something with a tag
  }
});


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
	var nav1 = document.querySelector('.popup-nav')

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
		nav1.classList.remove('active')
		
	}

	slideIn();
	AnimateHome();
	AnimateAbout();
	AnimateSkills();
})

window.addEventListener('scroll', AnimateSkills())


// projects animation

function slideIn () {
	var h = window.innerHeight / 1.1;
	var container = document.querySelectorAll('.project');

	container.forEach(c => {
		var bottom = c.getBoundingClientRect().top;
		var child = c.children[1];
		var text = c.children[0];

		if (bottom < h) {
			text.style.opacity = '1'
			text.style.transform = 'translateX(0)'
			child.style.transform = 'translateX(0)';
			child.style.zIndex = '1';
		} else {
			text.style.opacity = '0'
			text.style.transform = 'translateX(-100%)'
			child.style.transform = 'translateX(100%)';
		}

	});

	var containerEven = document.querySelectorAll('.project:nth-child(even)');

	containerEven.forEach(c => {
		var bottom = c.getBoundingClientRect().top;
		var child = c.children[1];
		var text = c.children[0];

		if (bottom < h) {
			text.style.transform = 'translateX(0)'
			child.style.transform = 'translateX(0)'
		} else {
			text.style.transform = 'translateX(100%)'
			child.style.transform = 'translateX(-100%)'
		}
	})
	/*
	var bottom = container.getBoundingClientRect().top;
	var projectImg = document.querySelectorAll('.project img');

	if (bottom < h) {
		pro
	} else {
		projectImg.style.transform = 'scale(0)'
	}
	*/
}


function AnimateHome() {
	var h = window.innerHeight / 2.5;
	var home = document.querySelector('#home')
	var homeText = document.querySelector('#home div');
	var bottom = home.getBoundingClientRect().top;

	if (bottom < h) {
		homeText.style.transform = 'translateY(0)'
	}
}


function AnimateAbout() {
	var h1 = window.innerHeight / 2.5;
	var about = document.querySelector('#about');
	var aboutDiv = document.querySelector('#about div');
	var bottom = about.getBoundingClientRect().top;

	if (bottom < h1) {
		aboutDiv.style.transform = 'translateX(0)'
	}
}


function AnimateSkills() {
	var h = window.innerHeight / 2.5;
	var skills = document.querySelectorAll('#skills div ul');
	var bottom = document.querySelector('#skills').getBoundingClientRect().top;
	
	if (bottom < h) {
		skills.forEach(ul => {

			ul.style.transform = 'scale(1)'
		})
	}
}

// close button 

const close = document.querySelector('.nav ul .close');
close.addEventListener('click', () => {
	let nav = document.querySelector('.nav ul');

	nav.style.display = 'none';
})


const sentClose = document.querySelector('.sent-container .close');
sentClose.addEventListener('click', () => {
	let sent = document.querySelector('.sent-container');

	sent.style.display = 'none'
})


const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', function() {
	let sent = document.querySelector('.sent-container');

	sent.style.display = 'flex';
})


var searchClickEvent = function() {
  if (window.matchMedia("(max-width: 420px)").matches) {
    document.querySelector('.logo').addEventListener("click", () => {

    	let nav = document.querySelector('.nav ul');
    	nav.style.display = 'flex';
    	console.log('working!')
    });
  }
  else {
  	console.log('err')
  }
}


window.addEventListener('resize', searchClickEvent())

// note: always defer js file