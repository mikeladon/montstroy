let serviceBlocks = document.querySelectorAll(".services-item");
let contactUsHeaderButton = document.querySelector(".nav-contacts__button");
let contactUsIntroButton = document.querySelector(".button-contact");
let servicesButton = document.querySelector(".button-services");
let footer = document.querySelector(".footer");
let servicesBlock = document.querySelector(".services");
let featureButtons = document.querySelectorAll(".button-slider");
let openSectionsButton = document.querySelector(".open-sections");
let sectionsList = document.querySelector(".nav-section");


// Делаем элементы блока service активными
serviceBlocks.forEach(function (block) {
	block.addEventListener("click", function (evt) {
		evt.preventDefault();
		let activeBlock = document.querySelector(".active-item");
		activeBlock.classList.remove("active-item");
		this.classList.add("active-item");
		this.parentElement.style.height = this.clientHeight + "px";
	})
});

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

// Открываем секции при нажатии на бургер
openSectionsButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	sectionsList.classList.toggle("open-list");
})

// Добавляем маску для телефона
var element = document.querySelector('.input-phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);
