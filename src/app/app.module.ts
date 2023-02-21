import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './shared/material.module';
import {AuthModule} from '@auth0/auth0-angular';

import {AppRoutingModule} from './app-routing.module';
import {EmailValidatorDirective} from './shared//email-validator.directive';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: 'dev-clqpfsy6d6v8qggc.uk.auth0.com',
      clientId: '7iOePlIvkLSV1aloR4XZRFJm8zArj1ZR',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
