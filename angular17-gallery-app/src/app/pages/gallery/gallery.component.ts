import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface ImageItem {
  id: number;
  title: string;
  url: string;
  category: 'paisaje' | 'animales' | 'tecnología';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images: ImageItem[] = [
    {
      id: 1,
      title: 'Montaña',
      url: 'https://picsum.photos/id/1018/300/200',
      category: 'paisaje',
    },
    {
      id: 2,
      title: 'Perro',
      url: 'https://picsum.photos/id/1025/300/200',
      category: 'animales',
    },
    {
      id: 3,
      title: 'Laptop',
      url: 'https://picsum.photos/id/180/300/200',
      category: 'tecnología',
    },
  ];

  selectedCategory: 'all' | ImageItem['category'] = 'all';

  filterImages() {
    return this.selectedCategory === 'all'
      ? this.images
      : this.images.filter((img) => img.category === this.selectedCategory);
  }
}
