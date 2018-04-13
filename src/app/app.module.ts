import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { PicturesService } from './shared/services/pictures.service'

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule
	],
	providers: [ PicturesService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
