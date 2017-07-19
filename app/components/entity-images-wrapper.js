import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['entity-images-wrapper'],
  didInsertElement() {
    this._super(...arguments);

    if (window.innerWidth < 768)
      this.$().css({
        height: window.innerHeight / 3,
      });
  }
});
