import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], searchTerm: String): Todo[] {
    if(!searchTerm){
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((t)=>t.title.toLowerCase().includes(text))
  }
}
