import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [OrderListComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: OrderListComponent
			}
		])
	]
})
export class OrderModule {}
