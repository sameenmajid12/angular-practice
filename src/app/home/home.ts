import { Component, signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';

@Component({
  selector: 'app-home',
  imports: [Greeter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  greetingMessage = signal("Hello from home")
}
