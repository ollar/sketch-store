export default function() {
  this.transition(
    this.fromRoute('products.index'),
    this.toRoute('products.details'),
    this.use('material-page-appear')
  );
}
