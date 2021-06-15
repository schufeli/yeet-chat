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
  private hubConnection: HubConnection;
  public connected: boolean = false;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(environment.hub.url).build();
  }

  /**
   * Method to connect to SignalR endpoint
   */
  public connect(): void {
    this.hubConnection.start().then(data => {
      console.log('Connected')
      this.connected = true;
    }).catch(error => {
      console.log('Could not connect' + error);
      this.connected = false;
    });
  }

  /**
   * Method to join Hub Group "Channel"
   * @param channelId Channel Id
   */
  public join(channelId: string) {
    this.hubConnection.invoke("join", channelId);
  }

  /**
   * Method to leave Hub Group "Channel"
   * @param channelId Channel Id
   */
  public leave(channelId: string) {
    this.hubConnection.invoke("leave", channelId);
  }

  /**
   * Method to send message to Hub Group
   * @param channelId Channel Id
   * @param author Author
   * @param content Content
   */
  public send(channelId: string, author: string, content: string) {
    this.hubConnection.invoke("send", channelId, author, content);
  }

  /**
   * Method to initialize message receive handler
   * @returns Observable
   */
  public receive() {
    return new Observable(subscriber => {
      this.hubConnection.on("receive", (message: Message) => {
        subscriber.next(message);
      });
    })
    
  }
}
