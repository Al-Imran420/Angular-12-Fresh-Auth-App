import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module'

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class StoreModule { }
