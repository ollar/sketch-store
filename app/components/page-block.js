import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['block'],
  type: computed.alias('block.type'),
  classNameBindings: ['type'],
});
