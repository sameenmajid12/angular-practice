import { Component, signal } from '@angular/core';
import { Greeter } from '../components/greeter/greeter';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeter, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  greetingMessage = signal("Hello from home")
  userMessage = signal("Type a message")
  keyUpHandler=(event: KeyboardEvent)=>{
    this.userMessage.set((event.target as HTMLInputElement).value)
  }
}
