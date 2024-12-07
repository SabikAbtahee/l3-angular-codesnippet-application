import { Component, inject } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { NAVIGATION_LIST } from "../shared/constants/routes";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { INavigation } from "../shared/interfaces/INavigation";
import { filter, map, Observable, shareReplay, startWith } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrl: "./navigation.component.scss",
	imports: [MatListModule, RouterModule, CommonModule]
})
export class NavigationComponent {
	list = NAVIGATION_LIST;
	constructor(private router: Router) {}

	isCurrentRoute(value: INavigation): Observable<boolean> {
		return this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event: NavigationEnd) => {
				return value.path ? this.router.url.includes(value.path) : false;
			})
		);
	}
}
