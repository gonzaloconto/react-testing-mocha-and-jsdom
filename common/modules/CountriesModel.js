import Backbone from 'backbone';
import countries from '../static/countries';
import _ from 'underscore';
import utils from '../utils'

/*
 * Countries Model
 * */

module.exports = Backbone.Model.extend({
    defaults: {
        static_data: countries,
        default_language: 'EN',
        selected_indexes: [],
        countries: [],
        add_empty_element: false
    },
    initialize: function () {
        if (this.get('add_empty_element')) {
            this.set('static_data', _.extend(this.get('static_data'), {
              "none": "---"
            }));
        }

        this.order();
    },
    /**
     * Gets the languages list, in the way we need
     */
    getParsedLanguages: function () {
        //TODO
        var countries = _.clone(this.get('static_data')),
            auxObj = {},
            obtainedValue = '',
            obtainedKey;

        _.each(countries, function (value, key) {
            if (_.isArray(countries)) {
                obtainedKey = value;
            } else {
                obtainedKey = key;
            }

            obtainedValue = abjson.get('country_' + obtainedKey.toLowerCase().replace(/[-]/g, "_"));
            if (!obtainedValue || obtainedValue.indexOf("NOT FOUND") > 0) {
                obtainedValue = value;
            }
            auxObj[obtainedKey] = obtainedValue;
        });

        return auxObj;
    },
    /**
     * Function that localizes the countries object and reorder it.
     */
    localize: function () {
        //TODO
        this.set('static_data', this.getParsedLanguages());
        this.order();
    },
    /**
     * Function that orders the countries object.
     */
    order: function () {
        //TODO
        var
            countries = _.clone(this.get('static_data')),
            content = utils.orderObjectByValue(countries);

        this.set('countries', content);

       /* this.setSelectedCountries();
        this.refreshSelectedOptionsIndexes();

        this.trigger('reordered');*/
    },
    setSelectedItems: function (keys) {
        //TODO
        this.set('selectedCountries', keys);

        this.refreshSelectedOptionsIndexes();
        this.trigger('countries:changed');
    },
    refreshSelectedOptionsIndexes: function () {
        //TODO
        var
            self = this,
            arrayIndex,
            countriesSelected = [];

        _.each(this.get('selectedCountries'), function (key) {
            arrayIndex = _.findIndex(self.get('content'), function (lang) {
                return lang.key === key;
            });

            if (arrayIndex >= 0) {
                countriesSelected.push(arrayIndex);
                arrayIndex = -1;
            }
        });

        this.set('selectedOptionsIndexes', countriesSelected);
    },
    setSelectedCountries: function () {
        //TODO
        var
            countrySelected = [];

        if (this.get('selectedOptionsIndexes').length === 0) {
            countrySelected = [0];
        } else {
            countrySelected = this.get('selectedOptionsIndexes');
        }

        this.set('selectedOptionsIndexes', countrySelected);
    },
    getDiff: function (ctries) {
        //TODO
        return _.difference(ctries, this.get('countriesKeys'));
    }
});
