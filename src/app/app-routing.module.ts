import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "forms",
		loadChildren: () =>
			import("./forms/forms.module").then((m) => m.FormsModule)
	},
	{
		path: "component",
		loadChildren: () =>
			import("./components/components.module").then((m) => m.ComponentsModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
