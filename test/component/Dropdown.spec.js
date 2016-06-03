//import React from 'react/addons';
import assert from 'assert';
//import Dropdown from '../../common/components/Dropdown';
import CountriesModel from '../../common/modules/CountriesModel';
//const TestUtils = React.addons.TestUtils;

describe('Countries Model default init', () => {
    let countriesModel = {};

    before('init countries model', () => {
        countriesModel = new CountriesModel();
    });

    it('countries must not be empty', () => {
        assert(Object.keys(countriesModel.get('countries')).length > 0);
    });
});


describe('Countries Model with empty country', () => {
    let countriesModel = {};

    before('init countries model', () => {
        countriesModel = new CountriesModel({add_empty_element: true});
    });

    it('countries with "empty element" must not be empty', () => {
        assert(Object.keys(countriesModel.get('countries')).length > 0);
    });

    it('empty element exists', () => {
        assert(countriesModel.get('countries').none !== undefined);
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