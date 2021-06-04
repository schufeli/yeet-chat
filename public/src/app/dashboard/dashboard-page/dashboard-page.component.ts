import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/shared/services/channel.service';
import { Channel } from 'src/app/shared/classes/Channel.class';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {
  channelList: Channel[] = [];

  constructor(
    private channelService: ChannelService
  ) { }

  ngOnInit(): void {
    this.channelService.getAll()
    .subscribe((channels: Channel[]) => {
      this.channelList = channels;
    });
  }

}
