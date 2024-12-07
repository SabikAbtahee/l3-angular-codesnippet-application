import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentContainerComponent } from "./component-container/component-container.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: ComponentContainerComponent }];
@NgModule({
	declarations: [ComponentContainerComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ComponentsModule {}
