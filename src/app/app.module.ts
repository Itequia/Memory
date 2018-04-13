
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { PicturesService } from './shared/services/pictures.service'
import { HomeComponent } from './home/home.component'
import { SharedModule } from './shared/shared.module'
import { RecordsService } from './shared/services/records.service'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		SharedModule
	],
	providers: [
		PicturesService,
		RecordsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
