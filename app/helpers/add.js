import Ember from 'ember';

export function add(params/*, hash*/) {
  return params.reduce((res, a) => res + a);
}

export default Ember.Helper.helper(add);
