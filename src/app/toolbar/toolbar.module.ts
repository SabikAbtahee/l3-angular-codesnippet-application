import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./container/toolbar/toolbar.component";
import {
	FullScreenComponent,
	LanguagePickerComponent,
	ProfileMenuComponent
} from "@common";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";

@NgModule({
	declarations: [ToolbarComponent],
	exports: [ToolbarComponent],
	imports: [
		CommonModule,
		MaterialModule,
		AppSharedModule,
		LanguagePickerComponent,
		FullScreenComponent,
		ProfileMenuComponent
	]
})
export class ToolbarModule {}
