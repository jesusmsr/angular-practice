import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: ImageDetailComponent },
];
