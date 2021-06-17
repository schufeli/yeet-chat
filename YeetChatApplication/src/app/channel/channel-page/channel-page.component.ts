import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Channel } from 'src/app/shared/classes/channel.class';
import { Message } from 'src/app/shared/classes/message.class';
import { ChannelService } from 'src/app/shared/services/channel.service';
import { HubService } from 'src/app/shared/services/hub.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-channel-page',
  templateUrl: './channel-page.component.html',
  styleUrls: ['./channel-page.component.less']
})
export class ChannelPageComponent implements OnInit {
  channel: Channel;
  loading: boolean = true;
  form: FormGroup
  disableScrollDown = false
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelService: ChannelService,
    private hubService: HubService,
    private userService: UserService,
    private fb: FormBuilder,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
    if (!this.hubService.connected) { // When hubService is not connected go back to dashboard
      this.router.navigateByUrl('dashboard');
    } else {
      this.route.queryParamMap
      .subscribe((params) => {
        this.channelService.get(params.get('channel'))
        .subscribe((channel: Channel) => {
          this.channel = channel;
          this.hubService.join(channel.id); // Connect to hub channel
          this.loading = false;
        })
      });

      this.hubService.receive()
      .subscribe((message: Message) => {
        this.channel.messages.push(message);
      });

      this.form = this.fb.group({
        message: ['' , 
          [
            Validators.maxLength(256),
            Validators.minLength(1)
          ]
        ]
      });
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: this.end,
      });
    }
  }
  
  send() {
    var message: string = this.form.get('message').value;
    if (message.length > 0) {
      this.hubService.send(this.channel.id, this.userService.get(), this.form.get('message').value);
      this.form.get('message').patchValue('');
    }
  }
}
