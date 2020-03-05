var toggle = false;
var passedMarker = false;

if (
	'IntersectionObserver' in window &&
	'IntersectionObserverEntry' in window &&
	'intersectionRatio' in window.IntersectionObserverEntry.prototype
) {
	//add class to show
	let observer = new IntersectionObserver((entries) => {
		if (entries[0].boundingClientRect.y < 0) {
			//change transparent navbar style to white style
			switchHeaderStyle('light');
			passedMarker = true;
		} else {
			//change white navbar style to transparent
			if (!toggle) {
				switchHeaderStyle('transparent');
			}
			passedMarker = false;
		}
		console.log('marker: ' + passedMarker);
	});
	observer.observe(document.querySelector('#header-marker'));
}

switchHeaderStyle = (theme) => {
	var nav = document.getElementsByTagName('nav')[0];
	if (theme == 'light') {
		nav.classList.add('header-not-top');
		nav.classList.remove('navbar-dark');
		nav.classList.add('navbar-light');
	} else if (theme == 'transparent') {
		nav.classList.remove('header-not-top');
		nav.classList.remove('navbar-light');
		nav.classList.add('navbar-dark');
	}
};

colapseButton = () => {
	var nav = document.getElementsByTagName('nav')[0];
	if (toggle && !passedMarker) {
		toggle = !toggle;
		switchHeaderStyle('transparent');
	} else {
		toggle = !toggle;
		switchHeaderStyle('light');
	}
	console.log('marker: ' + passedMarker);
	console.log('toggle: ' + toggle);
};

window.sr = ScrollReveal();
sr.reveal('#aboutTitle', {
	duration : 2000,
	origin   : 'top',
	distance : '300px'
});

sr.reveal('#aboutContent', {
	duration : 2000,
	origin   : 'left',
	distance : '300px'
});

sr.reveal('#aboutImg', {
	duration : 2000,
	origin   : 'right',
	distance : '300px'
});

sr.reveal('#contactTitle', {
	duration : 2000,
	origin   : 'bottom',
	distance : '300px'
});

sr.reveal('#contactContent', {
	duration : 2000,
	origin   : 'bottom',
	distance : '300px'
});
