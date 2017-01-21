import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail392` component loaded asynchronously');

@Component({
  selector: 'detail392',
  template: `
    <h1>Hello from Detail392</h1>
    <router-outlet></router-outlet>
  `
})
export class DetailComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail392` component');
  }

}
