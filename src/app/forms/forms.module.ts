import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormContainerComponent } from "./form-container/form-container.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: FormContainerComponent }];

@NgModule({
	declarations: [FormContainerComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class FormsModule {}
