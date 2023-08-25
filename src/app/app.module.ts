import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CheckmarkPipe,
  ContainsXPipe,
  DefaultToStringPipe,
  FieldRangePipe,
  SentenceCasePipe
} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    CheckmarkPipe,
    ContainsXPipe,
    DefaultToStringPipe,
    FieldRangePipe,
    SentenceCasePipe
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
