export default function() {
  this.transition(
    this.fromRoute(['pages', 'categories', 'products']),
    this.toRoute(['page', 'category', 'product']),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.withinRoute(['index', 'pages', 'categories', 'products']),
    this.use('wait', 100, { then: 'fade' })
  );

  this.transition(
    this.toRoute(['category.edit', 'product.edit', 'page.edit']),
    this.use('crossFade'),
    this.reverse('crossFade')
  );

  this.transition(
    this.hasClass('liquid-cart-content-wrapper'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.childOf('.items-number'),
    this.use('fade')
  );
}
