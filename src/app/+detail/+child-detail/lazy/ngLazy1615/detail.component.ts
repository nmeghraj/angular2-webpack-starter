import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail1615` component loaded asynchronously');

@Component({
  selector: 'detail1615',
  template: `
    <h1>Hello from Detail1615</h1>
    <router-outlet></router-outlet>
  `
})
export class DetailComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail1615` component');
  }

}
