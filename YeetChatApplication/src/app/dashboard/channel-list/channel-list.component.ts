import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/shared/classes/channel.class';
import { HubService } from 'src/app/shared/services/hub.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: Channel[];

  currentChannelId: string = '';
  constructor(
    private hubService: HubService
  ) { }

  ngOnInit(): void { }

  leave() {
    if (this.currentChannelId.length > 0) {
      this.hubService.leave(this.currentChannelId);
    }
  }

  join(channelId: string) {
    this.currentChannelId = channelId;
  }

}
