import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.css',
})
export class ImageDetailComponent {
  image: { title: string; url: string } | null = null;

  private mockImages = [
    { id: 1, title: 'Montaña', url: 'https://picsum.photos/id/1018/600/400' },
    { id: 2, title: 'Perro', url: 'https://picsum.photos/id/1025/600/400' },
    { id: 3, title: 'Laptop', url: 'https://picsum.photos/id/180/600/400' },
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.mockImages.find((img) => img.id === id);
    this.image = found ?? null;
  }
}
