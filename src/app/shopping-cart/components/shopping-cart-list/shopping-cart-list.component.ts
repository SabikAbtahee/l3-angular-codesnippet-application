import { Component } from "@angular/core";

@Component({
    selector: "shopping-cart-list",
    templateUrl: "./shopping-cart-list.component.html",
    styleUrl: "./shopping-cart-list.component.scss",
    standalone: false
})
export class ShoppingCartListComponent {
	// constructor(private _sideDrawerService: SideDrawerService) {}

	closeDrawer() {
		// this._sideDrawerService.closeDrawer();
	}
}
