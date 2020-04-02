// src/mixins.js

/**
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
var globalMixins = {
    /* noSelect is a static mixin  */
    noSelect: {
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
        'user-select': 'none'
    },
    PageTitleDefault: function (obj, value) {
        return {
            'font-size': '60px',
            'color': 'grey'
        }
    },
    ButtonDefault: function (
        obj,
        bgc = 'transparent',
        c = 'grey',
        brdr = '1px solid grey') {
        return {
            'background-color': bgc,
            'color': c,
            'border-radius': '5px',
            'border': brdr,
            'outline': 'none',
            'cursor': 'pointer',
            'font': 'inherit',
            'padding': '10px',
            'margin': '10px',
            'font-weight': 'bold',
            'transition': 'background-color 0.3s, box-shadow 0.3s'
        }
    },
    /* OpenSans is a dynamic mixin  */
    OpenSans: function (obj, value) {
          return {
            'font-family': 'Open Sans, sans-serif',
            'font-style': 'normal',
            'font-size': value,
            'font-weight': 200,
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
          }
    }
  };

  module.exports = globalMixins;