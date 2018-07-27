'use strict';

module.exports = {
  name: 'ember-carousel',
  included: function(app) {
    app.import('app/styles/carousel.css');
    this._super.included.call(this, app);
  }
};
