import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.applyHeight = this.applyHeight.bind(this);
  },

  applyHeight() {
    this.$().css({'min-height': 0});

    if (this.$().parent().height() >= this.$().height()) {
      this.$().css({'min-height': this.$().parent().height()});
    }
  },

  didInsertElement() {
    this._super(...arguments);

    this.applyHeight();
    $(window).on('resize', this.applyHeight);
  },

  willDestroyElement() {
    this._super(...arguments);

    $(window).off('resize', this.applyHeight);
  },
});
