import DS from 'ember-data';
import transliterate from '../utils/transliterate';

export default DS.Model.extend({
  alias: DS.attr('string'),
  title: DS.attr('string'),
  blocks: DS.hasMany('block'),
  images: DS.hasMany('image'),
  price: DS.attr('number'),
  category: DS.belongsTo('category', { inverse: 'products' }),
  dateCreated: DS.attr('date'),
  modified: DS.attr('date'),

  init() {
    this._super(...arguments);
    this.addObserver('title', this, 'updateAlias');
  },
  updateAlias(sender, key) {
    sender.set('alias', transliterate(sender.get(key)));
  },
});
