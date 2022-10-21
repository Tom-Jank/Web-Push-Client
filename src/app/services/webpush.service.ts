import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WebpushService {

  constructor( private http: HttpClient) { }

  addPushSubscriber(sub: any) {
    return this.http.post('http://localhost:8080/api/notification/subscribe', sub);
  }

  sendPush() {
    return this.http.post('http://localhost:8080/api/notification/send', null);
  }
}
