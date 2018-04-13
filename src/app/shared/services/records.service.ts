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
}
