import { Injectable } from '@angular/core'

@Injectable()
export class PicturesService {    
    setPictures(folder: string): void {
        window['fs'].readdir(folder, (error, files) => {
            console.log(files)
        })
    }

    getPictures(): Promise<string[]> {
        return Promise.resolve(['','','','','','',''])
    }
}