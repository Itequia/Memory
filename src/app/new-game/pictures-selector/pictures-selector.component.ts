import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { PicturesService } from '../../shared/services/pictures.service'

@Component({
    selector: 'app-pictures-selector',
    templateUrl: './pictures-selector.component.html',
    styleUrls: ['./pictures-selector.component.less']
})
export class PicturesSelectorComponent implements OnInit {

    @Output() onPicturesSelected: EventEmitter<void> = new EventEmitter<void>()

    constructor(
        private _picturesService: PicturesService
    ) {
    }

    ngOnInit() {
    }

    onFolderSelected(event): void {
        if (!event.target.files.length) return
        let systemPath = event.target.files[0].path
        
        this._picturesService.setPictures(systemPath).then(() => {
            this.onPicturesSelected.emit()
        })
    }
}
