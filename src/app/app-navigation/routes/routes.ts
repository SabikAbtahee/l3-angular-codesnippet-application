import { Routes } from "@angular/router";
import { RoutePath } from "@core";
import { BlankLayoutComponent } from "../../app-layout/containers/blank-layout/blank-layout.component";
import { LayoutComponent } from "../../app-layout/containers/layout/layout.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: RoutePath.SnackBar,
		pathMatch: "full"
	},
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: RoutePath.SnackBar,
				loadChildren: () =>
          import("../../snackbar/snackbar.module").then(
            (m) => m.SnackbarModule
          )
			},
		]
	},
	{
		path: RoutePath.Authentication,
		component: BlankLayoutComponent,
		loadChildren: () =>
			import("../../authentication/authentication.module").then(
				(m) => m.AuthenticationModule
			)
	},
	{
		path: "**",
		loadComponent: () =>
			import("@common").then((res) => res.PageNotFoundComponent)
	}
];
