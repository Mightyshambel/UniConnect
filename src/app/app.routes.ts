import { Routes } from '@angular/router';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';

export const routes: Routes = [

    { path: '', component: HomelayoutComponent },
    { path: 'auth', component:AuthlayoutComponent},
    
];
