import Library from './modules/library.js';
import displaySection from './modules/displaySection.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// let listBooks
const listBooks = new Library();
listBooks.className = 'purple';

// ====================== NAVIGATION =========================
function UpdateTime() {
  const currentDate = `${DateTime.now().monthLong} ${DateTime.now().day} ${DateTime.now().year}, ${DateTime.now().hour}:${DateTime.now().minute}:${DateTime.now().second}`;
  const dateElement = document.getElementById('date');
  dateElement.innerText = currentDate;
}

UpdateTime();
setInterval(UpdateTime, 1000);

// MENUS
const listMenuLink = document.querySelector('#m-list');
const addMenuLink = document.querySelector('#m-add');
const contactMenuLink = document.querySelector('#m-contact');

// const mainSection = document.querySelector('.main-section');

listMenuLink.addEventListener('click', () => {
  displaySection('book-list');
});

addMenuLink.addEventListener('click', () => {
  displaySection('add-book');
});

contactMenuLink.addEventListener('click', () => {
  displaySection('contact');
});