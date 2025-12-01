import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter-pipe';
@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal("");
  ngOnInit(): void {
    this.todosService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos)=>{
        this.todoItems.set(todos);
      });
  }
  updateTodoItem = (t: Todo) =>{
    t.completed = !t.completed
  }
}
