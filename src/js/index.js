// IMPORTS

import indexBuddies, { indexCard, indexTeam } from "./dashboard";
import renderJournal from "./journal";
import renderTeams from "./teams";
import renderBuddies from "./buddies";
import "./nav";
import "./journalcreate";

// Build app from API:

const buddyPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies')
  .then(result => result.json());
const teamPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
  .then(result => result.json());
const journalPromise = fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
  .then(result => result.json());

Promise.all([buddyPromise, teamPromise, journalPromise])
  .then(data => {
    renderBuddies(data[0]);
    indexBuddies(data[0]);
    renderTeams(data[1]);
    indexTeam(data[1]);
    renderJournal(data[2]);
    indexCard(data[2][0]);
  })
  .catch(error => console.error(error));
