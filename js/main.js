'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click',open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const btnId = tabTarget.dataset.button;
    console.log(btnId);
    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });
    tabTarget.classList.add('tabs__btn-item--active');
    console.log()
    const tabContentTarget = document.querySelector(`#${btnId }`);
    tabContentTarget.classList.add('tabs__content-item--active');
};

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click',() => {
    menu.classList.toggle('menu--active');
});

