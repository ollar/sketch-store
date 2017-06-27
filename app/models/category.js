import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  products: DS.hasMany('product', {inverse: 'category'}),
  blocks: DS.hasMany('block'),
  images: DS.hasMany('image'),
  dateCreated: DS.attr('date'),
  modified: DS.attr('date'),
});
