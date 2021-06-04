import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/shared/classes/Channel.class';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.less']
})
export class ChannelListComponent implements OnInit {
  @Input() channels: Channel[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.channels);
  }

}
