import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  fullPath: DS.attr('string'),
  category: DS.belongsTo('category'),
  product: DS.belongsTo('product'),
  block: DS.belongsTo('block'),
});
