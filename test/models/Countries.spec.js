//import React from 'react/addons';
import Backbone from 'backbone';
import assert from 'assert';
//import Dropdown from '../../common/components/Dropdown';
import CountriesModel from '../../common/modules/CountriesModel';
//const TestUtils = React.addons.TestUtils;

describe('Countries Model', () => {
    describe("Type Of Model?", () => {
        let countriesModel = {};
        beforeEach( () => {
          countriesModel = new CountriesModel();
        })

        it('Backbone Model', () => {
          assert(countriesModel instanceof Backbone.Model);
        })
    })

    describe("Initialization", () => {

        describe("Default", () => {
            let countriesModel = {};
            beforeEach( () => {
                countriesModel = new CountriesModel();
            })

            it('countries must not be empty', () => {
                assert(Object.keys(countriesModel.get('countries')).length > 0);
            })

        })

        describe('With Empty Country Parametter', () => {
            let countriesModel = {};

            beforeEach( () => {
              countriesModel = new CountriesModel({add_empty_element: true});
            })

            it('countries must not be empty', () => {
              assert(Object.keys(countriesModel.get('countries')).length > 0);
            })

            it('empty element exists', () => {
              assert(countriesModel.get('countries').none !== undefined);
            })

        })

    });

});
