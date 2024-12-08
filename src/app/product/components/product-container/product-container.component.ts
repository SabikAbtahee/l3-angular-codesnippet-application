import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UnsubscribeAllSubjectComponent } from "@common";
import { ProductService } from "../../services/product.service";
import { RouteHelperService } from "@core";
import { MatDialog } from "@angular/material/dialog";
import { ProductUpsertComponent } from "../product-upsert/product-upsert.component";

@Component({
    selector: "product-container",
    templateUrl: "./product-container.component.html",
    styleUrl: "./product-container.component.scss",
    standalone: false
})
export class ProductContainerComponent extends UnsubscribeAllSubjectComponent {
	searchControl = new FormControl("");

	constructor(
		private _productService: ProductService,
		private _routeHelperService: RouteHelperService,
		private _matDialog: MatDialog
	) {
		super();
	}

	openCreateProduct() {
		this._matDialog.open(ProductUpsertComponent, {
			direction: "ltr",
			disableClose: true,
			minWidth: "600px",
			restoreFocus: false,
			enterAnimationDuration: 500,
			autoFocus: false
		});
	}

	canCreateProduct(): boolean {
		return true;
	}
}
