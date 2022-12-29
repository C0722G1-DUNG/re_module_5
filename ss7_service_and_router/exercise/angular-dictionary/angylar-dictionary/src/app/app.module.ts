import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayAgeComponentComponent } from './dictionay-age-component/dictionay-age-component.component';
import { DictionaryDetailComponentComponent } from './dictionary-detail-component/dictionary-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionayAgeComponentComponent,
    DictionaryDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
