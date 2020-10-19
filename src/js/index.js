// ROOT INDEX
const rootPage = document.querySelector("#indexPage");
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

// DOM Elements
const navBar = document.querySelector("#navBar");
const journalEntryButton = document.querySelector("#journalEntryButton");
const journalSaveButton = document.querySelector('.btn-save');
const journalCancelButton = document.querySelector('.btn-cancel');

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


// const navImages = [
//   'DashboardIconlight',
//   'BuddyIconlight',
//   'TeamIconlight',
//   'EnergyIconlight',
//   'JournalIconlight',
// ];

// const navItems = document.querySelectorAll('.navbar img');

// navItems.forEach((navItem, index) => {
//   const imgName = index === 0 ? navImages[index].replace('light','') : navImages[index];
//   navItem.src = 'img/' + imgName + '.svg';
// });

// function toggleNavButtons() {
//   let allButtons = document.querySelectorAll('.navbar__icon');
//   allButtons.forEach(button => {
//     if (button.src.includes('light')) {
//       button.src = button.src.replace('light','');
//       console.log(button.src);
//     }
//   });
// };


const comprehensionImgs = document.querySelectorAll('.comprehension__display-create > img');
comprehensionImgs.forEach((img) => {
  img.addEventListener('click', (event) => {
    clearRectangle();
    let index = Number(event.target.id[event.target.id.length-1]);
    for (let i = 0; i <= index; i++) {
      comprehensionImgs[i].src = hiddenRectangleSource; 
    };
  });
});
function clearRectangle() {
  const allRectangle = document.querySelectorAll('.comprehension__display-create > img');
  allRectangle.forEach(rectangle => {
    rectangle.src = hiddenOutlineRectangleSource;
  });
};

const ratingStars = document.querySelectorAll('.rating__display--create > img');
ratingStars.forEach((img ) => {
  img.addEventListener('click',(event) => {
    clearStars();
    let index = Number(event.target.id[event.target.id.length-1]);
    for (let i = 0; i <= index; i++) {
      ratingStars[i].src=hiddenStarSource;
    };
  });
});
function clearStars() {
  const allStars = document.querySelectorAll('.rating__display--create > img');
  allStars.forEach(star => {
    star.src = hiddenOutlineStarSource;
  });
};

