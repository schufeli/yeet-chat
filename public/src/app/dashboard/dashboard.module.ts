import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChannelListComponent, 
    DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
