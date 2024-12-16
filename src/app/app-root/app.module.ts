import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { routes } from "../app-navigation/routes/routes";
import { AppComponent } from "./components/root-default/app.component";
import { MaterialModule } from "@material";
import { AppLayoutModule } from "../app-layout/app-layout.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		AppLayoutModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
