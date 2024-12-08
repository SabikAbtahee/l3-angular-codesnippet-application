import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartListComponent } from "./components/shopping-cart-list/shopping-cart-list.component";
import { ShoppingCartBoxComponent } from "./components/shopping-cart-box/shopping-cart-box.component";
import { AppSharedModule } from "@shared";
import { MaterialModule } from "@material";
import { SideDrawerComponent } from "@common";

@NgModule({
	declarations: [ShoppingCartListComponent, ShoppingCartBoxComponent],
	imports: [CommonModule, AppSharedModule, MaterialModule, SideDrawerComponent],
	exports: [ShoppingCartBoxComponent]
})
export class ShoppingCartModule {}
