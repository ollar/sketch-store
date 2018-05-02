import { helper } from '@ember/component/helper';
import { capitalize as _capitalize } from '@ember/string';

export function capitalize(params/*, hash*/) {
  return params.map(_capitalize);
}

export default helper(capitalize);
