// DEFINE MAIN CONTAINER ELEMENT

const buddiesParent = document.querySelector('.main__buddy');

// MAIN FUNCTION FOR RENDERING ALL BUDDY PAIRS

export default function renderBuddies(responseArray) {
  buddiesParent.innerHTML = '';
  responseArray.forEach(buddyPair => addBuddies(buddyPair));
}

// FUNCTION TO RENDER ONE BUDDY PAIR

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