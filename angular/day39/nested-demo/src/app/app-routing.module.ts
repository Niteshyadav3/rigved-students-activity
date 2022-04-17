import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedHistoryComponent } from './deleted-history/deleted-history.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';

const routes:Routes=[
  {path :"",component :LoginComponent},
  {path :"login",component :LoginComponent},
  {path :"register",component :RegisterComponent},
  {path :"success/:name",component :SuccessComponent,children:[
    {path:"",component:ListComponent},
    {path:"list",component:ListComponent},
    {path:"search",component :SearchComponent,children:[ 
      {path:"",component:HistoryComponent},
      {path:"history",component:HistoryComponent},
      {path:"deleted",component:HistoryComponent}
    ]}
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
