import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { Todo } from '../model/todo.type';
@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{
  todosService = inject(TodosService)
  todoItems = signal<Array<Todo>>([])
  ngOnInit(): void {
      console.log(this.todosService.todoItems)
      this.todoItems.set(this.todosService.todoItems)
  }
}
