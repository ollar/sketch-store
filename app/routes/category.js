import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').query('category', {
      orderBy: 'alias',
      equalTo: params.category_alias,
    }).then((category) => {
      if (!category.get('length')) Ember.RSVP.reject();
      return category.get('firstObject');
    });
  }
});
