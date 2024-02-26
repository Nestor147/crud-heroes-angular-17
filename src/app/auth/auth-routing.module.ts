import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from '../heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from '../heroes/pages/search-page/search-page.component';
import { ListPageComponent } from '../heroes/pages/list-page/list-page.component';
import { HeroPageComponent } from '../heroes/pages/hero-page/hero-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'new-acount',component:LoginPageComponent},
      {path:'register',component:RegisterPageComponent},
      {path:'**',redirectTo:'new-acount'},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
