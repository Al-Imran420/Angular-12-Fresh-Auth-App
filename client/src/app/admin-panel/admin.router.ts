import { Route } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { AdminPanelComponent } from './admin-panel.component';
import { AddProductComponent } from './add-product/add-product.component';


export const AdminRoutes: Route[] = [
    {
        path: '',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
        children:[
            {path: 'add_product', component: AddProductComponent},
            // {path: 'settings', component: SettingsComponent, children:[
            //     {path: '', component: IndexPageSettingsComponent},
            //     {path: 'homepage_settings', component: HomepageSettingsComponent},
            // ], canActivate: [AuthGuard]}
        ]
    }
]