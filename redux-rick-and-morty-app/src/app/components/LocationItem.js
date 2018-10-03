import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResidents } from '../action-creators/actionCreators';
import './LocationItem.css';

class LocationItem extends Component {
    constructor(props) {
        super(props);
        this.renderResidents = this.renderResidents.bind(this);
    }

    componentDidMount() {
        const { residents } = this.props.location;
        // console.log(residents);
        this.props.fetchResidents(residents);
    }

    renderResidents() {
        const { residents } = this.props;

        if(residents.length === 0) {
            return <div> loading residents </div>
        }
        return residents.map((res, i) => <li key={i}>{res}</li>);
    }

    render() {
        const { name, dimension, type } = this.props.location;
        return (
            <li className="location-item-div">
                <p>Name: {name}</p>
                <p>Dimension: {dimension}</p>
                <p>Type: {type}</p>
                <p>Residents</p>
                <ul>
                    {/* {this.renderResidents()} */}
                </ul>
            </li>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        residents: state.residents
    }
}

export default connect(mapStateToProps, { fetchResidents })(LocationItem);

// getDerivedStateFromProps