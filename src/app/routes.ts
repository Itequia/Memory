import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const appRoutes: Routes = [
	{ path: '', 				component: HomeComponent},
	{ path: 'home',				redirectTo: ''},
	{ path: 'game', 			loadChildren: './game/game.module#GameModule' },
	{ path: 'new-game', 		loadChildren: './new-game/new-game.module#NewGameModule' },
	{ path: 'records', 			loadChildren: './records/records.module#RecordsModule' },
	{ path: '*', 				redirectTo: '', 	pathMatch: 'full' }
]
