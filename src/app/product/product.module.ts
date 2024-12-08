import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductService } from "./services/product.service";
import { ProductUpsertComponent } from "./components/product-upsert/product-upsert.component";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";
import { AppCoreModule } from "../app-core/app-core.module";
import { FormValidationErrorComponent } from "../app-common/form-validation-error/form-validation-error.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ImageZoomViewerComponent } from "../app-common/image-zoom-viewer/image-zoom-viewer.component";
import { ProductContainerComponent } from "./components/product-container/product-container.component";
import { FileUploadComponent } from "@common";

@NgModule({
	declarations: [
		ProductListComponent,
		ProductUpsertComponent,
		ProductCardComponent,
		ProductContainerComponent
	],
	providers: [ProductService],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: "",
				component: ProductContainerComponent
			},
			{
				path: "detail",
				component: ProductUpsertComponent
			}
		]),
		MaterialModule,
		AppSharedModule,
		AppCoreModule,
		FormValidationErrorComponent,
		ImageZoomViewerComponent,
		FileUploadComponent
	]
})
export class ProductModule {}
