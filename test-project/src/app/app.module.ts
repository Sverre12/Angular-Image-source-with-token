import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './../security/AuthInterceptor';
import { AppComponent } from './app.component';

import { SecurePipe } from './../security/SecurePipe'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { PipesModule } from './PipesModule'

@NgModule({
  declarations: [
    AppComponent,
    SecurePipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [SecurePipe]
})
export class AppModule { }
