import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from './components/card/card.component'
import { SafePipe } from './pipes/safe.pipe'

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
        CardComponent,
        SafePipe
	],
	exports: [
        CardComponent,
        SafePipe
	]
})
export class SharedModule { }
