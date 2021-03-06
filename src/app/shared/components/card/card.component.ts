import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.less']
})
export class CardComponent {
	@Input() image: string = '/assets/img/card_default.jpg'
	@Input() enableFlip: boolean = false
	@Input() flipped: boolean = false

	background: string = '/assets/img/card_background.png'

	@Output() onClick: EventEmitter<undefined> = new EventEmitter<undefined>()

	click() {
		if (!this.enableFlip) {
			this.onClick.emit()
		}
    }
}
