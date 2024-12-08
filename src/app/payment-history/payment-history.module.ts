import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaymentHistoryComponent } from "./components/payment-history/payment-history.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [PaymentHistoryComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: PaymentHistoryComponent
			}
		])
	]
})
export class PaymentHistoryModule {}
