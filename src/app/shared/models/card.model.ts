export default class Card {
	constructor(
		public img: string,
		public flipped: boolean = false,
		public isCorrect: boolean = false,
		public position: number = Math.floor(Math.random() * 100)
	) { }
}
