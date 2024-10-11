document.getElementById('searchBtn').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieInput').value;
    const apiKey = '2e06ebca';
    const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovieInfo(data);
            } else {
                document.getElementById('movieInfo').innerHTML = '<p>Movie not found!</p>';
            }
        })
        .catch(error => console.error('Error:', error));
});

function displayMovieInfo(movie) {
    const movieInfoDiv = document.getElementById('movieInfo');
    movieInfoDiv.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <img src="${movie.Poster}" alt="Movie Poster">
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
    `;
}
