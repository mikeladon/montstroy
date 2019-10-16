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
function telephoneCheck() {
  var patt = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
  if(patt.test(document.querySelector(".input-phone").value) == false) {
  	document.querySelector(".input-phone").value = "";
	}
}
document.querySelector(".input-phone").addEventListener("change", telephoneCheck);


// Убираем фокус с кнопок слайдера

document.querySelectorAll(".partners__arrow").forEach(function (button) {
	button.addEventListener("click", function () {
		this.blur();
	})
})
