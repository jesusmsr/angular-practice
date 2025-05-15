import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  constructor(private todosService: TodosService) {}

  todos = this.todosService.getTodos;

  toggle(todo: Todo) {
    this.todosService.toggleTodo(todo.id);
  }

  delete(todo: Todo) {
    this.todosService.deleteTodo(todo.id);
  }
}
