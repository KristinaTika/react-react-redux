import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, FETCH_LOCATION, FETCH_RESIDENTS, FETCH_EPISODES, HANDLE_ERRORS } from "../action-creators/actionCreators";

const initialState = {
    characters: [],
    location: [],
    episodes: [],
    residents: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { ...state, characters: action.characters };
        case FETCH_SINGLE_CHARACTER:
            return { ...state, singleCharacter: action.singleCharacter };
        case FETCH_LOCATION:
            return { ...state, locations: action.location, };
        case FETCH_RESIDENTS:
        let locations = state.locations.map(l => l);
        // console.log(locations);
        let residents = action.residents;
        // console.log(residents);
        let myLocations = locations.map(loc => {
                let filteredResidents = residents.filter(res => loc.name === res.location.name);
                // console.log(filteredResidents);
                loc.residents = filteredResidents;
                // console.log(loc);
                // var newObj = {...loc, residents: filteredResidents};
                // console.log(newObj);
                return loc;
        });
        console.log(myLocations);
            return { ...state, residents: locations };
        case FETCH_EPISODES:
            return { ...state, episodes: action.episodes.data };
        case HANDLE_ERRORS:
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default rootReducer;