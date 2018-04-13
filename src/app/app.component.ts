import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent { }

var ipc = window['electron'].ipcRenderer;

ipc.on('new-game', function(sender) {
  console.log("OK");
});