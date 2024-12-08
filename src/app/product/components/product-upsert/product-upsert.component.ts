import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UnsubscribeAllSubjectComponent } from "@common";
import {
	RoutePath,
	UnitTypes,
	extractFormControls,
	getEnumEntries
} from "@core";

@Component({
	selector: "product-upsert",
	templateUrl: "./product-upsert.component.html",
	styleUrl: "./product-upsert.component.scss"
})
export class ProductUpsertComponent extends UnsubscribeAllSubjectComponent {
	productUpsertForm: FormGroup;
	controls;
	unitTypes = getEnumEntries(UnitTypes);
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private _matDialogRef: MatDialogRef<ProductUpsertComponent>
	) {
		super();
	}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.productUpsertForm = this.fb.group({
			Name: ["", [Validators.required]],
			PurchaseUnitQuantity: [0, [Validators.required]],
			PurchaseUnitValue: ["", [Validators.required]],
			OrderCompletionLimit: [0, [Validators.required]],
			Description: ["", [Validators.required]],
			Images: [[]],
			UnitCost: [0, [Validators.required]]
		});
		this.controls = extractFormControls(this.productUpsertForm);

		this.productUpsertForm.valueChanges.subscribe((res) => {
			console.log(res);
		});
	}

	upsertProduct() {
		console.log("CLicked");
	}

	gotoList() {
		this.router.navigate([`/${RoutePath.Product}`]);
	}

	closeDialog() {
		this._matDialogRef.close();
	}
}
