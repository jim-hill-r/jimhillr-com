import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './components/download.component';

@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule
  ],
  declarations: [ DownloadComponent ]
})
export class DownloadModule { }
