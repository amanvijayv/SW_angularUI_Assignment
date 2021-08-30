import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
//   {
//   path: "",
//   component: LayoutComponent,
//   children: [
//       { path: "", redirectTo: "home", pathMatch: "prefix" },
//       {
//           path: "home",
//           loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule),
//       }
//   ],
  
// },
{
  path: "", redirectTo: "login", pathMatch: "prefix"
},
{
  path: "login", component: LoginComponent
},
{
  path: "signup", component: SignupComponent
},
{
  path: "home", component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
