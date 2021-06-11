import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelModule } from '../channel/channel.module';



@NgModule({
  declarations: [
    DashboardPageComponent,
    ChannelListComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    ChannelModule
  ],
  exports: [
    DashboardRoutingModule,
    DashboardPageComponent
  ]
})
export class DashboardModule { }
