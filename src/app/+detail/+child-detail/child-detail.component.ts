import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildDetail` component loaded asynchronously');

const ARR = [];
for (let i = 1001; i<2001; i++) {
  ARR.push(i);
}

@Component({
  selector: 'child-detail',
  template: `
    <h1>Hello from Child Detail</h1>    
    <ul>
      <li *ngFor="let i of ARR">
        <a [routerLink]=" ['./lazy' + i] " routerLinkActive="active">
          Lazy {{i}}
        </a>
      </li>
    </ul>
  `,
})
export class ChildDetailComponent implements OnInit {
  readonly ARR = ARR;
  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}
