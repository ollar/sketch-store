import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('category', function() {
    this.route('index');
    this.route('details', { path: '/:category_id' });
    this.route('update', { path: '/update/:category_id' });
  });
  this.route('product', function() {
    this.route('index');
  });

  this.route('page', function() {
    this.route('details', { path: '/details/:page_id' });
    this.route('update', { path: '/update/:page_id'});
  });

  this.route('contacts');
  this.route('not-found', { path: '/*path' });
});

export default Router;
