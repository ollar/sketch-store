import Ember from 'ember';

export function capitalize(params/*, hash*/) {
  return params.map(Ember.String.capitalize);
}

export default Ember.Helper.helper(capitalize);
