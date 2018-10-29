import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../../action-creators/actions';
import './Home.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);

        this.mapItems = this.mapItems.bind(this);
    }

    mapItems(items) {
        return items.map((item,i) => <li key={i}>{item}</li>);
    }

    componentDidMount() {
        this.props.fetchInfo();
    }

    render() {
        const { info } = this.props;
        let rednerInfo = <div>loading</div>;
        return (
            <div>
                {
                    info === undefined
                        ? rednerInfo
                        :
                        <div>
                            <h1> Welcome to The Walking Dead Universe. </h1>
                            <div>
                                <img src={info.photo} alt="" />
                            </div>
                            <div>
                                <span className="bold-title">Genre: </span>
                                <span>{this.mapItems(info.genre)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Based on: </span>
                                <span>{info.based_on} </span>
                            </div>
                            <div>
                                <span className="bold-title">Developed by: </span>
                                <span>{info.developed_by} </span>
                            </div>
                            <div>
                                <span className="bold-title">Starring: </span>
                                <span>{this.mapItems(info.starring)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Music by: </span>
                                <span>{info.music_by} </span>
                            </div>
                            <div>
                                <span className="bold-title">Country of origin: </span>
                                <span>{info.country_of_origin} </span>
                            </div>
                            <div>
                                <span className="bold-title">Original language: </span>
                                <span>{info.original_language} </span>
                            </div>
                            <div>
                                <span className="bold-title">Number of seasons: </span>
                                <Link to="/seasons"><span>{info.num_of_seasons} </span></Link>
                            </div>
                            <div>
                                <span className="bold-title">Number of episodes: </span>
                                <Link to="/episodes"><span>{info.num_of_episodes} </span></Link>
                            </div>
                            <div>
                                <span className="bold-title">Executive Producers: </span>
                                <span>{this.mapItems(info.executive_producers)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Producers:</span>
                                <span>{this.mapItems(info.producers)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Production Location: </span>
                                <span>{info.production_location} </span>
                            </div>
                            <div>
                                <span className="bold-title">Cinematography:</span>
                                <span>{this.mapItems(info.cinematography)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Editors:</span>
                                <span>{this.mapItems(info.editors)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Running Time: </span>
                                <span>{info.running_time} </span>
                            </div>
                            <div>
                                <span className="bold-title">Production Companies:</span>
                                <span>{this.mapItems(info.production_companies)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Distributor: </span>
                                <span>{info.distributor} </span>
                            </div>
                            <div>
                                <span className="bold-title">Original Network: </span>
                                <span>{info.original_network} </span>
                            </div>
                            <div>
                                <span className="bold-title">Picture Format: </span>
                                <span>{info.picture_format} </span>
                            </div>
                            <div>
                                <span className="bold-title">Audio Format: </span>
                                <span>{this.mapItems(info.audio_format)} </span>
                            </div>
                            <div>
                                <span className="bold-title">Original Release: </span>
                                <span>{info.original_release} </span>
                            </div>
                            <div>
                                <span className="bold-title">Related Shows: </span>
                                <span>{this.mapItems(info.related_shows)} </span>
                            </div>
                        </div>
                }
            </div>
        );
    }
}
Home.propTypes = {
    fetchInfo: PropTypes.func.isRequired,
    info: PropTypes.object
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, { fetchInfo })(Home);