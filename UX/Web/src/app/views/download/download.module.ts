import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadRoutingModule } from './download-routing.module';
import { DownloadViewComponent } from './download-view.component';

@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule
  ],
  declarations: [ DownloadViewComponent ]
})
export class DownloadModule { }
