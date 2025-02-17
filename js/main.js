'use strict'
document.addEventListener("DOMContentLoaded", () => {

    // SLIDER ADVANTAGES

    const sliderAdvantages = document.querySelector('.swiper.advantages__slider')
    let mySwiper

    function mobileSliderAdvantages() {
        
        if (window.innerWidth <= 929 && sliderAdvantages.dataset.mobile === 'false') {
            mySwiper = new Swiper(sliderAdvantages, {
                loop: true,
                pagination: {
                    el: '.swiper-pagination.swiper-pagination--advantages',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next.swiper-button-next--advantages',
                    prevEl: '.swiper-button-prev.swiper-button-prev--advantages',
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                    },
                    610: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    }
                }
            })
            sliderAdvantages.dataset.mobile = true
        }
        if (window.innerWidth > 929) {
            sliderAdvantages.dataset.mobile = false
            if (sliderAdvantages.classList.contains('swiper-initialized')) {
                mySwiper.destroy()
            }
        }
    }

    mobileSliderAdvantages()
    window.addEventListener('resize', mobileSliderAdvantages)

    // SLIDER PRESENTATION

    const sliderPresentation = document.querySelector('.swiper--presentation')

    const presentationSwiper = new Swiper(sliderPresentation, {
        loop: true,
        pagination: {
            el: '.swiper-pagination.swiper-pagination--presentation',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.swiper-button-next--presentation',
            prevEl: '.swiper-button-prev.swiper-button-prev--presentation',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            610: {
                slidesPerView: 2,
                spaceBetween: 25,
            }
        }
    })

    // ADVANTAGES MORE

    const advantagesMoreElements = document.querySelectorAll('.advantages__more')
    const advantagesItemBtns = document.querySelectorAll('.advantages__item-btn')

    advantagesItemBtns.forEach((btn, index) => {
        btn.addEventListener('click', (evt) => {
            const target = evt.target
            if (advantagesMoreElements[index]) {
                if (target.classList.contains('advantages__item-btn--active')) {
                    target.classList.remove('advantages__item-btn--active')
                    advantagesMoreElements[index].classList.remove('advantages__more--active')
                } else {
                    target.classList.add('advantages__item-btn--active')
                    advantagesMoreElements[index].classList.add('advantages__more--active')
                }           
            }
        })
    })
})

// NOTE

const noteEl = document.getElementById('note')
const noteMoreEl = document.getElementById('note-more')
const noteBtn = document.getElementById('note-btn')
const noteBtnRotate = document.getElementById('note-btn-rotate')

noteBtn.addEventListener('click', () => {
    noteEl.classList.remove('note--active')
    noteMoreEl.classList.add('note--active')
})

noteBtnRotate.addEventListener('click', () => {
    noteEl.classList.add('note--active')
    noteMoreEl.classList.remove('note--active')
})