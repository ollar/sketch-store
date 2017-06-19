import Ember from 'ember';

export default Ember.Component.extend({
  isText: Ember.computed.equal('block.type', 'text'),
});
