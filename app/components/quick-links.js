import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['quick-links'],

  actions: {
    remove() {
      this.get('remove')();
    }
  }
});
