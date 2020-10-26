// IMPORTS

import {hiddenStarSource, hiddenStar8Source, hiddenRectangle3Source, hiddenRectangle13Source} from './hiddenfiles';
import navHandler, {clearContent} from './nav';

// DEFINE MAIN CONTAINER ELEMENT

const journalParent = document.querySelector('.cardparent');
const journalEntryButton = document.querySelector("#journalEntryButton");

// JOURNAL ENTRY BUTTON EVENT LISTENER

journalEntryButton.addEventListener("click", (event) => {
  const clickedID = event.target.attributes.id.value;
      clearContent();
      return navHandler(clickedID);
  });

// MAIN RENDER FUNCTION TO EXPORT

export default function renderJournal(responseArray){
  journalParent.innerHTML = '';
  responseArray.forEach((card) => addJournalCard(card));
}

// FUNCTION TO RENDER SINGLE JOURNAL CARD

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