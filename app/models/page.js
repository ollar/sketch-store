import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blocks: DS.hasMany('blocks'),
  dateCreated: DS.attr('date'),
  modified: DS.attr('date'),
});
