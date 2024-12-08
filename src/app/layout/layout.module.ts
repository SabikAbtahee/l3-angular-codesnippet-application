import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToolbarModule } from "../toolbar/toolbar.module";
import { LayoutComponent } from "./containers/layout/layout.component";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";
import { NavigationModule } from "../navigation/navigation.module";

import { BlankLayoutComponent } from "./containers/blank-layout/blank-layout.component";
import { ShoppingCartModule } from "../shopping-cart/shopping-cart.module";

@NgModule({
	declarations: [BlankLayoutComponent, LayoutComponent],
	exports: [LayoutComponent, BlankLayoutComponent],
	imports: [
		CommonModule,
		RouterModule,
		ToolbarModule,
		MaterialModule,
		AppSharedModule,
        NavigationModule,
        ShoppingCartModule
	]
})
export class LayoutModule {}
