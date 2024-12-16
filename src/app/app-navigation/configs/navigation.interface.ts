import { Feature } from "./navigation.enum";

export interface NavigationDetail {
	Title: string | null;
	Icon: string;
	// SubTitle: string | null;
	FeatureName: Feature;
	// ChildBusinesses: Array<Business> | null;
	IsHidden: boolean;
	// Order: number;
	// ShowHeader?: boolean;
	RoutePath: string | null;
	// Maybe route path,module paths etc
}
