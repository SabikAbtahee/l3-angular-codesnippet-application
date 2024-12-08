import { RoutePath } from "@core";
import { Feature } from "./navigation.enum";
import { NavigationDetail } from "./navigation.interface";

export const BusinessList: Array<NavigationDetail> = [
	{
		Title: "PRODUCTS",
		FeatureName: Feature.Product,
		Icon: "grocery",
		IsHidden: false,
		RoutePath: `/${RoutePath.Product}`
	},
	{
		Title: "ORDERS",
		FeatureName: Feature.Order,
		Icon: "orders",
		IsHidden: false,
		RoutePath: `/${RoutePath.Order}`
	},
	{
		Title: "PAYMENT HISTORY",
		FeatureName: Feature.Payment_History,
		Icon: "receipt_long",
		IsHidden: false,
		RoutePath: `/${RoutePath.PaymentHistory}`
	}
];
