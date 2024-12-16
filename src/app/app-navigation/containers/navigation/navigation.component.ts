import { Component, OnInit, Signal } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, ILoggedInUser } from "@core";
import { BusinessList } from "../../configs/navigation.const";
import { Feature } from "../../configs/navigation.enum";
import { NavigationDetail } from "../../configs/navigation.interface";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
    standalone: false
})
export class NavigationComponent implements OnInit {
	loggedInUser: Signal<ILoggedInUser>;
	navigations!: Array<NavigationDetail>;

	constructor(
		public router: Router,
		private _authService: AuthService
	) {}
	ngOnInit(): void {
		this.loggedInUser = this._authService.LoggedInUser;
		this.navigations = BusinessList;
	}
	changeTab(order: Feature) {
		if (!this.navigations.find((res) => res.FeatureName === order)) {
			return;
		}
		this.router.navigate([
			this.navigations.find((res) => res.FeatureName === order)?.RoutePath
		]);
	}

	isCurrentRoute(value: NavigationDetail): boolean {
		return value.RoutePath ? this.router.url.includes(value.RoutePath) : false;
	}
}
