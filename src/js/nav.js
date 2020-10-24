// Link Config

const DASHBOARD_PAGE = "navDash";
const BUDDY_PAGE = "navBuddy";
const TEAM_PAGE = "navTeams";
const ENERGY_PAGE = "navEnergy";
const JOURNAL_PAGE = "navJournal";
const JOURNAL_ENTRY_PAGE = "journalEntryButton";

// DOM ELEMENTS

const navBar = document.querySelector("#navBar");

// EVENT LISTENERS

navBar.addEventListener("click", (event) => {
    const clickedID = event.target.attributes.id.value;
    if (clickedID !== 'navBar') {
      clearContent();
      toggleNav(event);
      return navHandler(clickedID);
    };
  });

// MAIN NAVHANDLER FUNCTION (EXPORT)

export default function navHandler(pageName) {

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

// TOGGLENAV FUNCTION FOR SWITCHING ICONS 

function toggleNav(event) {
    let allIcons = document.querySelectorAll('.navbar__icon');
    allIcons.forEach(icon => icon.classList.remove('navbar__icon--active'));
    event.target.classList.add('navbar__icon--active');
};

// FUNCTION TO RESET ALL CONTENT TO HIDDEN STATUS

export function clearContent() {
    document.querySelectorAll('.content').forEach(item => {
        if (! item.classList.contains('hidden')) {
        item.classList.add('hidden');
        };
    });
};
