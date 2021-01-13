// const addMovieModalBtn = document.getElementById('addMovie');
const addMovieModalBtn = document.querySelector('header button');
const ADD_MOVIE_MODAL_DIV = document.getElementById('add-modal');
const REMOVE_MOVIE_MODAL_DIV = document.getElementById('delete-modal');
const BACKDROP_ID = document.getElementById('backdrop');
const cancelMovieModalBtn = ADD_MOVIE_MODAL_DIV.querySelector('div.modal__actions button.btn--passive');
const confirmAddMovieBtn = ADD_MOVIE_MODAL_DIV.querySelector('div.modal__actions button.btn--success');
const confirmRemoveMovieBtn = REMOVE_MOVIE_MODAL_DIV.querySelector('div.modal__actions button.btn--danger');
const deleteModal = document.getElementById('delete-modal');
const ui = document.getElementById('movie-list');
const entryTextSection = document.getElementById('entry-text');

//const userInputs = ADD_MOVIE_MODAL_DIV.querySelectorAll('input');       //Non-Live Lists i.e get's a snapshot of the list so if any new elemnt is added here it won't be reflected in this list
const userInputs = ADD_MOVIE_MODAL_DIV.getElementsByTagName('input');   //Live List i.e. new elements which would be added will also reflect here

const moviesData = [];

const toggleMovieModal = () => {
    ADD_MOVIE_MODAL_DIV.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    BACKDROP_ID.classList.toggle('visible');
};

const cancelMovieModalHandler = () => {
    clearMovieModal();
    toggleMovieModal();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const clearMovieModal = () => {
    for (const userInput of userInputs) {
        userInput.value = ""
    }
};

const renderMovieData = (id, title, imageURL, rating) => {
    let li = document.createElement('li');
    let removeBtn = addMovieModalBtn.cloneNode(true);
    removeBtn.innerHTML = "REMOVE MOVIE";
    li.className = 'movie-element';
    li.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageURL}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>            
        </div>
    `;
    li.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        removeMovie(id, li);
    })
    ui.appendChild(li);
    entryTextSection.hidden = true;
};

const toggleRemoveMovie = () => {
    deleteModal.classList.toggle('visible');
};

const removeMovie = (id, li) => {
    confirmRemoveMovieBtn.addEventListener('click', () => {
        moviesData.pop(id);
        li.remove();
        toggleRemoveMovie();
    });
    toggleRemoveMovie();
};

const removeMoviePop = (id, li) => {
    moviesData.pop(id);
    li.remove();
};

const confirmAddMovieHandler = () => {
    const movieTitle = userInputs[0].value;
    const imageURL = userInputs[1].value;
    const rating = userInputs[2].value;
    let index = moviesData.length - 1;

    let test = rating.trim() === "";
    let test1 = +rating > 0;

    if (movieTitle.trim() === "" || imageURL.trim() === "" || rating.trim() === "" || +rating < 0 || +rating > 5) {
        alert('Empty Values');
    } else {
        const movie = {
            title: movieTitle,
            imageUrl: imageURL,
            rating: rating
        };
        moviesData.push(movie);
        renderMovieData(index, movieTitle, imageURL, rating);
        clearMovieModal();
        toggleMovieModal();
    }
};

addMovieModalBtn.addEventListener('click', toggleMovieModal);
BACKDROP_ID.addEventListener('click', backdropClickHandler);
cancelMovieModalBtn.addEventListener('click', cancelMovieModalHandler);
confirmAddMovieBtn.addEventListener('click', confirmAddMovieHandler);