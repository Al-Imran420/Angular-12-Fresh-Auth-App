import {Routes} from '@angular/router';
import { AdminRoutes } from './admin-panel/admin.router';
import { StoreRoutes } from './store/store.router';
import { NoPageRoutes } from './page-not-found/page-not-found.route';
import { AdminLoginRoutes } from './admin-login/admin-login.route';

export const routes: Routes = [...StoreRoutes, ...AdminRoutes, ...AdminLoginRoutes, ...NoPageRoutes]