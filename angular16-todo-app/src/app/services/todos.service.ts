import { Injectable, computed, effect, signal } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // Signal que mantiene la lista de tareas
  private todos = signal<Todo[]>([]);

  // Signal computado para contar tareas pendientes
  pendingCount = computed(
    () => this.todos().filter((todo) => !todo.completed).length
  );

  // efecto de depuración opcional
  constructor() {
    effect(() => {
      console.log('[Todos]', this.todos());
    });
  }

  getTodos = () => this.todos();

  addTodo(title: string) {
    const current = this.todos();
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.todos.set([...current, newTodo]);
  }

  toggleTodo(id: number) {
    this.todos.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
