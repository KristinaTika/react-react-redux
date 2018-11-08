import axios from 'axios';
import { tracksEndpoint, lyricsEndpoint, apiKey, singleTrackEndpoint, searchEndpoint } from '../shared/constants';

class TracksService {

    fetchTracks() {
        return axios.get(`${tracksEndpoint}${apiKey}`)
            .then(res => res.data);
    }

    fetchLyrics(id) {
        return axios.get(`${lyricsEndpoint}${id}&apikey=${apiKey}`)
            .then(res => res.data);
    }

    fetchSingleTrack(id) {
        return axios.get(`${singleTrackEndpoint}${id}&apikey=${apiKey}`)
            .then(res => res.data);
    }

    fetchSearchedTracks(input) {
        let url = `${searchEndpoint}${input}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`;
        return axios.get(url)
        .then(res => res);
    }
}

export const tracksService = new TracksService();