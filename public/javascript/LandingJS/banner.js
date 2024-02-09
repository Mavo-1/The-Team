// Array of different sports teams
const sportsTeams = ['soccer team.', 'football team.', 'baseball team.', 'lacross team.', 'softball team.', 'volleyball team.', 'basketball team.'];
let index = 0;

// Function to change the text of the span element
function changeTeamText() {
    const spanElement = document.querySelector('#team-heading span');
    index = (index + 1) % sportsTeams.length;
    spanElement.textContent = sportsTeams[index];
}

// Timer to change the text every 5 seconds
setInterval(changeTeamText, 5000);
