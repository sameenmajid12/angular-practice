import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.css',
})
export class Greeter {
  greetingMessage = input('Default greeting message')
}
