
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { SharedModule } from './shared/shared.module'

>>>>>>> master

@NgModule({
	declarations: [
    AppComponent, HomeComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
