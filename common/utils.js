/**
 * Utils Helper.
 * Depends on: underscore, moment
 */
var Utils;

import _ from 'underscore';

Utils = function () {
  var getCurrentDateFormat = function (params) {
      var
          date = params.date,
          withTime = params.time;

      return moment(date).format('L' + ((withTime) ? ' H:mm:ss' : ''));
    },
    renameKeysOnObject = function (object, oldKey, newKey) {
      Object.defineProperty(object, newKey, Object.getOwnPropertyDescriptor(object, oldKey));
      delete object[oldKey];

      return object;
    },
    /**
    * Function parse an object to array
    * @param obj {}
    * @returns auxArray []
    */
    objectToArray = function (obj) {
      var auxArray = [];

      _.each(obj, function (value, key) {
        auxArray.push({
          'key': key,
          'value': value
        });
      });

      return auxArray;
    },
    removeObjectFromArrayByKey = function (array, key) {
      return _.reject(array, function (obj) {
        return obj.key === key;
      });
    },
    /**
    * Function that orders an object by valuen and returns an array of objects
    * @param obj {}
    * @returns auxArray []
    */
    orderObjectByValue = function (obj) {
      return _.sortBy(this.objectToArray(obj), 'value');
    },
    deferredToPromise = function (deferred) {
      return new Promise(function (resolve, reject) {
        if (deferred) {
          deferred.then(function () {
            resolve.apply(this, arguments);
          }, function () {
            reject.apply(this, arguments);
          });
        } else {
          reject();
        }
      });
    },
    copyArray = function (array) {
      var copy = [];

      _.each(array, function (element) {
        copy.push(element);
      });
      return copy;
    },
    swapArrayElements = function (array, firstValue, secondValue) {
      var auxElement,
          firstValueIndex = _.indexOf(array, firstValue),
          secondValueIndex = _.indexOf(array, secondValue);

      auxElement = array[firstValueIndex];
      array[firstValueIndex] = array[secondValueIndex];
      array[secondValueIndex] = auxElement;

      return array;
    },
    allArraysAlike = function (arrays) {
      return _.all(arrays, function (array) {
        return array.length === arrays[0].length && _.difference(array, arrays[0]).length === 0;
      });
    },
    arrayMoveElementPosition = function (array, new_index, old_index, shift) { //El shift depende del sentido en el cual se mueve.
      var k,
          arrayCopy = copyArray(array);
      if (new_index >= arrayCopy.length) {
        k = new_index - arrayCopy.length;
        while ((k--) + 1) {
          arrayCopy.push(undefined);
        }
      }
      arrayCopy.splice(new_index + shift, 0, arrayCopy.splice(old_index, 1)[0]);
      return arrayCopy;
    },
    isRepeated = function (num, usados) {
      return usados.indexOf(num) !== -1;
    },
    rgb2hex = function (rgb) {
      rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    };

  return {
    orderObjectByValue: orderObjectByValue,
    objectToArray: objectToArray,
    removeObjectFromArrayByKey: removeObjectFromArrayByKey,
    getCurrentDateFormat: getCurrentDateFormat,
    deferredToPromise: deferredToPromise,
    copyArray: copyArray,
    renameKeysOnObject: renameKeysOnObject,
    swapArrayElements: swapArrayElements,
    allArraysAlike: allArraysAlike,
    arrayMoveElementPosition: arrayMoveElementPosition,
    isRepeated: isRepeated,
    rgb2hex: rgb2hex
  };
};

module.exports = new Utils();

