import { Injectable } from '@angular/core'

const app = window['remote'].app

@Injectable()
export class PicturesService {  
    
    private _tempFileName: string = "/memory-temp.txt"
    private _allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    private _tempFilePath: string

    constructor() {
        this._tempFilePath = app.getPath('userData') + this._tempFileName
    }
    
    setPictures(folder: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            window['fs'].readdir(folder, (error, files) => {
                if (error) reject(error)

                let images = 
                    files.filter(file => this._allowedExtensions.exec(file))
                    .map(image => folder + "/" + image)
                
                window['fs'].writeFile(this._tempFilePath, images, (err) => {
                    if (err) reject(error)
                    resolve()
                }); 
            })
        })
    }

    getPictures(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            window['fs'].readFile(this._tempFilePath, "utf8", (error, data) => {
                if (error) reject(error)

                let images = data.split(',')
                resolve(images)
            })
        })
    }
}