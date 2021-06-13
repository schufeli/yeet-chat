import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/shared/classes/channel.class';
import { HubService } from 'src/app/shared/services/hub.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: Channel[];

  currentChannelId: string = '';
  constructor(
    private hubService: HubService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  leave() {
    if (this.currentChannelId.length > 0) {
      this.hubService.leave(this.currentChannelId);
      this.currentChannelId = "";
      this.router.navigate(['/dashboard']);
    }
  }

  join(channelId: string) {
    this.currentChannelId = channelId;
  }

}
