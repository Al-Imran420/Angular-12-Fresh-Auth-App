import {Route} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const NoPageRoutes: Route[] = [
    {
        path:'**', component:PageNotFoundComponent
    }
]