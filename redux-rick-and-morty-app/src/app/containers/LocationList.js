import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../action-creators/actionCreators';
import LocationItem from '../components/LocationItem';
import './LocationList.css';
import Loader from '../partials/Loader';
import PropTypes from 'prop-types';

class LocationList extends Component {

    componentDidMount() {
        this.props.fetchLocations();
    }

    renderLocations(locations) {
        if (locations.length === 0) {
            return <Loader />;
        }
        return locations.map((loc) => <LocationItem key={loc.id} location={loc} />);
    }

    render() {
        const { locations, error } = this.props;
        // console.log(residents);
        return (
            <div id="wrapper">
                <p> {error} </p>
                <ul className="list-location">
                    {!locations ? <Loader /> : this.renderLocations(locations)}
                </ul>
            </div>
        );
    }
}
LocationList.propTypes = {
    // locations: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
    // residents: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetchLocations: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations,
        residents: state.residents,
        // error: state.error
    }
}

export default connect(mapStateToProps, { fetchLocations })(LocationList);