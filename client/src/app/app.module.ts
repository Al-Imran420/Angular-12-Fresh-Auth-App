import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminModule } from './admin-panel/admin.module';
import { StoreModule } from './store/store.module';
import { AdminLoginModule } from './admin-login/admin-login.module';

import { JwtHelperService } from "@auth0/angular-jwt";
import { SharedModule } from './shared-module';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminLoginModule,
    AdminModule,
    StoreModule
  ],
  providers: [JwtHelperService, AuthGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
