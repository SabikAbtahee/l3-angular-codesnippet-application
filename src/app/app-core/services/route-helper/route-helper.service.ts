import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RoutePath } from "@core";

@Injectable({
	providedIn: "root"
})
export class RouteHelperService {
	constructor(private router: Router) {}

	redirectToLogin() {
		this.router.navigate([`/${RoutePath.Authentication}`]);
	}

	redirectToHome() {
		this.router.navigate([`/${RoutePath.Home}`]);
	}
}
