import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GumbyRoutingModule } from './gumby-routing.module';
import { GumbyComponent} from './gumby.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    GumbyRoutingModule
  ],
  declarations: [ GumbyComponent ],
  bootstrap: [ GumbyComponent ]
})
export class GumbyModule { }
