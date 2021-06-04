import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ChannelService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get all Channels
     * @returns Array of Channels
     */
    public getAll() {
        return this.http.get(environment.api.url + 'channel/');
    }
}