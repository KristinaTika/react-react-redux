import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, FETCH_COMICS, FETCH_BOOKS, FETCH_SINGLE_BOOK, FETCH_INFO, HANDLE_ERRORS, FETCH_SINGLE_VOLUME, FETCH_SINGLE_ISSUE, FETCH_EPISODES, FETCH_SINGLE_EPISODE, FETCH_SEASONS, FETCH_SINGLE_SEASON } from '../action-creators/actions';

const initialState = {
    characters: [],
    seasons: [],
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return { ...state, books: action.books };
        case FETCH_SINGLE_BOOK:
            return { ...state, book: action.book };
        case FETCH_CHARACTERS:
            return { ...state, characters: action.characters };
        case FETCH_SINGLE_CHARACTER:
            return { ...state, character: action.character };
        case FETCH_COMICS:
            return { ...state, comics: action.comics };
        case FETCH_SINGLE_VOLUME:
            return { ...state, volume: action.volume };
        case FETCH_SINGLE_ISSUE:
            return { ...state, issue: action.issue };
        case FETCH_EPISODES:
            return { ...state, episodes: action.episodes };
        case FETCH_SINGLE_EPISODE:
            return { ...state, episode: action.episode };
        case HANDLE_ERRORS:
            return { ...state, error: action.error };
        case FETCH_INFO:
            return { ...state, info: action.info };
        case FETCH_SEASONS:
            return { ...state, seasons: action.seasons };
        case FETCH_SINGLE_SEASON:
            return { ...state, season: action.season };
        default:
            return state;
    }
}

export default RootReducer;