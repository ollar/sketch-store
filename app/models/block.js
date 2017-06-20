import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  content: DS.attr(),
  page: DS.belongsTo('page'),
});
