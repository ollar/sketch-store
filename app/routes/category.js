import Route from '@ember/routing/route';
import { reject } from 'rsvp';

export default Route.extend({
  model(params) {
    return this.get('store').query('category', {
      orderBy: 'alias',
      equalTo: params.category_alias,
    }).then((category) => {
      if (!category.get('length')) reject();
      return category.get('firstObject');
    });
  }
});
