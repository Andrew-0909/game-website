
let gamesData = [];


// Load games data from JSON
fetch('games.json')
 .then(response => response.json())
 .then(data => {
   gamesData = data;
   displayGames(gamesData);
 });


// Display games
function displayGames(games) {
   const container = document.getElementById('gamesContainer');
   container.innerHTML = '';
    games.forEach(game => {
     const div = document.createElement('div');
     div.className = 'game';
     div.innerHTML = `
       <img src="images/${game.image}" alt="${game.title}" width="200" height="120">
       <h3 class="game-title">${game.title}</h3>
       <p><strong>Genre:</strong> ${game.genre}</p>
       <p><strong>Players:</strong> ${game.players}</p>
       <p><strong>Age:</strong> ${game.age}</p>
       <p><strong>Languages:</strong> ${game.languages.join(', ')}</p>
     `;
      div.style.cursor = "pointer";
      // Make the div clickable
     div.addEventListener('click', function() {
       // Go to the game detail page with a unique ID as query parameter
       window.location.href = `game.html?id=${game.id}`;
     });
      container.appendChild(div);
   });
 }
 // Filtering functionality
document.getElementById('filterBtn').addEventListener('click', function() {
 const titleQuery = document.getElementById('searchInput').value.toLowerCase();
 const genreQuery = document.getElementById('genreSelect').value;
 const playersQuery = document.getElementById('playersSelect').value;
 const ageQuery = document.getElementById('ageSelect').value;
 const languageQuery = document.getElementById('languageSelect').value;

 let filteredGames = gamesData.filter(game => {
   return (
     (titleQuery === '' || game.title.toLowerCase().includes(titleQuery)) &&
     (genreQuery === '' || game.genre.includes(genreQuery)) &&
     (playersQuery === '' || game.players.includes(playersQuery)) &&
     (ageQuery === '' || game.age==ageQuery) &&
     (languageQuery === '' || game.languages.includes(languageQuery))

   );
 });


 displayGames(filteredGames);
});
