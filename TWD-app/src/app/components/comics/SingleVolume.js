import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleVolume, handleErrors } from '../../action-creators/actions';
import './SingleVolume.css';
import Loader from '../../partials/Loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SingleVolume extends Component {
    constructor(props) {
        super(props);

        this.mapItems = this.mapItems.bind(this);
        this.mapIssues = this.mapIssues.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        this.props.fetchSingleVolume(name);
    }

    mapItems(items) {
        return items.map((item, i) => <li key={i}>{item}</li>);
    }

    mapIssues(issues) {
        const { volume } = this.props;
        return issues.map((issue, i) => {
            let t = issue.title.split(" ");
            return <Link key={i} to={`/comics/volumes/${volume.title}/${issue.id}`}><li>Issue {`#${t[1]}`}</li></Link>
        });
    }

    render() {
        const { volume, error } = this.props;
        return (
            <div className="wrapper">
                {error ? error
                    : !volume ? <Loader />
                        : <div className="wrapper">
                            <h2>Volume {volume.volume}: {volume.title}</h2>
                            <div>
                                <img src={volume.photo} alt={volume.title} />
                            </div>
                            <div>
                                <span className="bold-title">Published:   </span>
                                <span>{volume.published}</span>
                            </div>
                            <div>
                                <span className="bold-title">Publisher:   </span>
                                <span>{volume.publisher}</span>
                            </div>
                            <div>
                                <span className="bold-title">Characters:   </span>
                                <ul>{this.mapItems(volume.characters)}</ul>
                            </div>
                            <div>
                                <span className="bold-title">Issues:   </span>
                                <ul>{this.mapIssues(volume.issues)}</ul>
                            </div>
                            <h3> Plot </h3>
                            <p> {volume.plot}</p>
                        </div>
                }
            </div>
        );
    }
}
SingleVolume.propTypes = {
    fetchSingleVolume: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    volume: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        volume: state.volume,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleVolume, handleErrors })(SingleVolume);