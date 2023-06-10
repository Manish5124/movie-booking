import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UsersDashboardComponent } from './pages/users/users-dashboard/users-dashboard.component';
import { AuthGuard } from './services/guard/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent },
  {path:'users',component:UsersDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
