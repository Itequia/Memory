import { Component, OnInit } from '@angular/core'
import Card from '../shared/models/card.model'

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
		this.cards = [
			new Card('/assets/img/1.jpg'),
			new Card('/assets/img/2.jpg'),
			new Card('/assets/img/3.jpg'),
			new Card('/assets/img/4.gif'),
			new Card('/assets/img/5.jpg'),
			new Card('/assets/img/6.jpg'),
			new Card('/assets/img/1.jpg'),
			new Card('/assets/img/2.jpg'),
			new Card('/assets/img/3.jpg'),
			new Card('/assets/img/4.gif'),
			new Card('/assets/img/5.jpg'),
			new Card('/assets/img/6.jpg')
		]
		this.cards = this.cards.sort( (a: Card, b: Card) => a.position - b.position )
	}

	onClick(card: Card) {
		console.log(card)
	}
}
