import { Component, Input } from "@angular/core";
import { Product } from "../../models/Product";

@Component({
	selector: "product-card",
	templateUrl: "./product-card.component.html",
	styleUrl: "./product-card.component.scss"
})
export class ProductCardComponent {
    @Input() product: Product;
    
    addToCart() {
        
    }
}
