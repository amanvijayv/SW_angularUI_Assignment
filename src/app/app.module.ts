import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { ProfileService } from './shared/services/profile.service';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    SignupModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
