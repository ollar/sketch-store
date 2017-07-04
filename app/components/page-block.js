import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['block'],
  type: Ember.computed.alias('block.type'),
  classNameBindings: ['type'],
});
