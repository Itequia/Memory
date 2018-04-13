import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { NewGameComponent } from './new-game.component'
import { PicturesSelectorComponent } from './pictures-selector/pictures-selector.component'
import { PicturesListComponent } from './pictures-list/pictures-list.component'

const moduleRoutes: Routes = [
	{ path: '', component: NewGameComponent }
]

@NgModule({
	imports: [
		RouterModule.forChild(moduleRoutes),
		CommonModule
	],
	declarations: [
        NewGameComponent, 
        PicturesSelectorComponent, 
        PicturesListComponent
    ]
})

export class NewGameModule { }
