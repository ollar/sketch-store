export default function() {
  this.transition(
    this.fromRoute(['pages', 'categories', 'products']),
    // this.toRoute(['page', 'category', 'product']),
    this.toRoute(['products.details']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
