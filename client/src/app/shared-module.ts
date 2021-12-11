import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImageCropperModule } from 'ngx-image-cropper';

import { RouterModule } from '@angular/router';
import { routes } from './app.router'

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        ImageCropperModule,
        HttpClientModule
    ],
    exports:[ 
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
    ]
})
export class SharedModule{}