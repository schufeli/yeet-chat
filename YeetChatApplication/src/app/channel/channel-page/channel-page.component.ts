import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from 'src/app/shared/classes/channel.class';
import { ChannelService } from 'src/app/shared/service/channel.service';
import { HubService } from 'src/app/shared/services/hub.service';

@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.less']
})
export class ChannelPageComponent implements OnInit {
  channel: Channel;

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private hubService: HubService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.channelService.get(params.get('channel'))
      .subscribe((channel: Channel) => {
        this.hubService.join(channel.id); // Connect to hub channel
        this.channel = channel;
      })
    });
    this.hubService.receive();
  }

  join() {
    this.hubService.join(this.channel.id);
  }

  leave() {
    this.hubService.leave(this.channel.id);
  }

  send() {
    this.hubService.send(this.channel.id, "Kempf Fritz", "Sollten Sie wissen!!! Sonst arbeitslos");
  }
}
