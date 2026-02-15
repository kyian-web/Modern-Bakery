'use strict';

// ======== Modal ========
const backdrop = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.modal-btn-open');
const closeModalBtn = document.querySelector('.modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

// ======== Mobile menu ========
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
