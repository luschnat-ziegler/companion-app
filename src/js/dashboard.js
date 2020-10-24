
import {hiddenStarSource, hiddenStar8Source, hiddenRectangle3Source, hiddenRectangle13Source} from './hiddenfiles';

const indexParent = document.querySelector('.main__index');
export const userName = "Marian";
export default function indexBuddies (inputArray) {

  const indexBuddyHeader = document.createElement('h2')
  indexBuddyHeader.classList.add('section-title', 'h2__index');
  indexBuddyHeader.innerText = "Your Code Buddy for Today:"
  indexParent.appendChild(indexBuddyHeader);

  const userBuddies = inputArray.find(buddies => buddies.includes(userName));
  
  const buddyUl = document.createElement('ul');
  buddyUl.classList.add('list__buddy');
  indexParent.appendChild(buddyUl);

  userBuddies.forEach(buddy => {
    const buddyLi = document.createElement('li');
    buddyLi.classList.add('name');
    buddyUl.appendChild(buddyLi);
    buddyLi.innerText = buddy;
  });
};

export function indexTeam (inputArray) {
  const indexTeamHeader = document.createElement('h2')
  indexTeamHeader.classList.add('section-title', 'h2__index');
  indexTeamHeader.innerText = "Your current Team:"
  indexParent.appendChild(indexTeamHeader);

  const userTeam = inputArray.find(team => team.includes(userName));
  
  const teamUl = document.createElement('ul');
  teamUl.classList.add('list__team');
  indexParent.appendChild(teamUl);
  
  userTeam.forEach(member => {
    const teamLi = document.createElement('li');
    teamLi.classList.add('name');
    teamUl.appendChild(teamLi);
    teamLi.innerText = member;
  });
};

export function indexCard (inputObject) {

  const indexJournalSection = document.createElement('section');
  indexJournalSection.classList.add('section-journal','mobile');
  indexParent.appendChild(indexJournalSection);

  const indexJournalHeading = document.createElement('h2');
  indexJournalHeading.classList.add('section-title','h2__index');
  indexJournalHeading.innerText = "Yesterday's Journal";
  indexJournalSection.appendChild(indexJournalHeading);

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  indexJournalSection.appendChild(cardDiv);

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
};