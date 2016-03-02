import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Dashboard']">Dashboard</a>
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
/*  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component:DashboardComponent,
    useAsDefault: true
  },
  {
    path:'/detial/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
  */
])
export class AppComponent {
  title = 'Angular 2 Basics';
}
