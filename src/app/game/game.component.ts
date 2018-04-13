import { Component, OnInit } from '@angular/core'
import Card from '../shared/models/card.model';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

	cards: Card[]
	timer: number = 0
	cardFlipped: boolean = false

	constructor() { }

	ngOnInit() {
		// FIXME: pillar los datos del fichero

	}

}
