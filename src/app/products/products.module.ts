import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
