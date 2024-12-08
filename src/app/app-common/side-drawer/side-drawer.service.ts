import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ISideDrawer } from "./ISideDrawer";

@Injectable({
	providedIn: "root"
})
export class SideDrawerService implements ISideDrawer {
	private _isDrawerOpen: BehaviorSubject<boolean>;
	public get isDrawerOpen(): boolean {
		return this._isDrawerOpen.value;
	}
	public set isDrawerOpen(value: boolean) {
		this._isDrawerOpen.next(value);
	}

	constructor() {}
	drawerOpenCloseEvent(): BehaviorSubject<boolean> {
		return this._isDrawerOpen;
	}
	openDrawer(): void {
		this.isDrawerOpen = true;
	}
	closeDrawer() {
		this.isDrawerOpen = false;
	}
}
