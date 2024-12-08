import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { routes } from "./routes/routes";
import { AppComponent } from "./components/root-default/app.component";
import { LayoutModule } from "../layout/layout.module";
import { MaterialModule } from "@material";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		LayoutModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
