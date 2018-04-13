import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { GameComponent } from './game.component'

const moduleRoutes: Routes = [
	{ path: '', component: GameComponent }
]

@NgModule({
	imports: [
		RouterModule.forChild(moduleRoutes),
		CommonModule
	],
	declarations: [GameComponent]
})

export class GameModule { }
