import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { MaterialModule } from "@material";
import { RoutePath } from "@core";
import { RouteHelperService } from "src/app/app-core/services/route-helper/route-helper.service";

@Component({
	selector: "app-page-not-found",
	standalone: true,
	imports: [CommonModule, RouterModule, MaterialModule],
	templateUrl: "./page-not-found.component.html",
	styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent {
	/**
	 *
	 */
	constructor(private _routeHelperService: RouteHelperService) {}
	redirectToHome() {
		this._routeHelperService.redirectToProduct();
	}
}
