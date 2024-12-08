import { BehaviorSubject } from "rxjs";

export interface ISideDrawer {
	openDrawer(): void;
	closeDrawer(): void;
	isDrawerOpen: boolean;
	drawerOpenCloseEvent(): BehaviorSubject<boolean>;
}
