import { Component, ViewChild } from "@angular/core";
import { SideDrawerComponent } from "@common";

@Component({
	selector: "shopping-cart-box",
	templateUrl: "./shopping-cart-box.component.html",
	styleUrl: "./shopping-cart-box.component.scss"
})
export class ShoppingCartBoxComponent {
	@ViewChild("drawer") drawer!: SideDrawerComponent;

	toggleShoppingCartList() {
		this.drawer?.toggle();
	}
}
