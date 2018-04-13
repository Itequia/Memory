import { Injectable } from '@angular/core'

const app = window['remote'].app

@Injectable()
export class RecordsService {

	private _filePath: string = 'src/assets/files/records.txt'

	setRecord(newRecord: number): Promise<void> {
		const newRecordString: string = newRecord.toString() + '\r\n'
		return new Promise<void>((resolve, reject) => {
			window['fs'].appendFile(this._filePath, newRecordString,
				(error) => {
					if (error) reject(error)
					console.log('successfully appended "' + newRecord + '"')
				}
			)
		})
	}

	getRecords(): Promise<any> {
		return new Promise<void>((resolve, reject) => {
			window['fs'].readFile(this._filePath,
				(error, data) => {
					if (error) reject(error)
					console.log(this._filePath)
					const array = data.toString().split('\n')
					array.splice(-1, 1)
					resolve(array.map( a => parseInt(a, 10) ))
				}
			)
		})
	}
}
