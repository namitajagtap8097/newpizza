import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ProductGetComponent } from './product/product-get/product-get.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

const routes: Routes = [
  {path:'product/create',component:ProductAddComponent},
  {path:'product/allProduct',component:ProductGetComponent},
  {path: 'product/delete/:prodId',component:ProductDeleteComponent},
  {path: 'product/update/:prodId/:price',component:ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
