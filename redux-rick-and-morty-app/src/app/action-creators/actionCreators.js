import axios from 'axios';
import { characterEndpoint, locationEndpoint, episodeEndpoint } from '../../shared/constants';

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";
export const FETCH_LOCATION = "FETCH_LOCATION";
export const FETCH_RESIDENTS = "FETCH_RESIDENTS";
export const FETCH_EPISODES = "FETCH_EPISODES";
export const HANDLE_ERRORS = "HANDLE_ERRORS";

const handleErrors = (error) => {
    return {
        type: HANDLE_ERRORS,
        error: error.message
    }
}

const handleCharacters = (characters) => {
    return {
        type: FETCH_CHARACTERS,
        characters
    }
}

export const fetchCharacters = () => {
    return dispatch => {
        return axios.get(characterEndpoint)
            .then(res => dispatch(handleCharacters(res.data.results)))
            .catch(err => dispatch(handleErrors(err)));
    }
}

const handleSingleCharacter = (singleCharacter) => {
    return {
        type: FETCH_SINGLE_CHARACTER,
        singleCharacter
    }
}

export const fetchSingleCharacter = (id) => {
    return dispatch => {
        return axios.get(`${characterEndpoint}/${id}`)
            .then(res => dispatch(handleSingleCharacter(res.data)))
            .catch(err => dispatch(handleErrors(err)));
    }
}

const handleLocation = (location) => {
    return {
        type: FETCH_LOCATION,
        location
    }
}

export const fetchLocations = () => {
    return dispatch => {
        return axios.get(locationEndpoint)
            .then(res => dispatch(handleLocation(res.data.results)))
            .then(res => dispatch(fetchResidents(res.data.results.residents)))
            .catch(err => dispatch(handleErrors(err)));
    }
}

const handleResidents = (res) => {
    let myResidents = res.map(r => {
        // console.log(r.data);
       return r.data;
    }) 
    return {
        type: FETCH_RESIDENTS,
        residents: myResidents
    }
}

export const fetchResidents = (residents) => {
    return dispatch => {
        const residentsPromise = residents.map(url => axios.get(url));
        return Promise.all(residentsPromise)
            .then(res => dispatch(handleResidents(res)))
            .catch(err => dispatch(handleErrors(err)));
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
        return axios.get(episodeEndpoint)
         .then(res => dispatch(handleEpisodes(res)))
         .catch(err => dispatch(handleErrors(err)));
    }
}