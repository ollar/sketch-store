import Ember from 'ember';

export function price(params/*, hash*/) {
  return params + ' \u20BD';
}

export default Ember.Helper.helper(price);
