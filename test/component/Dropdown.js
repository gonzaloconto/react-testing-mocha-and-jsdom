import React from 'react/addons';
import assert from 'assert';
import Dropdown from '../../common/components/Dropdown';
import CountriesModel from '../../common/modules/CountriesModel';
const TestUtils = React.addons.TestUtils;

describe('Countries Model initiated', () => {
    console.log("LLEGOOOOOOOOOOOOOOOOOOOOOO!");
    before('init countries model', () => {
        this.countriesModel = new CountriesModel();
    });

    it('countries must not be empty', () => {
        assert(this.countriesModel.get('countries').length > 0);
    });
});
/*
describe('Dropdown component', function(){
    before('render and locate element', function() {
        let renderedComponent = TestUtils.renderIntoDocument(
            <Dropdown model={countriesModel} localization_prefix={'country_'} multiselect={true}/>
        );

        // Searching for <input> tag within rendered React component
        // Throws an exception if not found
        var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
            renderedComponent,
            'input'
        );

        this.inputElement = inputComponent.getDOMNode();
    });

    it('<input> should be of type "checkbox"', function() {
        assert(this.inputElement.getAttribute('type') === 'checkbox');
    });

    it('<input> should not be checked', function() {
        assert(this.inputElement.checked === false);
    });
});
*/