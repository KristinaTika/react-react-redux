import axios from 'axios';
import { charactersEndpoint, seasonsEndpoint, comicsEndpoint, booksEndpoint, infoEndpoint, episodesEndpoint } from '../../shared/constants';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_SINGLE_BOOK = 'FETCH_SINGLE_BOOK';
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";
export const FETCH_COMICS = "FETCH_COMICS";
export const FETCH_SINGLE_VOLUME = 'FETCH_SINGLE_VOLUME';
export const FETCH_SINGLE_ISSUE = 'FETCH_SINGLE_ISSUE';
export const FETCH_EPISODES = 'FETCH_EPISODES';
export const FETCH_SINGLE_EPISODE = 'FETCH_SINGLE_EPISODE';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const FETCH_SEASONS = 'FETCH_SEASONS';
export const FETCH_SINGLE_SEASON = 'FETCH_SINGLE_SEASON';
export const FETCH_INFO = 'FETCH_INFO';

export const handleErrors = (error) => {
    return {
        type: HANDLE_ERRORS,
        error
    }
}

const handleBooks = (books) => {
    return {
        type: FETCH_BOOKS,
        books
    }
}

export const fetchBooks = () => {
    return dispatch => {
        return axios.get(booksEndpoint)
            .then(res => dispatch(handleBooks(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSingleBook = (book) => {
    return {
        type: FETCH_SINGLE_BOOK,
        book
    }
}

export const fetchSingleBook = (id) => {
    return dispatch => {
        return axios.get(`${booksEndpoint}/${id}`)
            .then(res => dispatch(handleSingleBook(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleCharacters = (characters) => {
    const myCharacters = [];
    characters[0].main_characters.map((c) => myCharacters.push(c));
    characters[1].supporting_cast.map(c => myCharacters.push(c));
    return {
        type: FETCH_CHARACTERS,
        characters: myCharacters
    }
}

export const fetchCharacters = () => {
    return dispatch => {
        return axios.get(charactersEndpoint)
            .then(res => dispatch(handleCharacters(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSingleCharacter = (character) => {
    return {
        type: FETCH_SINGLE_CHARACTER,
        character
    }
}

export const fetchSingleCharacter = (id) => {
    return dispatch => {
        return axios.get(`${charactersEndpoint}/${id}`)
            .then(res => dispatch(handleSingleCharacter(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleComics = (comics) => {
    return {
        type: FETCH_COMICS,
        comics: comics
    }
}

export const fetchComics = () => {
    return dispatch => {
        return axios.get(comicsEndpoint)
            .then(res => dispatch(handleComics(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSingleVolume = (volume) => {
    return {
        type: FETCH_SINGLE_VOLUME,
        volume
    }
}

export const fetchSingleVolume = (title) => {
    return dispatch => {
        return axios.get(`${comicsEndpoint}/volumes/${title}`)
            .then(res => dispatch(handleSingleVolume(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleSingleIssue = (issue) => {
    return {
        type: FETCH_SINGLE_ISSUE,
        issue
    }
}

export const fetchSingleIssue = (title, id) => {
    return dispatch => {
        return axios.get(`${comicsEndpoint}/volumes/${title}/${id}`)
            .then(res => dispatch(handleSingleIssue(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleEpisodes = (episodes) => {
    return {
        type: FETCH_EPISODES,
        episodes
    }
}

export const fetchEpisodes = () => {
    return dispatch => {
        return axios.get(episodesEndpoint)
            .then( res => dispatch(handleEpisodes(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleSingleEpisode = (episode) => {
    return {
        type: FETCH_SINGLE_EPISODE,
        episode
    }
}

export const fetchSingleEpisode = (id) => {
    return dispatch => {
        return axios.get(`${episodesEndpoint}/${id}`)
            .then(res => dispatch(handleSingleEpisode(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleInfo = (info) => {
    return {
        type: FETCH_INFO,
        info
    }
}

export const fetchInfo = () => {
    return dispatch => {
        return axios.get(infoEndpoint)
            .then(res => dispatch(handleInfo(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSeasons = (seasons) => {
    return {
        type: FETCH_SEASONS,
        seasons
    }
}

export const fetchSeasons = () => {
    return dispatch => {
        return axios.get(seasonsEndpoint)
            .then(res => dispatch(handleSeasons(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSeason = (season) => {
    return {
        type: FETCH_SINGLE_SEASON,
        season
    }
}

export const fetchSingleSeason = (id) => {
    return dispatch => {
        return axios.get(`${seasonsEndpoint}/${id}`)
            .then(res => dispatch(handleSeason(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}