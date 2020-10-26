import navHandler, {clearContent} from './nav';
import {hiddenOutlineRectangleSource, hiddenRectangleSource, hiddenOutlineStarSource, hiddenStarSource} from './hiddenfiles';

// DOM ELEMENTS

const journalSaveButton = document.querySelector('.btn-save');
const journalCancelButton = document.querySelector('.btn-cancel');
const comprehensionImgs = document.querySelectorAll('.comprehension__display-create > img');
const ratingStars = document.querySelectorAll('.rating__display--create > img');

// EVENT LISTENERS
  
journalSaveButton.addEventListener('click', () => {
    clearContent();
    return navHandler('navJournal');
});
  
journalCancelButton.addEventListener('click', () => {
    clearContent();
    return navHandler('navJournal');
});

// LOGIC FOR STARS AND RECTS

comprehensionImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
      comprehensionImgs.forEach(rect => rect.src = hiddenOutlineRectangleSource);
      for (let i = 0; i <= index; i++) {
        comprehensionImgs[i].src = hiddenRectangleSource; 
      };
    });
  });
  
  ratingStars.forEach((img, index) => {
    img.addEventListener('click',() => {
      ratingStars.forEach(star => star.src = hiddenOutlineStarSource);
      for (let i = 0; i <= index; i++) {
        ratingStars[i].src=hiddenStarSource;
      };
    });
  });
  
  // FORM
  
const journalForm = document.querySelector('form');
  
  journalForm.addEventListener('submit', (event) => {
  
    // Prevent default behaviour
    event.preventDefault();
  
    // Get list from localStorage
    /*
    const list = localStorage.getItem('history') 
      ? JSON.parse(localStorage.getItem('history'))
      : [];
    */
    
    // Construct new entry

    const rating = document.querySelectorAll(`.rating__display--create > img[src='${hiddenStarSource}']`).length;
    const comprehension = document.querySelectorAll(`.comprehension__display-create > img[src='${hiddenRectangleSource}']`).length;
    const motto = journalForm.motto.value;
    const notes = journalForm.notes.value;
  
    const newEntry = { rating:rating, comprehension:comprehension, motto:motto, notes:notes };
  
    // Write to localStorage
    // localStorage.setItem('history', JSON.stringify([...list, newEntry]));
    
    // OR SEND TO API


    //Reset Form
    
    journalForm.motto.value = '';
    journalForm.notes.value = '';
    ratingStars.forEach(star => star.src = hiddenOutlineStarSource);
    comprehensionImgs.forEach(rect => rect.src = hiddenOutlineRectangleSource);
  
  });