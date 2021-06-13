import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection } from '@aspnet/signalr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../classes/message.class';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private hubConnection: HubConnection

  constructor() { }

  public connect(): void {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(environment.hub.url).build();

    this.hubConnection.start().then(data => {
      console.log('Connected');
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
    return new Observable(subscriber => {
      this.hubConnection.on("receive", (message: Message) => {
        subscriber.next(message);
      });
    })
    
  }
}
