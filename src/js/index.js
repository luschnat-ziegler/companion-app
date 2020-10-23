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
  localStorage.setItem('history', JSON.stringify([...list, newEntry]));

  //Reset Form
  journalForm.motto.value = '';
  journalForm.notes.value = '';
  ratingStars.forEach(star => star.src = hiddenOutlineStarSource);
  comprehensionImgs.forEach(rect => rect.src = hiddenOutlineRectangleSource);

});

const dummyResponse = [["Marian", "Tobi"],["Philipp", "Marcel"],["Henna", "Fabian"]];
const buddiesParent = document.querySelector('.main__buddy');

renderBuddies(dummyResponse);

function renderBuddies(responseArray) {
  buddiesParent.innerHTML = '';
  responseArray.forEach(buddyPair => addBuddies(buddyPair));
}

function addBuddies(inputArray) {
  const buddyUl = document.createElement('ul');
  buddyUl.classList.add('list__buddy');
  buddiesParent.appendChild(buddyUl);

  inputArray.forEach(buddy => {
    const buddyLi = document.createElement('li');
    buddyLi.classList.add('name');
    buddyUl.appendChild(buddyLi);
    buddyLi.innerText = buddy;
  });
};

const dummyTeams = [["Marian", "Tobi", "Arthur"],["Philipp", "Marcel", "Gadget"],["Henna", "Fabian", "Domi"]];
const teamsParent = document.querySelector('.main__team');

renderTeams(dummyTeams);

function renderTeams(responseArray){
  teamsParent.innerHTML = '';
  responseArray.forEach((team,i) => addTeam(team,i));
}

function addTeam(inputArray,index) {
  const teamsHeader = document.createElement('h2');
  teamsHeader.classList.add('section-title');
  teamsParent.appendChild(teamsHeader);
  teamsHeader.innerText = "Team " + (index+1);
  
  const teamUl = document.createElement('ul');
  teamUl.classList.add('list__team');
  teamsParent.appendChild(teamUl);
  
  inputArray.forEach(member => {
    const teamLi = document.createElement('li');
    teamLi.classList.add('name');
    teamUl.appendChild(teamLi);
    teamLi.innerText = member;
  })
}





/*


Teams:
<h2 class="section-title">Team 1</h2>
          <ul class="list__team">
            <li class="name">Sudanka Bakalowits</li>
            <li class="name">Yasaman Foroutan</li>
            <li class="name">Chioke Okonkwo</li>
            <li class="name">Maria José Botín</li>
            <li class="name">Tikhon Yaroslavsky</li>
          </ul>

          main.main__team
- 

Journal Cards:
- Create card from api entry -> function which returns the corresponding DOM node
- Append all nodes in loop over array from API


*/