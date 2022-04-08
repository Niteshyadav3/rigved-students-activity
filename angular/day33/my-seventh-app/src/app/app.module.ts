import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { FormsModule } from '@angular/forms';
import { TdfValidationDemoComponent } from './tdf-validation-demo/tdf-validation-demo.component';
import { TdfValidation2Component } from './tdf-validation2/tdf-validation2.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfDemoComponent,
    TdfValidationDemoComponent,
    TdfValidation2Component,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
