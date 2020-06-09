import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    HeaderComponent,FooterComponent
} from './index';

export const SHARED_COMPONENTS = [
    FooterComponent,
    HeaderComponent
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    
        ReactiveFormsModule,
      
    ],
    declarations: [
        ...SHARED_COMPONENTS,
    ],
    exports: [
        ...SHARED_COMPONENTS
    ],

})
export class SharedModule { }