import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {GoogleAPIService} from './googleAPI.service';
import {AuthGuard} from './auth-guard.service';
import {LoginComponent} from './login/login.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LiveStreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login'}
      },
      {
        path: 'liveStream',
        component: LiveStreamComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
  ])
],
  providers: [GoogleAPIService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
