import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {WebpushService} from "./services/webpush.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'WebpushClient';

  readonly vapidPublicKey = "BDhnhtne-c-e2K9UjZ21Krv5hC4b4RlctTP0tme6lkhoOgYKKKupGkJRm_tzF8DsiuhmfsV-ZbXZeoDfzrHkZ9M";

  constructor(private swPush: SwPush,
              private webpushService: WebpushService) { }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.vapidPublicKey
    })
      .then(subscription => {
        this.webpushService.addPushSubscriber(subscription).subscribe(() => {}
        ,error => console.error("not successful", error));
      })
      .catch(error => console.error("not successful", error));
  }

  sendNotificationToUsers() {
    this.webpushService.sendPush().subscribe(() => {
      console.log();
    })
  }
}
