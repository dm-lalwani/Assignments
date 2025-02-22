const API_KEY = "90bb0950";
let timeout = null;
let currentPage = 1;
let currentSearch = "";

document.getElementById("search").addEventListener("input", function () {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    currentSearch = this.value;
    currentPage = 1;
    fetchMovies(currentSearch, currentPage);
  }, 500);
});

function fetchMovies(query, page) {
  if (!query) return;
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
        setupPagination(Math.ceil(data.totalResults / 10));
      } else {
        document.getElementById("movies").innerHTML = `<p>No movies found.</p>`;
        document.getElementById("pagination").innerHTML = "";
      }
    })
    .catch((error) => console.error("Error fetching movies:", error));
}

function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = movies
    .map(
      (movie) => `
                <div class="movie">
                    <img src="${movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <button onclick="fetchMovieDetails('${movie.imdbID}')">View Details</button>
                </div>
            `
    )
    .join("");
}

function fetchMovieDetails(movieID) {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`)
    .then((response) => response.json())
    .then((movie) => {
      alert(
        `Title: ${movie.Title}\nYear: ${movie.Year}\nPlot: ${movie.Plot}\nActors: ${movie.Actors}`
      );
    })
    .catch((error) => console.error("Error fetching movie details:", error));
}

function setupPagination(totalPages) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => {
      currentPage = i;
      fetchMovies(currentSearch, currentPage);
    };
    paginationContainer.appendChild(button);
  }
}
