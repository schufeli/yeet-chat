import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private hubConnection: HubConnection

  constructor() { }

  public connect(): void {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(environment.hub.url).build();

    this.hubConnection.start().then(data => {
      console.log('Connected'); // TODO: remove after development
    }).catch(error => {
      console.log('Could not connect' + error);
    });
  }

  public join(channelId: string) {
    this.hubConnection.invoke("join", channelId);
  }

  public leave(channelId: string) {
    this.hubConnection.invoke("leave", channelId);
  }

  public send(channelId: string, author: string, content: string) {
    this.hubConnection.invoke("send", channelId, author, content);
  }

  public receive() {
    this.hubConnection.on("receive", (data: any) => {
      console.log(data);
    })
  }
}
