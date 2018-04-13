import { Routes } from '@angular/router'

export const appRoutes: Routes = [
	{ path: '', 			    loadChildren: './new-game/new-game.module#NewGameModule' },
	{ path: 'game', 			loadChildren: './game/game.module#GameModule' },
	{ path: '*', 				redirectTo: 'game', 	pathMatch: 'full' }
]
