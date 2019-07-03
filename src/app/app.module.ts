import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PriceService } from './price.service';
import { AppComponent } from './app.component';
import {PriceComponent} from './price/price.component'

@NgModule({
  declarations: [
    AppComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
