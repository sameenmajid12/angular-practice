import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('angular-practice');
}
