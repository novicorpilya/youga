/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/***/ ((module) => {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;

        }
    })
    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;

        }
    })

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ ((module) => {

function formMain() {
    let form = document.getElementById('form'),
        input = form.querySelectorAll('input');
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо',
        failure: 'Ошибка'
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.after(statusMessage);
        let formData = new FormData(form);


        function postData(data) {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status === 200) {
                        resolve();
                    } else {
                        reject();
                    }
                };
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .finally(clearInput);
    });
}
module.exports = formMain;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descAll = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    })

    descAll.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        })
    })

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    })
}
module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function sliderWe() {
    let slideIndex = 1,
        sliderItem = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        sliderDots = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlide(slideIndex);

    function showSlide(n) {
        if (n > sliderItem.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = sliderItem.length;
        }
        sliderItem.forEach((item) => {
            item.style.display = 'none';
        })
        dots.forEach((item) => {
            item.classList.remove('dot-active');
        })
        sliderItem[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlide(slideIndex += n);
    }
    function currentSlide(n) {
        showSlide(slideIndex = n);
    }
    prev.addEventListener('click', function () {
        plusSlide(-1);
    })
    next.addEventListener('click', function () {
        plusSlide(1);
    })

    sliderDots.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }

    })
}
module.exports = sliderWe;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
    const tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTab(a = 1) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTab();
    function showTab(b) {
        hideTab(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');

    }

    info.addEventListener('click', function (e) {
        for (let i = 0; i < tab.length; i++) {
            if (e.target == tab[i]) {
                showTab(i);
                break;
            }
        }
    })
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/***/ ((module) => {

function timer() {
    let deadline = '2030-04-30T21:22:05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.getElementsByClassName('hours');
        let minutes = timer.getElementsByClassName('minutes');
        let seconds = timer.getElementsByClassName('seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours[0].textContent = t.hours;
            if (hours[0].textContent.length < 2) {
                hours[0].textContent = '0' + t.hours;
            }
            minutes[0].textContent = t.minutes;
            if (minutes[0].textContent.length < 2) {
                minutes[0].textContent = '0' + t.minutes;
            }
            seconds[0].textContent = t.seconds;
            if (seconds[0].textContent.length < 2) {
                seconds[0].textContent = '0' + t.seconds;
            }
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours[0].textContent = '00';
                minutes[0].textContent = '00';
                seconds[0].textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

} module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
    form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
    slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
    tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
    timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
    modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

calc();
form();
slider();
tabs();
timer();
modal();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map