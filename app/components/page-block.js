import Ember from 'ember';

export default Ember.Component.extend({
  type: Ember.computed.alias('block.type'),
});
