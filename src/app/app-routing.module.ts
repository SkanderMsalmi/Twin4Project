import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Routes , RouterModule} from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const ROUTES: Routes = [
  {path:'',component:HomeComponent},
  {path:'index',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
 
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
