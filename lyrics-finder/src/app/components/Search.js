import React, { Component } from 'react';
import { Consumer } from '../context';
import { tracksService } from '../../services/tracks';

class Search extends Component {

    state = {
        trackTitle: '',
    };

    handleChange(e) {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    handleSubmit(dispatch, e) {
        e.preventDefault();
        const { trackTitle } = this.state;
        tracksService.fetchSearchedTracks(trackTitle)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    response: res.data.message.body.track_list
                });

                this.setState({trackTitle: ''})
            })
            .catch(err => this.setState({error: err.message}))
    }

    render() {
        const { trackTitle } = this.state;
        return (
            <Consumer>
                {context => {
                    const { dispatch } = context;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i> Search For A Song
                            </h1>
                            <p className="lead text-center">Get the lyrics for any song
                            </p>
                            <form
                                onSubmit={this.handleSubmit.bind(this, dispatch)}
                            >
                                <div className="form-group">
                                    <input
                                        type="text" className="form-control form-control-lg" placeholder="Song title..."
                                        name="trackTitle"
                                        value={trackTitle}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics

                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default Search;