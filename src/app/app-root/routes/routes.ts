import { Routes } from "@angular/router";
import { LayoutComponent } from "../../layout/containers/layout/layout.component";
import { BlankLayoutComponent } from "../../layout/containers/blank-layout/blank-layout.component";
import { RoutePath } from "@core";

export const routes: Routes = [
	{
		path: "",
		redirectTo: RoutePath.Product,
		pathMatch: "full"
	},
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: RoutePath.Product,
				loadChildren: () =>
					import("../../product/product.module").then((m) => m.ProductModule)
			},
			{
				path: RoutePath.Order,
				loadChildren: () =>
					import("../../order/order.module").then((m) => m.OrderModule)
			},
			{
				path: RoutePath.PaymentHistory,
				loadChildren: () =>
					import("../../payment-history/payment-history.module").then(
						(m) => m.PaymentHistoryModule
					)
			}
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
