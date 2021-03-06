import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  phone: DS.attr('string'),
  products: DS.attr({ defaultValue: function() {return [];}}),
});
