import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { ServicesComponent } from './modules/pages/services/services.component';
import { ContactusComponent } from './modules/pages/contactus/contactus.component';


export const routes: Routes = [

   
    { path: 'auth', component: AuthlayoutComponent },
    {
        path: '',
        component: HomelayoutComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'blog', component: AboutComponent },
          { path: 'contact', component: ContactusComponent }
        ]
      }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
