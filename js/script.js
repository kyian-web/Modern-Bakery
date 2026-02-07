'use strict';

const backdrop = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.modal-btn-open');
const closeModalBtn = document.querySelector('.modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
