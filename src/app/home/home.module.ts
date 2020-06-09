import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { HOME_ROUTES, HOME_COMPONENTS } from './home.route';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
       SharedModule,
        RouterModule.forChild(HOME_ROUTES),
    ],
    declarations: [
        ...HOME_COMPONENTS ,
    ],
    
})
export class HomeModule { }