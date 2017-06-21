import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  contentType: DS.attr(),
  size: DS.attr(),
  url: DS.attr(),
});
