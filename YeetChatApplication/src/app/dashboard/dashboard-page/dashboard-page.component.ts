import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/shared/classes/channel.class';
import { ChannelService } from 'src/app/shared/service/channel.service';
import { HubService } from 'src/app/shared/services/hub.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {
  channelList: Channel[] = [];

  constructor(
    private channelService: ChannelService,
    private hubService: HubService
  ) { }

  ngOnInit(): void {
    this.channelService.getAll()
    .subscribe((channels: Channel[]) => {
      this.channelList = channels;
    });

    this.hubService.connect();
  }
}
