import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('category', function() {
    this.route('index');
  });
  this.route('product', function() {
    this.route('index');
  });
  this.route('contacts');
});

export default Router;
