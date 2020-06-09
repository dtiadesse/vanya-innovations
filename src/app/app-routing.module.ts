import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeModule} from './home/home.module';
import{SharedModule} from './shared/shared.module';


export const APP_ROUTES: Routes= [
  {path:'home',
  loadChildren:'./home/home.module#HomeModule'},
  
{path:'header',
loadChildren:'./shared/shared.module#SharedModule'},

{ path:'footer',
loadChildren:'./shared/shared.module#SharedModule' },
];

