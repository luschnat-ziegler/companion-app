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

const hiddenStar8 = document.querySelector("#copy8")
const hiddenStar8Source = hiddenStar8.attributes.src.nodeValue;
const hiddenRectangle3 = document.querySelector("#copy3");
const hiddenRectangle3Source = hiddenRectangle3.attributes.src.nodeValue;
const hiddenRectangle13 = document.querySelector("#copy13");
const hiddenRectangle13Source = hiddenRectangle13.attributes.src.nodeValue;


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

// API Buddies

function getBuddies() {
    fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies')
    .then(result => result.json())
    .then(data => renderBuddies(data))
    .catch(error => console.error(error));
};

getBuddies();

// API Teams

function getTeams() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
  .then(result => result.json())
  .then(data => renderTeams(data))
  .catch(error => console.error(error));
};

getTeams();

// API Journal

function getJournal() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
  .then(result => result.json())
  .then(data => renderJournal(data))
  .catch(error => console.error(error));
};

getJournal();

// Buddy rendering

const buddiesParent = document.querySelector('.main__buddy');

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

// Team rendering

const teamsParent = document.querySelector('.main__team');

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

// Journal rendering

const journalParent = document.querySelector('.journal__main');
const dummyObject = {id:"7",rating:4,comprehension:5,motto:"motto",notes:"notes"};

function renderJournal(responseArray){
  journalParent.innerHTML = '';
  responseArray.forEach((card) => addJournalCard(card));
}

function addJournalCard(inputObject) {
  
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  journalParent.appendChild(cardDiv);
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('section-title');
  cardTitle.innerText = "DUMMY DATE";
  cardDiv.appendChild(cardTitle);
  const cardLabel = document.createElement('h3');
  cardLabel.classList.add('card-label','mb-1','mt-1');
  cardLabel.innerText = "Rating:";
  cardDiv.appendChild(cardLabel);
  
  const ratingDiv = document.createElement('div');
  ratingDiv.classList.add('rating__display', 'flex-row');
  cardDiv.appendChild(ratingDiv);
  for (let index = 0; index < 5; index++) {
    const star = document.createElement('img');
    if (index <= inputObject.rating-1) {
      star.src = hiddenStarSource;
    } else {
      star.src = hiddenStar8Source;
    };
    ratingDiv.appendChild(star);
  };
  
  const cardLabel2 = document.createElement('h3');
  cardLabel2.classList.add('card-label','mb-1','mt-1');
  cardLabel2.innerText = "Comprehension:";
  cardDiv.appendChild(cardLabel2);
  
  const comprehensionDiv = document.createElement('div');
  comprehensionDiv.classList.add('comprehension__display', 'flex-row');
  cardDiv.appendChild(comprehensionDiv);
  for (let index = 0; index < 10; index++) {
    const rect = document.createElement('img');
    if(index <= inputObject.comprehension-1) {
      rect.src = hiddenRectangle3Source;
    } else {
      rect.src = hiddenRectangle13Source;
    };
    comprehensionDiv.appendChild(rect);
  };
  
  const mottoLabel = document.createElement('h3');
  mottoLabel.classList.add('card-label', 'mb-1', 'mt-1');
  mottoLabel.innerText = 'Motto:';
  cardDiv.appendChild(mottoLabel);
  
  const mottoText = document.createElement('p');
  mottoText.classList.add('motto');
  mottoText.innerText = inputObject.motto;
  cardDiv.appendChild(mottoText);
  
  const notesLabel = document.createElement('h3');
  notesLabel.classList.add('card-label', 'mb-1', 'mt-1');
  notesLabel.innerText = "Notes:";
  cardDiv.appendChild(notesLabel);
  
  const notesText = document.createElement('p');
  notesText.classList.add('card-paragraph');
  notesText.innerText = inputObject.notes;
  cardDiv.appendChild(notesText);
}



/*

!--CARD-->
        
            <!--Notes-->
            <h3 class="card-label mb-1 mt-1">Notes:</h3>
            <p class="card-paragraph">
              Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo,
              si mihi.  Et quidem se repellere, idque instituit docere sic omne
              animal, simul atque.
            </p>
          </div>


Journal Cards:
- Create card from api entry -> function which returns the corresponding DOM node
- Append all nodes in loop over array from API

section."section__journal mobile"

*/