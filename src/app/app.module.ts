import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import {LoginAppService} from './login-app.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule, MatInputModule,HttpClientModule
    ],
    providers: [LoginAppService, HttpClient],
    bootstrap: [AppComponent]
} )
export class AppModule { }
