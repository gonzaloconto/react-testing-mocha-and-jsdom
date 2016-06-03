import React, {
    Component,
    PropTypes,
} from 'react';

import CustomOptions from './Option';

class CountriesList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {countries, onChangeHandler} = this.props;
        return (
            <div className="dropdown-list">
                {
                    this.props.countries.map(function(country) {
                        return <CustomOptions key={country.id} id={country.id} label={country.label} onChangeHandler={onChangeHandler}> </CustomOptions>
                    })
                }
            </div>
        );
    }
}

CountriesList.propTypes = {};
CountriesList.defaultProps = {};

export default CountriesList;
