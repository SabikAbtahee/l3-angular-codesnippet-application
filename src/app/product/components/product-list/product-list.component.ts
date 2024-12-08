import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UnsubscribeAllSubjectComponent } from "@common";
import { AuthService, RoutePath } from "@core";
import { debounceTime, takeUntil } from "rxjs";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/product.service";

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrl: "./product-list.component.scss",
    standalone: false
})
export class ProductListComponent extends UnsubscribeAllSubjectComponent {
	products: Product[];
	constructor(private _productService: ProductService) {
		super();
	}
	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this._productService
			.getProducts()
			.pipe(takeUntil(this._unsubscribleAll))
			.subscribe((res) => {
				this.products = res as Product[];
			});
	}
}
