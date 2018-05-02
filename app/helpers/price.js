import { helper } from '@ember/component/helper';

export function price(params/*, hash*/) {
  return params + ' \u20BD';
}

export default helper(price);
