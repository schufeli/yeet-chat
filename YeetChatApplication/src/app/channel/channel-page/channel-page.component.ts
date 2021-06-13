import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from 'src/app/shared/classes/channel.class';
import { Message } from 'src/app/shared/classes/message.class';
import { ChannelService } from 'src/app/shared/service/channel.service';
import { UserService } from 'src/app/shared/service/user.service';
import { HubService } from 'src/app/shared/services/hub.service';


@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.less']
})
export class ChannelPageComponent implements OnInit {
  channel: Channel;
  loading: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private hubService: HubService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.channelService.get(params.get('channel'))
      .subscribe((channel: Channel) => {
        this.hubService.join(channel.id); // Connect to hub channel
        this.channel = channel;
        this.loading = false;
      })
    });
    this.hubService.receive()
    .subscribe((message: Message) => {
      this.channel.messages.push(message);
    })
  }

  join() {
    this.hubService.join(this.channel.id);
  }

  leave() {
    this.hubService.leave(this.channel.id);
  }

  send(content) {
    this.hubService.send(this.channel.id, this.userService.user.username, content.value);
  }
}
