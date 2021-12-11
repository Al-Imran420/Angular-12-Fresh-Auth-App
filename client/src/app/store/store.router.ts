import { Route } from '@angular/router';
import { StoreComponent } from './store.component';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

export const StoreRoutes: Route[] = [
    {
        path: '',
        component: StoreComponent,
        // canActivate:[LoginGuard],
        children:[
            {path: '', component: HomeComponent},
            {path: 'blog', component: BlogComponent},
        ]
    }
]