import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel/channel.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ChannelComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ChannelComponent]
})
export class ChannelModule { }
