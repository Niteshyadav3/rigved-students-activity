import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { DeletedComponent } from './deleted/deleted.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';
import { AuthenticGuard } from './authentic.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"success/:name/:password",component:SuccessComponent,canActivate:[AuthenticGuard],children:[
    {path:"",component:DashboardComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"list",component:ListComponent},
    {path:"search",component:SearchComponent,children:[
      {path:"",component:DeletedComponent},
      {path:"deleted",component:DeletedComponent},
      {path:"about-us",component:AboutUsComponent}

    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
