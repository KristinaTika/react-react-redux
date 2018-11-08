import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import Loader from '../../partials/Loader';
import Track from './Track';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {context => {
                    const { tracksList, heading } = context;
                    if (!tracksList || tracksList.length === 0) {
                        return <Loader />
                    }
                    return (
                        <Fragment>
                            <h3 className="text-center mb-4"> { heading}</h3>
                            <div className="row">
                                {tracksList.map(item => {
                                    return <Track key={item.track.track_id} track={item.track} />
                                })}
                            </div>
                        </Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Tracks;