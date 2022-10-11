import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Routes , RouterModule} from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const ROUTES: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component: HomeComponent
  },
 
  {
    path:'contact',component:ContactComponent
  },
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
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
