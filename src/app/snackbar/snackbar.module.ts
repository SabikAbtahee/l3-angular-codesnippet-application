import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnackbarContainerComponent } from "./components/snackbar-container/snackbar-container.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [SnackbarContainerComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: SnackbarContainerComponent
			}
		])
	]
})
export class SnackbarModule {}
