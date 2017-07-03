import DS from 'ember-data';
import showdown from '../utils/showdown';

export default DS.Model.extend({
  init() {
    this._super(...arguments);
    this.addObserver('content.textSource', this, 'handleTextSourceChange');
  },
  type: DS.attr('string'),
  content: DS.attr({ defaultValue: function() { return {}; } }),
  page: DS.belongsTo('page'),
  category: DS.belongsTo('category'),
  product: DS.belongsTo('product'),

  handleTextSourceChange(sender, key, value, rev) {
    if (this.get('type') !== 'text') return;
    this.set('content.text', showdown(this.get(key)));
  },
});
