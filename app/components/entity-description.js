import Component from '@ember/component';
import { computed } from '@ember/object';

import stripTags from '../utils/strip-tags';

export default Component.extend({
  classNames: ['short-description'],

  title: computed(function() {
    return this.get('model.title');
  }),

  url: computed(function() {
    return this.get('model.alias');
  }),

  type: computed(function() {
    return this.get('model._internalModel.modelName');
  }),

  firstTextBlock: computed('model.blocks.@each.type', function() {
    return stripTags(this.get('model.blocks')
      .filter((block) => block.get('type') === 'text')
      .get('firstObject.content.text'));
  }),
});
