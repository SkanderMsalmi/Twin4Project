import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes , RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes = [
  {
    path:'home',component: HomeComponent
  },
  {
    path:'products',component:ListProductComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'users',component:UserListComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 

}
