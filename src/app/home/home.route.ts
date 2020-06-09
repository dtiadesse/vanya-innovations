import { Routes } from '@angular/router';
import { HomeComponent } from './index';


export const HOME_COMPONENTS = [
    HomeComponent,
];

export const HOME_ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];