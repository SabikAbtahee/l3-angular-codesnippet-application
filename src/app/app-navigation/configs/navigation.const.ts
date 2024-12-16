import { RoutePath } from "@core";
import { Feature } from "./navigation.enum";
import { NavigationDetail } from "./navigation.interface";

export const BusinessList: Array<NavigationDetail> = [
	{
		Title: "SNACKBAR",
		FeatureName: Feature.SnackBar,
		Icon: "stack",
		IsHidden: false,
		RoutePath: `/${RoutePath.SnackBar}`
	},

];
