import { Routes } from '@angular/router'

export const appRoutes: Routes = [
	{ path: '', 			loadChildren: './game/game.module#GameModule' },
	{ path: 'game', 			loadChildren: './game/game.module#GameModule' },
	{ path: '*', 				redirectTo: 'game', 	pathMatch: 'full' }
]
