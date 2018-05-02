import { helper } from '@ember/component/helper';

export function slice([sentence, limit]) {
  if (!sentence) return '';

  return sentence.slice(0, limit);
}

export default helper(slice);
