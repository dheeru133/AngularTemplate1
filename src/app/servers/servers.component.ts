import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was screated';
  serverName = '';
  serverCrated = false;
  servers = ['Test server1', 'Test Server2'];

  // Constructor
  constructor() {
    // alert('constructor');
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {
    // alert('ngonit');
  }

  onServerCreate() {
    this.serverCrated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created - ' + this.serverName;
  }
  onUpdateSersverName(event: any) {
    this.serverName = event.target.value;
  }
}
