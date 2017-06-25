import Ember from 'ember';

export function eq(params/*, hash*/) {
  return !!params.reduce((sum, a) => (sum === a) ? a : null);
}

export default Ember.Helper.helper(eq);
