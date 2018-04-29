import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').query('page', {
      orderBy: 'alias',
      equalTo: params.page_alias,
    }).then((page) => {
      if (!page.get('length')) Ember.RSVP.reject();
      return page.get('firstObject');
    });
  }
});
