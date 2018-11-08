import React, { Component, Fragment } from 'react';
import { tracksService } from '../../../services/tracks';
import Loader from '../../partials/Loader';
import { Link } from 'react-router-dom';

class Lyrics extends Component {

    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        tracksService.fetchLyrics(id)
            .then(res => {
                this.setState({ lyrics: res.message.body.lyrics })
                return tracksService.fetchSingleTrack(id)
                    .then(res => this.setState({ track: res.message.body.track }))
            })
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        const { track, lyrics } = this.state;
        console.log(track);
        
        let myDate = new Date(track.first_release_date);
        let date = `${myDate.getMonth() + 1}/${myDate.getDate()}/${myDate.getFullYear()}`;

        if (!track || !lyrics || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
            return <Loader />
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4"> Go Back
                </Link>
                <div className="card">
                    <h5 className="card-header">
                        {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">
                            {lyrics.lyrics_body}
                        </p>
                    </div>
                </div>

                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong> Album ID</strong>: {track.album_id}
                    </li>
                    <li className="list-group-item">
                        <strong> Song Genre</strong>: {track.primary_genres.music_genre_list.length === 0 ? 'No Genre Available' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>
                    <li className="list-group-item">
                        <strong> Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                    </li>
                    <li className="list-group-item">
                        <strong> Release Date</strong>: {date}
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default Lyrics;