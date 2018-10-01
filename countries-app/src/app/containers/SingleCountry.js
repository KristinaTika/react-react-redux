import React, { Component } from 'react';
import { countryService } from '../../services/countryService';
import SingleCountryItem from '../components/SingleCountryItem';
import "./SingleCountry.css";
import Loader from '../partials/Loader';

class SingleCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleCountry: [],
            errorMessage: "",
        }
        this.showCountries = this.showCountries.bind(this);
    }

    componentDidMount() {
        countryService.fetchSingleCountry(this.props.match.params.name)
            .then(response => {
                this.setState({
                    singleCountry: response
                })
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error.message
                })
            })
    }

    showCountries(countries) {
        return countries.map(country => <SingleCountryItem key={country.name} country={country} />);
    }

    render() {
        const { errorMessage, singleCountry } = this.state;
        return (
            <div>
                <ul>
                    {singleCountry.length === 0 ? <Loader /> : this.showCountries(singleCountry)}
                </ul>
                <div id="error">
                    {errorMessage && `Something went wrong! ${errorMessage}` }
                </div>
            </div>
        );
    }
}

export default SingleCountry;