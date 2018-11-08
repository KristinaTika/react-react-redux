import React, { Component } from 'react';
import { tracksService } from '../services/tracks';

const MyContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            return { ...state, tracksList: action.response, heading: 'Search Results' };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        tracksList: [],
        heading: 'Top 10 Tracks',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        tracksService.fetchTracks()
            .then(res => this.setState({ tracksList: res.message.body.track_list }))
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export const Consumer = MyContext.Consumer; 