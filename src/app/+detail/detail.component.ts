import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

const ARR = [];
for (let i = 1; i<1001; i++) {
  ARR.push(i);
}

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <ul>
      <li>
        <a [routerLink]=" ['./child-detail'] ">
          Child Detail
        </a>
      </li>      
      <li *ngFor="let i of ARR">
        <a [routerLink]=" ['./lazy' + i] " routerLinkActive="active">
          Lazy {{i}}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit {
  readonly ARR = ARR;

  public ngOnInit() {
    console.log('hello `Detail` component');
  }

}
