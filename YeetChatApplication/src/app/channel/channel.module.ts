import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelPageComponent } from './channel-page/channel-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChannelPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChannelPageComponent
  ]
})
export class ChannelModule { }
