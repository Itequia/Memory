import { Component, OnInit } from '@angular/core'
import Card from '../shared/models/card.model'
// import { remote } from 'electron'
// const { dialog } = remote

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

	cards: Card[]
	timer: number = 0

	private cardFlipped: boolean = false
	private currentCard: Card
	private _setInterval: any

	constructor() { }

	ngOnInit() {
		this.initTimer()
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

	onClick(cardClicked: Card) {
		cardClicked.flipped = !cardClicked.flipped
		setTimeout( () => this.click(cardClicked), 1000)
	}

	private click(cardClicked: Card) {
		if (this.cardFlipped) {
			if (cardClicked.img === this.currentCard.img && cardClicked !== this.currentCard) {
				this.cards.filter( c => c.img === cardClicked.img ).map( c => c.isCorrect = true )
				this.checkCorrect()
			} else {
				cardClicked.flipped = !cardClicked.flipped
				this.currentCard.flipped = !this.currentCard.flipped
			}
			this.currentCard = null
			this.cardFlipped = false

		} else {
			this.cardFlipped = true
			this.currentCard = cardClicked
		}
	}

	private initTimer() {
		this._setInterval = setInterval( () => this.timer++, 1000 )
	}

	private checkCorrect() {
		if (!this.cards.some( c => c.isCorrect === false )) this.correct()
	}

	private correct() {
		clearInterval(this._setInterval)
		// TODO: abrir un dialog
		// dialog.showOpenDialog({})
	}
}
