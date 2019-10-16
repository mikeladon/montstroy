let serviceBlocks = document.querySelectorAll(".services-item");
let contactUsHeaderButton = document.querySelector(".nav-contacts__button");
let contactUsIntroButton = document.querySelector(".button-contact");
let servicesButton = document.querySelector(".button-services");
let footer = document.querySelector(".footer");
let servicesBlock = document.querySelector(".services");
let featureButtons = document.querySelectorAll(".button-slider");
let openSectionsButton = document.querySelector(".open-sections");
let sectionsList = document.querySelector(".nav-section");
let featureSlides = document.querySelectorAll(".services-feature");
let partnerSlides = document.querySelectorAll(".partners__item");
let blockHeight;
const TABLET__WIDTH = 767;
const DESKTOP__WIDTH = 1023;


// Делаем элементы блока service активными

let onResizeWindow = function () {
		if (window.innerWidth > TABLET__WIDTH && window.innerWidth < DESKTOP__WIDTH) {
			document.querySelector(".services-items").style.height = blockHeight;
		} else {
			document.querySelector(".services-items").style.height = "";
		}
}

serviceBlocks.forEach(function (block) {
	block.addEventListener("click", function (evt) {
		evt.preventDefault();
		let activeBlock = document.querySelector(".active-item");
		activeBlock.classList.remove("active-item");
		this.classList.add("active-item");
		blockHeight = this.clientHeight + "px";
		this.blur();
		onResizeWindow();
	})
});

window.addEventListener("load", onResizeWindow);
window.addEventListener("resize", onResizeWindow);

// Скролл к футеру по клику на кнопку Обратная связь
contactUsHeaderButton.addEventListener("click", function (e) {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
});

// Скролл к футеру по клику на кнопку Связаться с нами
contactUsIntroButton.addEventListener("click", function (e) {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
});

// Скролл к services по клику на кнопку Наши услуги
servicesButton.addEventListener("click", function (e) {
  e.preventDefault();
  servicesBlock.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
});

// Делаем элементы блока features активными
featureButtons.forEach(function(button) {
	button.addEventListener("click", function (evt) {
		evt.preventDefault();
		document.querySelector(".active-slider").classList.remove("active-slider");
		document.querySelector(".active-feature").classList.remove("active-feature");
		if (this.classList.contains("button-slider-first")) {
			this.classList.add("active-slider");
			document.querySelector(".feature-quality").classList.add("active-feature");
		} else if (this.classList.contains("button-slider-second")) {
			this.classList.add("active-slider");
			document.querySelector(".feature-agreement").classList.add("active-feature");
		} else if (this.classList.contains("button-slider-third")) {
			this.classList.add("active-slider");
			document.querySelector(".feature-base").classList.add("active-feature");
		}
	})
});

featureSlides.forEach(function (slide) {
	slide.addEventListener("click", function (evt) {
		evt.preventDefault();
		document.querySelector(".active-slider").classList.remove("active-slider");
		document.querySelector(".active-feature").classList.remove("active-feature");
		if (this.classList.contains("feature-quality")) {
			this.classList.add("active-feature");
			document.querySelector(".button-slider-first").classList.add("active-slider");
		} else if (this.classList.contains("feature-agreement")) {
			this.classList.add("active-feature");
			document.querySelector(".button-slider-second").classList.add("active-slider");
		} else if (this.classList.contains("feature-base")) {
			this.classList.add("active-feature");
			document.querySelector(".button-slider-third").classList.add("active-slider");
		}
	})
});

// Делаем элементы блока partners активными

// Открываем секции при нажатии на бургер
let onOverlayClick = function (evt) {
	if (!sectionsList.contains(evt.target)) {
		sectionsList.classList.remove("open-list");
	}
}

openSectionsButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	document.addEventListener("mousedown", onOverlayClick);
	sectionsList.classList.toggle("open-list");
})

// Проверяем инпут для телефона
var element = document.querySelector('.input-phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

// Убираем фокус с кнопок слайдера
document.querySelectorAll(".partners__arrow").forEach(function (button) {
	button.addEventListener("click", function () {
		this.blur();
	})
});

//  делаем свайп
var featureLike = document.querySelector('.feature-quality');
var featureAgreement = document.querySelector(".feature-agreement");
var featureBase = document.querySelector(".feature-base");

// create a simple instance
// by default, it only adds horizontal recognizers
var firstFeature = new Hammer(featureLike);
var secondFeature = new Hammer(featureAgreement);
var thirdFeature = new Hammer(featureBase);

// listen to events...
firstFeature.on("swipeleft", function(ev) {
    if (featureLike.classList.contains("active-feature")) {
    	featureLike.classList.remove("active-feature");
    	document.querySelector(".feature-agreement").classList.add("active-feature");
    	document.querySelector(".button-slider-first").classList.remove("active-slider");
    	document.querySelector(".button-slider-second").classList.add("active-slider");
    }
});

secondFeature.on("swipeleft", function(ev) {
    if (featureAgreement.classList.contains("active-feature")) {
    	featureAgreement.classList.remove("active-feature");
    	document.querySelector(".feature-base").classList.add("active-feature");
    	document.querySelector(".button-slider-second").classList.remove("active-slider");
    	document.querySelector(".button-slider-third").classList.add("active-slider")
    }
}); 

secondFeature.on("swiperight", function(ev) {
    if (featureAgreement.classList.contains("active-feature")) {
    	featureAgreement.classList.remove("active-feature");
    	featureLike.classList.add("active-feature");
    	document.querySelector(".button-slider-second").classList.remove("active-slider");
    	document.querySelector(".button-slider-first").classList.add("active-slider");
    }
});

thirdFeature.on("swiperight", function(ev) {
    if (featureBase.classList.contains("active-feature")) {
    	featureBase.classList.remove("active-feature");
    	featureAgreement.classList.add("active-feature");
    	document.querySelector(".button-slider-third").classList.remove("active-slider");
    	document.querySelector(".button-slider-second").classList.add("active-slider");
    }
});

var firstPartner = document.querySelector(".partners__item--ava");
var secondPartner = document.querySelector(".partners__item--mirror");
var thirdPartner = document.querySelector(".partners__item--shield");
var fourthPartner = document.querySelector(".partners__item--warm");

var firstPartnersButton = document.querySelector(".partners__input--1");
var secondPartnersButton = document.querySelector(".partners__input--2"); 
var thirdPartnersButton = document.querySelector(".partners__input--3"); 
var fourthPartnersButton = document.querySelector(".partners__input--4");

var ava = new Hammer(firstPartner);
ava.on("swipeleft", function (ev) {
	if (firstPartnersButton.checked) {
		firstPartnersButton.checked = false;
		secondPartnersButton.checked = true;
	}
})

var mirror = new Hammer(secondPartner);
mirror.on("swiperight", function (ev) {
	if (secondPartnersButton.checked) {
		secondPartnersButton.checked = false;
		firstPartnersButton.checked = true;
	}
})

var mirror = new Hammer(secondPartner);
mirror.on("swipeleft", function (ev) {
	if (secondPartnersButton.checked) {
		secondPartnersButton.checked = false;
		thirdPartnersButton.checked = true;
	}
})

var shield = new Hammer(thirdPartner);
shield.on("swiperight", function (ev) {
	if (thirdPartnersButton.checked) {
		thirdPartnersButton.checked = false;
		secondPartnersButton.checked = true;
	}
})

var shield = new Hammer(thirdPartner);
shield.on("swipeleft", function (ev) {
	if (thirdPartnersButton.checked) {
		thirdPartnersButton.checked = false;
		fourthPartnersButton.checked = true;
	}
}) 

var warmth = new Hammer(fourthPartner);
warmth.on("swiperight", function (ev) {
	if (fourthPartnersButton.checked) {
		fourthPartnersButton.checked = false;
		thirdPartnersButton.checked = true;
	}
})     


