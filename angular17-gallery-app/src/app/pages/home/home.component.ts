import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './home.component.css',
  template: `
    <nav>
      <a routerLink="/gallery">Galería</a>
    </nav>
    <hr />
    <router-outlet />
  `,
})
export class HomeComponent {}
