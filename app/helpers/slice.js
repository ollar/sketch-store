import Ember from 'ember';

export function slice([sentence, limit]) {
  if (!sentence) return '';

  return sentence.slice(0, limit);
}

export default Ember.Helper.helper(slice);
