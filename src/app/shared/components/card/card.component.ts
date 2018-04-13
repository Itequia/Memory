import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less']
})
export class CardComponent {

	@Input() image: string = '/assets/img/card_default.jpg'
	@Input() onlyShowCard: boolean = false

	flipped: boolean = false
	background: string = '/assets/img/card_background.png'

	@Output() onClick: EventEmitter<undefined> = new EventEmitter<undefined>()

	click() {
		if (!this.onlyShowCard) {
			this.flipped = !this.flipped
			this.onClick.emit()
		}
	}
}
