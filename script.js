
let gamesData = [];
let selectedGenre = '';


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
       <p><strong>Price:</strong> ${game.price}</p>
       <p><strong>Release Date:</strong> ${game.release}</p>
       <p><strong>Developer:</strong> ${game.developer}</p>
       <p><strong>Players:</strong> ${game.players}</p>
       <p><strong>Age:</strong> ${game.age}</p>
       
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

 document.getElementById('genreToggle').addEventListener('click', ()=>{
  document.getElementById('genreBox').classList.toggle('hidden');
 })
 document.querySelectorAll('.genre-option').forEach(button=>{
  button.addEventListener('click',()=>{
    // deselcting the previously chosen genre
    document.querySelectorAll('.genre-option').forEach(b=>b.classList.remove('selected'));
    //select the current option
    button.classList.add('selected');
    selectedGenre = button.dataset.genre;
    //changing the text of the genre box 
    const label = selectedGenre === ''?'All Genre':`${button.textContent}`;
    document.getElementById('genreToggle').textContent = label;
    //disappearing the previous genre box. 
    document.getElementById('genreBox').classList.add('hidden'); 
  })
 })
 // Filtering functionality
document.getElementById('filterBtn').addEventListener('click', function() {
 const titleQuery = document.getElementById('searchInput').value.toLowerCase();
 const genreQuery = selectedGenre;
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
