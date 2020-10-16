// ROOT INDEX
const rootPage = document.querySelector("#indexPage");
const contentArea = document.querySelector("#content");
contentArea.innerHTML = rootPage.innerHTML;

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

console.log(
  "[journalEntryButton ID VALUE]",
  journalEntryButton.attributes.id.value
);

// Event listeners
navBar.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;
  console.log("clicked Link ID:", clickedID);
  return navHandler(clickedID);
});

journalEntryButton.addEventListener("click", (event) => {
  console.log("CLICKED EVENT:", event.target.attributes.id.value);
  const clickedID = event.target.attributes.id.value;
  console.log("clicked Link ID:", clickedID);
  return navHandler(clickedID);
});

// NavBar logic
function navHandler(pageName) {
  let contentArea = document.querySelector("#content");

  switch (pageName) {
    case DASHBOARD_PAGE:
      let loadIndexPage = document.querySelector("#indexPage");
      contentArea.innerHTML = loadIndexPage.innerHTML;
      break;

    case BUDDY_PAGE:
      let loadBuddyPage = document.getElementById("buddyPage");
      contentArea.innerHTML = loadBuddyPage.innerHTML;
      break;

    case TEAM_PAGE:
      let loadTeamsPage = document.querySelector("#teamsPage");
      contentArea.innerHTML = loadTeamsPage.innerHTML;
      break;

    case ENERGY_PAGE:
      let loadEnergyPage = document.querySelector("#energyPage");
      contentArea.innerHTML = loadEnergyPage.innerHTML;
      break;

    case JOURNAL_PAGE:
      let loadJournalPage = document.querySelector("#journalPage");
      contentArea.innerHTML = loadJournalPage.innerHTML;
      break;

    case JOURNAL_ENTRY_PAGE:
      let loadJournalEntryPage = document.querySelector("#journalEntryPage");
      contentArea.innerHTML = loadJournalEntryPage.innerHTML;
      break;

    default:
      contentArea.innerHTML = rootPage.innerHTML;
      break;
  }
}
