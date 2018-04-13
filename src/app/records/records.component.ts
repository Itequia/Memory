import { Component, OnInit } from '@angular/core'
import { RecordsService } from '../shared/services/records.service'

@Component({
	selector: 'app-records',
	templateUrl: './records.component.html',
	styleUrls: ['./records.component.less']
})
export class RecordsComponent implements OnInit {

	records: number[]
	constructor(private _recordsService: RecordsService) { }

	ngOnInit() {
		this._recordsService.getRecords()
		.then( res => this.records = res )
	}

}
