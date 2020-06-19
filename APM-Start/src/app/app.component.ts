import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbasr-brand'>{{pageTitle}}</a>
    <ul class='nav navbar-pills'>
      <li><a class='nav-link' [routerLink] = "['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink] = "['/products']">ProductList</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'My Product Management';
}
