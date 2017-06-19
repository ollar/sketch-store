import Ember from 'ember';

export default Ember.Controller.extend({
  // not used now
  blocks: Ember.computed('model.blocks', function() {
    // return this.get('model.blocks').toArray().reverse();
    return this.get('model.blocks').toArray();
  }),
});
