import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  blocks: DS.hasMany('block'),
  dateCreated: DS.attr('date'),
  modified: DS.attr('date'),
});
