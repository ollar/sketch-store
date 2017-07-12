import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entity-images-wrapper'],
  didInsertElement() {
    this._super(...arguments);

    this.$().css({
      height: window.innerHeight / 3,
    });
  }
});
