import { helper } from '@ember/component/helper';

export function add(params/*, hash*/) {
  return params.reduce((res, a) => res + a);
}

export default helper(add);
