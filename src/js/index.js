// ROOT INDEX
const rootPage = document.querySelector("#indexPage");

// HIDDEN ELEMENTS
const hiddenStar = document.querySelector('#hidden-star');
const hiddenStarSource = hiddenStar.attributes.src.nodeValue;
const hiddenOutlineStar = document.querySelector('#hidden-outlinestar');
const hiddenOutlineStarSource = hiddenOutlineStar.attributes.src.nodeValue;
const hiddenRectangle = document.querySelector('#hidden-rectangle');
const hiddenRectangleSource = hiddenRectangle.attributes.src.nodeValue;
const hiddenOutlineRectangle = document.querySelector('#hidden-outlinerectangle');
const hiddenOutlineRectangleSource = hiddenOutlineRectangle.attributes.src.nodeValue;

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
