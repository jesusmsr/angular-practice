import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
    <nav>
      <a routerLink="/todos">Ver tareas</a> |
      <a routerLink="/add">Agregar tarea</a>
    </nav>
    <hr />
    <router-outlet />
  `,
})
export class HomeComponent {}
