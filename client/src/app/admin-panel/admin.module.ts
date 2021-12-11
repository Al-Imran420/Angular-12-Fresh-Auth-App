import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CurrencyPipe } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminPanelComponent } from './admin-panel.component';

import { SharedModule } from '../shared-module';

@NgModule({
  declarations: [
    AddProductComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ImageCropperModule,
    SharedModule
  ],
  providers: [CurrencyPipe],
})
export class AdminModule { }
