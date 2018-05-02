import Component from '@ember/component';
import $ from 'jquery';
import Swiper from 'npm:swiper';
import { run, schedule } from '@ember/runloop';

export default Component.extend({
  swiper: null,

  init() {
    this._super(...arguments);

    this.applyHeight = this.applyHeight.bind(this);
  },

  applyHeight() {
    this.$().css({'min-height': 0});

    if (this.$().parent().height() >= this.$().height()) {
      this.$().css({'min-height': this.$().parent().height()});
    }
  },

  didInsertElement() {
    this._super(...arguments);

    if (this.fullHeight) {
      this.applyHeight();

      $(window).on('resize', this.applyHeight);
    }

    run(() => {
      schedule('afterRender', () => {
        this.set('swiper', new Swiper(this.$('.swiper-container'), Object.assign({}, {
          effect: 'fade',
        }, this.options)));
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    const swiper = this.get('swiper');
    if (swiper) swiper.destroy();

    $(window).off('resize', this.applyHeight);
  },
});
