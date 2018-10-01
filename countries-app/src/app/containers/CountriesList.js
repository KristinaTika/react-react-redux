import React, { Component } from 'react';
import { countryService } from '../../services/countryService';
import CountryItem from '../components/CountryItem';
import "./CountriesList.css";
import Loader from '../partials/Loader';

class CountriesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: [],
        }

        this.showCountries = this.showCountries.bind(this);
    }

    componentDidMount() {
        countryService.fetchAllCountries()
            .then(response => {
                this.setState({
                    countries: response,
                })
            })    
            .catch((error) => {
                this.setState({
                    errorMessage: error.message
                });
            });
    }

    showCountries(countries) {
        return countries.map(country => (<CountryItem key={country.name} country={country} />))
    }

    render() {
        const { countries, errorMessage } = this.state;
    
        return (
            <div>
                <ul id="all-countries-list">
                    {countries.length === 0 ? <Loader /> : this.showCountries(countries)}
                </ul>
                <div id="error">
                    {errorMessage && `OOUPS! Something went wrong! ${errorMessage}`}
                </div>
            </div>
        );
    }
}

export default CountriesList;