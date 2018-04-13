import { Injectable } from '@angular/core'

const app = window['remote'].app

@Injectable()
export class PicturesService {

	private readonly _tempFileName: string = '/memory-temp.txt'
	private readonly _allowedExtensions: RegExp = /(\.jpg|\.jpeg|\.png)$/i

	private _tempFilePath: string

	constructor() {
		this._tempFilePath = app.getPath('userData') + this._tempFileName
		console.log(this._tempFilePath)
	}

	setPictures(folder: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			window['fs'].readdir(folder, (error, files) => {
				if (error) reject(error)

				const images = files.filter(file => this._allowedExtensions.exec(file))

				window['fs'].writeFile(this._tempFilePath, images, (err) => {
					if (err) reject(error)
					resolve()
				})
			})
		})
	}

	getPictures(): Promise<string[]> {
		return Promise.resolve(['', '', '', '', '', '', ''])
	}
}
