import { Component, OnInit } from '@angular/core'
import Card from '../../shared/models/card.model'
import { PicturesService } from '../../shared/services/pictures.service'

@Component({
    selector: 'app-pictures-list',
    templateUrl: './pictures-list.component.html',
    styleUrls: ['./pictures-list.component.less']
})
export class PicturesListComponent implements OnInit {

    pictures: Card[] = []

    constructor(
        private _picturesService: PicturesService
    ) { }

    ngOnInit() {
        this._picturesService.getPictures().then(pictures => {
            pictures.forEach(item => {
              this.pictures.push(new Card(item))  
            })
        })
    }
}
