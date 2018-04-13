export default class Card {
	constructor(
		private url: string,
		private flipped: boolean = false,
		private isCorrect: boolean = false
	) { }
}
