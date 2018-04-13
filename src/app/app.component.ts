import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent { }

var ipc = window['electron'].ipcRenderer;

ipc.on('new-game', function(sender) {
	var value = (location.href).split('/');
	location.href = (value[0] + '/new-game');
});