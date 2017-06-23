import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories');
  this.route('category', { path: 'category/:category_id'}, function() {
    this.route('edit');
  });
  this.route('category-create', { path: 'category/new' });

  this.route('products');
  this.route('product', { path: 'product/:product_id' }, function() {
    this.route('edit');
  });
  this.route('product-create', { path: 'product/new' });

  this.route('pages');
  this.route('page', { path: 'page/:page_id' }, function() {
    this.route('edit');
  });
  this.route('page-create', { path: 'page/new' });

  this.route('contacts');
  this.route('not-found', { path: '/*path' });
});

export default Router;
