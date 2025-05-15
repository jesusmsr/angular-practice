import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todosService: TodosService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.todosService.addTodo(this.form.value.title);
      this.router.navigate(['/todos']);
    }
  }
}
