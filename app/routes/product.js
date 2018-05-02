import Route from '@ember/routing/route';
import { reject } from 'rsvp';

export default Route.extend({
  model(params) {
    return this.get('store').query('product', {
      orderBy: 'alias',
      equalTo: params.product_alias,
    }).then((product) => {
      if (!product.get('length')) reject();
      return product.get('firstObject');
    });
  }
});
