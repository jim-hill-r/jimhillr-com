import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GumbyModule } from './gumby/gumby.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GumbyModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
