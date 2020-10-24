const teamsParent = document.querySelector('.main__team');

export default function renderTeams(responseArray){
  teamsParent.innerHTML = '';
  responseArray.forEach((team,i) => addTeam(team,i));
};

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
  });
};