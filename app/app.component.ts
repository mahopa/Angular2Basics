import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { BasicComponent} from './basic/basic.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['Basic']">Basic</a>
    </nav>
    <router-outlet></router-outlet>
    <div></div>
  `,

  directives: [ROUTER_DIRECTIVES],
  providers: [
     ROUTER_PROVIDERS
  ]
})

@RouteConfig([

  {
    path:'/basic',
    name:'Basic',
    component:BasicComponent,
    useAsDefault: true
  }

])
export class AppComponent {
  title = 'Angular 2 Basics';
}
