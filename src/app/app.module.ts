import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxTextBoxModule,
  DxCheckBoxModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxValidationGroupModule,
  DxFormModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxTextBoxModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxValidationGroupModule,
    DxFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
