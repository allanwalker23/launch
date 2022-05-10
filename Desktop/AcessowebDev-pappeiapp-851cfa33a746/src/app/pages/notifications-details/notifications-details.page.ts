import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/domain/notifications.service';

@Component({
  selector: 'app-notifications-details',
  templateUrl: './notifications-details.page.html',
  styleUrls: ['./notifications-details.page.scss'],
})
export class NotificationsDetailsPage implements OnInit {
public notifications;
  constructor(
    public notificationService:NotificationService
  ) { }

  ngOnInit() {
    this.notificationService.findAll().
    subscribe(r=>{
      this.notifications=r;
    })
  }

}
