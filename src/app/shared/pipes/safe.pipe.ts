import { Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
    name: 'safe'
})
export class SafePipe {

    constructor(protected _sanitizer: DomSanitizer) {
    }

    public transform(value: string) {
        return this._sanitizer.bypassSecurityTrustUrl(value)
    }

}