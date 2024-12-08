import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product } from "../models/Product";
import { AuthService } from "@core";

@Injectable()
export class ProductService {
	constructor(
		private _httpClient: HttpClient,
		private _authService: AuthService
	) {}

	getProducts(): Observable<Array<Product>> {
		return this._httpClient.get<any>("assets/products.json").pipe(
			map((res) => {
				return res as Array<Product>;
			})
		);
	}

	canCreateProduct(): boolean {
		return (
			this._authService.isLoggedIn() &&
			(this._authService.isVendor() || this._authService.isAdmin())
		);
	}
}
