import DS from 'ember-data';
import ProductModel from './product';

export default ProductModel.extend({
  qty: DS.attr('number'),
  product: DS.belongsTo('product'),
});
