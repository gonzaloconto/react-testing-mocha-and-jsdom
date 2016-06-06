//import React from 'react/addons';
import Backbone from 'backbone';
import { assert, expect } from 'chai';
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

            it('Valid default params', () => {
                assert.typeOf(countriesModel.defaults.static_data, 'object');
                assert.typeOf(countriesModel.defaults.default_language, 'string');
                assert.typeOf(countriesModel.defaults.selected_indexes, 'array');
                assert.typeOf(countriesModel.defaults.countries, 'array');
                assert.typeOf(countriesModel.defaults.add_empty_element, 'boolean');
            });

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
              let emptyElementSearchResult = countriesModel.get('countries').filter(function( obj ) {
                  return obj.key == 'none';
              });
              assert(emptyElementSearchResult.length > 0);
            })

        })

    });

});
