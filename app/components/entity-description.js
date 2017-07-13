import Ember from 'ember';
import stripTags from '../utils/strip-tags';

export default Ember.Component.extend({
  classNames: ['short-description'],

  title: Ember.computed(function() {
    return this.get('model.title');
  }),

  url: Ember.computed(function() {
    return this.get('model.alias');
  }),

  type: Ember.computed(function() {
    return this.get('model._internalModel.modelName');
  }),

  firstTextBlock: Ember.computed('model.blocks.@each.type', function() {
    return stripTags(this.get('model.blocks')
      .filter((block) => block.get('type') === 'text')
      .get('firstObject.content.text'));
  }),
});
