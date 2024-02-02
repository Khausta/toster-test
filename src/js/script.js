
function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      
      var deadline="February 03 2024 00:00:00 GMT+0300"; 
      initializeClock('countdown', deadline);

const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 2000,
        autoplay: true,
        spaceBetween: 10,
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
                autoplayDisableOnInteraction: true,
        },

      });
   
const customBullets = document.querySelectorAll('.swiper-pagination-bullet');
for (let i = 0; i < customBullets.length; i++) {
  customBullets[i].classList.add(`swiper-pagination__img_${i + 1}`);
}

class Menu {
        constructor (menuBlock) {
                this.parentBlock = document.querySelector(`.${menuBlock}`);
                this.selectBtn = this.parentBlock.querySelector('.select-btn');
                this.options = this.parentBlock.querySelectorAll(".option");
                this.sBtnText = this.parentBlock.querySelector(".sBtn-text");
        }

        init() {
                this.clickBtn();
                this.clickOption();
        }

        clickBtn() {
                this.selectBtn.addEventListener("click", () =>
                this.parentBlock.classList.toggle("active")
              );    
        }

        clickOption() {
                this.options.forEach((option) => {
                        option.addEventListener("click", () => {
                          let selectedOption = option.querySelector(".option-text").innerText;
                          this.sBtnText.innerText = selectedOption;
                      
                          this.parentBlock.classList.remove("active");
                        });
                      });
        }
}

const sizeMenu = new Menu('good__size-menu');
sizeMenu.init();

const colorMenu = new Menu('good__color-menu');
colorMenu.init();


                              

