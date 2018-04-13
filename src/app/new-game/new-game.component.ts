import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.less']
})
export class NewGameComponent implements OnInit {

    arePicturesLoaded: boolean

    constructor() { }

    ngOnInit() {
    }

    onPicturesSelected(event): void {
        this.arePicturesLoaded = true
    }
}
