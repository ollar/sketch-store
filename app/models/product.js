import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blocks: DS.hasMany('block'),
  images: DS.hasMany('image'),
  price: DS.attr('number'),
  category: DS.belongsTo('category'),
  dateCreated: DS.attr('date'),
  modified: DS.attr('date'),
});
