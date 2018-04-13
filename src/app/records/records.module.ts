import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecordsComponent } from './records.component'
import { Routes, RouterModule } from '@angular/router'

const moduleRoutes: Routes = [
	{ path: '', component: RecordsComponent }
]

@NgModule({
	imports: [
		RouterModule.forChild(moduleRoutes),
		CommonModule
	],
	declarations: [RecordsComponent]
})
export class RecordsModule { }
