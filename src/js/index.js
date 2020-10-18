// ROOT INDEX
const rootPage = document.querySelector("#indexPage");

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

// Event listeners
navBar.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;

  if (clickedID !== 'navBar') {
    document.querySelectorAll('.content').forEach(item => {
      if (! item.classList.contains('hidden')) {
        item.classList.add('hidden');
      };
    });

    toggleNav(event);
    return navHandler(clickedID);
  };
});

journalEntryButton.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;
  document.querySelectorAll('.content').forEach(item => {
    if (! item.classList.contains('hidden')) {
      item.classList.add('hidden');
    };
  });
  return navHandler(clickedID);
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


