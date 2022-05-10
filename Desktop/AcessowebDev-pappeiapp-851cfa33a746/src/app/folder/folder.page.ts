import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,public notification:LocalNotifications) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  notificar(){
    // Schedule multiple notifications
this.notification.schedule([{
  id: 1,
  title:'OI',
  text: 'Multi ILocalNotification 1'
  
  
 },{
  id: 2,
  title: 'Local ILocalNotification Example',
  text: 'Multi ILocalNotification 2',
  icon: 'http://example.com/icon.png'
}]);
  }

  
}
