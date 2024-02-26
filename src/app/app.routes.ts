import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
    {
        path:'auth',
        title:'authentication',
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path:'heroes',
        title:'heroes',
        loadChildren:()=>import('./heroes/heroes.module').then(m=>m.HeroesModule)
    },
    {
        path:'',
        redirectTo:'heroes',
        pathMatch:'full'
    },
    {
        path:'404',
        component:Error404PageComponent
    },
    {
        path:'**',
        redirectTo:'404'
        
    }

];
