export default function() {
  this.transition(
    this.fromRoute('pages'), this.fromRoute('categories'), this.fromRoute('products'),
    // this.fromRoute('pages'),
    this.toRoute('page'), this.toRoute('category'), this.toRoute('product'),
    // this.toRoute('page'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // this.transition(
  //   this.fromRoute('categories'),
  //   this.toRoute('category'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );

  // this.transition(
  //   this.fromRoute('products'),
  //   this.toRoute('product'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );

  this.transition(
    this.fromRoute('page.index'),
    this.toRoute('page.edit'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}