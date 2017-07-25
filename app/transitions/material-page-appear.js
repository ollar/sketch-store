import { animate, stop } from 'liquid-fire';

// arguments are passed directly from use statements in transition rules, e.g.
// this.use('myTransition', arg1, arg2)

export default function (opts = {}) {
  // Stop any currently running animation on oldElement
  stop(this.oldElement);

  console.log('ahahah')

  // return animate(this.oldElement, {
  //     opacity: 0,
  //   }).then(() => {
  //     return animate(this.newElement, {
  //         opacity: [1, 0],
  //       }, {});
  //   });

  return new Promise((resolve) => {
    this.oldElement.addClass('leaving');
    this.newElement.addClass('entring');

    return true;
  });
}
