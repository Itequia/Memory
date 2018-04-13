import { Component, OnInit, Output } from '@angular/core'
import { PicturesService } from '../../shared/services/pictures.service'
import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-pictures-selector',
    templateUrl: './pictures-selector.component.html',
    styleUrls: ['./pictures-selector.component.less']
})
export class PicturesSelectorComponent implements OnInit {

    @Output() onPicturesSelected: EventEmitter

    constructor(
        private _picturesService: PicturesService
    ) { 
        this.onPicturesSelected = new EventEmitter()
    }

    ngOnInit() {
    }

    onFolderSelected(event): void {
        if (!event.target.files.length) return
        let systemPath = event.target.files[0].path
        
        this._picturesService.setPictures(systemPath).then(() => {
            this.onPicturesSelected.emit('')
        })
    }
}
