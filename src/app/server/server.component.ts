import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  // tslint:disable-next-line:quotemark
  serverId = 10;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getcolor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
