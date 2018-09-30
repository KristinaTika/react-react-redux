import React, { Component } from 'react';
import { countryService } from '../../services/countryService';
import CountryItem from '../components/CountryItem';
import "./CountriesList.css";

class CountriesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: [],
            errorMessage: ""
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
                    errorMessage: error
                });
            });
    }

    showCountries(countries) {
        if (!countries) {
            return <div>Loading</div>
        }
        return countries.map(country => (<CountryItem key={country.name} country={country} />))
    }


    render() {
        const { countries } = this.state;
    
        return (
            <div>
                <ul id="all-countries-list">
                    {countries.length === 0 ? "Loading" : this.showCountries(countries)}
                </ul>
                <div>
                    {this.state.errorMessage !== "" ? "Couldn't load countries" : ""}
                </div>
            </div>
        );
    }
}

export default CountriesList;