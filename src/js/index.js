// IMPORTS

import indexBuddies, { indexCard, indexTeam } from "./dashboard";
import renderJournal from "./journal";
import renderTeams from "./teams";
import renderBuddies from "./buddies";

// ROOT INDEX
const rootPage = document.querySelector("#indexPage");

// Link Config
const DASHBOARD_PAGE = "navDash";
const BUDDY_PAGE = "navBuddy";
const TEAM_PAGE = "navTeams";
const ENERGY_PAGE = "navEnergy";
const JOURNAL_PAGE = "navJournal";
const JOURNAL_ENTRY_PAGE = "journalEntryButton";

// NAV ELEMENTS
const navBar = document.querySelector("#navBar");
const journalEntryButton = document.querySelector("#journalEntryButton");
const journalSaveButton = document.querySelector('.btn-save');
const journalCancelButton = document.querySelector('.btn-cancel');

// RATE TODAY ELEMENTS

const comprehensionImgs = document.querySelectorAll('.comprehension__display-create > img');
const ratingStars = document.querySelectorAll('.rating__display--create > img');

// Event listeners
navBar.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;
  if (clickedID !== 'navBar') {
    clearContent();
    toggleNav(event);
    return navHandler(clickedID);
  };
});

journalEntryButton.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;
  clearContent();
  return navHandler(clickedID);
});

journalSaveButton.addEventListener('click', () => {
  clearContent();
  return navHandler('navJournal');
});

journalCancelButton.addEventListener('click', () => {
  clearContent();
  return navHandler('navJournal');
});

// NavBar logic
function navHandler(pageName) {
  let contentArea = document.querySelector("#content");

  switch (pageName) {
    case DASHBOARD_PAGE:
      let loadIndexPage = document.querySelector("#indexPage");
      loadIndexPage.classList.remove('hidden');
      break;

    case BUDDY_PAGE:
      let loadBuddyPage = document.getElementById("buddyPage");
      loadBuddyPage.classList.remove('hidden');
      break;

    case TEAM_PAGE:
      let loadTeamsPage = document.querySelector("#teamsPage");
      loadTeamsPage.classList.remove('hidden');
      break;

    case ENERGY_PAGE:
      let loadEnergyPage = document.querySelector("#energyPage");
      loadEnergyPage.classList.remove('hidden');
      break;

    case JOURNAL_PAGE:
      let loadJournalPage = document.querySelector("#journalPage");
      loadJournalPage.classList.remove('hidden');
      break;

    case JOURNAL_ENTRY_PAGE:
      let loadJournalEntryPage = document.querySelector("#journalEntryPage");
      loadJournalEntryPage.classList.remove('hidden');
      break;

    default:
      break;
  };
};

// NAV FUNCTIONS

function toggleNav(event) {
  let allIcons = document.querySelectorAll('.navbar__icon');
  allIcons.forEach((icon) => {
    icon.classList.remove('navbar__icon--active');
  });
  event.target.classList.add('navbar__icon--active');
};

function clearContent() {
  document.querySelectorAll('.content').forEach(item => {
    if (! item.classList.contains('hidden')) {
      item.classList.add('hidden');
    };
  });
};

// RATING AND COMPREHENSION PICKERS

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
  const list = localStorage.getItem('history') 
    ? JSON.parse(localStorage.getItem('history'))
    : [];
  
  // Construct new entry
  const rating = document.querySelectorAll(`.rating__display--create > img[src='${hiddenStarSource}']`).length;
  const comprehension = document.querySelectorAll(`.comprehension__display-create > img[src='${hiddenRectangleSource}']`).length;
  const motto = journalForm.motto.value;
  const notes = journalForm.notes.value;

  const newEntry = { rating:rating, comprehension:comprehension, motto:motto, notes:notes };

  // Write to localStorage
  // localStorage.setItem('history', JSON.stringify([...list, newEntry]));

  //Reset Form
  journalForm.motto.value = '';
  journalForm.notes.value = '';
  ratingStars.forEach(star => star.src = hiddenOutlineStarSource);
  comprehensionImgs.forEach(rect => rect.src = hiddenOutlineRectangleSource);

});

// Get API data

const buddyPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies').then(result => result.json());
const teamPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/teams').then(result => result.json());
const journalPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/journals').then(result => result.json());

Promise.all([buddyPromise, teamPromise, journalPromise])
  .then(data => {
    renderBuddies(data[0]);
    indexBuddies(data[0]);
    renderTeams(data[1]);
    indexTeam(data[1]);
    renderJournal(data[2]);
    indexCard(data[2][0]);
  })
  .catch(error => console.error(error));


