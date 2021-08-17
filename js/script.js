
$(document).ready(function () {
	setTimeout(() => {
		$('body').addClass('visiblle');
		$('.preloader').addClass('translateToLeft');
		$('.header').addClass('translateToLeft');
	}, 3000); 
	setTimeout(() => {
		$('.header').addClass('translateToLeft');
	}, 5000); 
	
	
	  $('.menu-toggler').on('click', function () {
	  $(this).toggleClass('open');
	  $('.navigation').toggleClass('open');
	  $('.header__menu').toggleClass('open');
	  $('.header__menu .button').toggleClass('open');
	  $('.navigation .button').toggleClass('open2');
	  $('.navigation .contact-mobile').toggleClass('open');
	  
	  
	  
	});
	$('.nav-list_link').on('click', function () {
	  $('.menu-toggler').removeClass('open');
	  $('.navigation').removeClass('open');
	  $('.header__menu').removeClass('open');
	  $('.navigation .button').removeClass('open2');
	  $('.navigation .contact-mobile').removeClass('open');
	});
	$('.navigation .button').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.navigation').removeClass('open');
		$('.header__menu').removeClass('open');
		$('.header__menu .button').removeClass('open');
		$('.navigation .button').removeClass('open2');
		$('.navigation .contact-mobile').removeClass('open');
	  });
	 $('.writetUs-mobile__icons_icon').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.navigation').removeClass('open');
		$('.header__menu').removeClass('open');
		$('.header__menu .button').removeClass('open');
		$('.navigation .button').removeClass('open2');
		$('.navigation .contact-mobile').removeClass('open');
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop()){
			$('.header__menu').addClass('menu-move');
		}
		else{
			$('.header__menu').removeClass('menu-move');
		}
	});
	
  });

  // tel picker
// swiper1
const swiper = new Swiper('.feedback-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor:true,
	slidesPerView: 4,
	spaceBetween: 15,
	
	breakpoints: {
		310: {
			slidesPerView: 1.25,
		  //   spaceBetween: 20
		  },
		// when window width is >= 370px
		370: {
		  slidesPerView: 1.4,
		//   spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 1.5,
		//   spaceBetween: 30
		},
		// when window width is >= 640px
		769: {
			slidesPerView: 2.4,
		  //   spaceBetween: 40
		  },
		1000: {
			slidesPerView: 3.3,
		  //   spaceBetween: 40
		  },
		1200: {
			slidesPerView: 4,
		  //   spaceBetween: 40
		  }
		
	  }
  
  });

  // swiper2
const swiper2 = new Swiper('.review-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// slidesPerView: 2.58,
	// spaceBetween: 15,
	grabCursor:true,
	centeredSlides:true,
	// slidesPerView: 'auto',
	effect: 'coverflow',
	coverflowEffect: {
	  rotate: 0,
	  slideShadows: true,
	  stretch:0,
	  depth:100,
	  modifier: 2,
	},

		// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	 prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		310: {
			slidesPerView: 1.02,
		  //   spaceBetween: 20
		  },
		// when window width is >= 370px
		370: {
		  slidesPerView: 1.02,
		//   spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
		  slidesPerView: 1.1,
		//   spaceBetween: 30
		},
		// when window width is >= 640px
		769: {
			slidesPerView: 1.8,
		  //   spaceBetween: 40
		  },
		1000: {
			slidesPerView: 2,
		  //   spaceBetween: 40
		  },
		1200: {
			slidesPerView: 2.58,
		  //   spaceBetween: 40
		  }
		
	  }
  
  });

// validation
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validationName (){
	var name = document.getElementById('name');
	var nameValue = name.value;

	if(nameValue != ''){
		name.style.border = '1px solid #00ff00';
		name.style.boxShadow = ' 0px 0px 5px #00ff00';
	}
	else{
		name.style.border = '1px solid #ddd';
		name.style.boxShadow = ' 0px 0px 0px #ddd';
	}
}

function validationEmail (){	
	var email = document.getElementById('email');
	var emailValue = email.value;

	if(emailValue.match(pattern)){
		email.style.border = '1px solid #00ff00';
		email.style.boxShadow = ' 0px 0px 5px #00ff00';
	}
	else{
		email.style.border = '1px solid #ff0000';
		email.style.boxShadow = ' 0px 0px 5px #ff0000';
	}

	if(emailValue == ''){
		email.style.border = '1px solid #ddd';
		email.style.boxShadow = ' 0px 0px 0px #ddd';
	}
}

// phone val
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
//   hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  preferredCountries: ['ua', 'us'],
  separateDialCode: true,
  utilsScript: "js/utils.js",
});

var input = document.querySelector("#phone2");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  // geoIpLookup: function(callback) {
  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  //     var countryCode = (resp && resp.country) ? resp.country : "";
  //     callback(countryCode);
  //   });
  // },
//   hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  preferredCountries: ['ua', 'us'],
  separateDialCode: true,
  utilsScript: "js/utils.js",
});


