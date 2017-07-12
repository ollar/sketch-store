import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['index-categories-wrapper'],

  didInsertElement() {
    this._super(...arguments);
    this.$().css({
      height: this.$().parent().height(),
    });
  }
});
