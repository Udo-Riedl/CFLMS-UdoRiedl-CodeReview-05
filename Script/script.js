function movieTemlate(movie) { //I think here is everything fine.info
    return `
    <div id="dvd"> 
    <img id="kino" src="${movie.image}">
    <div id="describe">
    <h2 id="movie-name">${movie.name} </h2>
    <p class="info">${movie.Genre} </p>
    <p class="info">${movie.Length} </p>
    </div>
    </div>
    `
} 


document.getElementById("film").innerHTML = `
    ${movies.map(movieTemlate).join('')}
`