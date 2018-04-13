import { Component, OnInit } from '@angular/core'
import Card from '../shared/models/card.model'
import { RecordsService } from '../shared/services/records.service'
import { PicturesService } from '../shared/services/pictures.service'

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

	constructor(
		private _recordsService: RecordsService,
		private _picturesService: PicturesService
	) { }

	ngOnInit() {
		this.cards = []
		this.initTimer()
		this._picturesService.getPictures().then((pictures) => {
			pictures.forEach(item => {
				this.cards.push(new Card(item))
				this.cards.push(new Card(item))
			})

			this.cards = this.cards.sort((a: Card, b: Card) => a.position - b.position)
		})
	}

	onClick(cardClicked: Card) {
		cardClicked.flipped = !cardClicked.flipped
		setTimeout(() => this.click(cardClicked), 500)
	}

	private click(cardClicked: Card) {
		if (this.cardFlipped) {
			if (cardClicked.img === this.currentCard.img && cardClicked !== this.currentCard) {
				this.cards.filter(c => c.img === cardClicked.img).map(c => c.isCorrect = true)
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
		this._setInterval = setInterval(() => this.timer++, 1000)
	}

	private checkCorrect() {
		if (!this.cards.some(c => c.isCorrect === false)) this.correct()
	}

	private correct() {
		clearInterval(this._setInterval)
		alert(`Felicidades, has tardado ${this.timer} segundos. ¡Todo un record!`)
		this._recordsService.setRecord(this.timer)
	}
}
