import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  connected: boolean = false;

  constructor(
    private channelService: ChannelService,
    private hubService: HubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.channelService.getAll()
    .subscribe((channels: Channel[]) => {
      this.channelList = channels;
    });
    this.hubService.connect();
  }
}
