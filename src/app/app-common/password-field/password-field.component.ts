import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCoreModule } from "src/app/app-core/app-core.module";
import { MaterialModule } from "@material";
import {
	AbstractControl,
	Form,
	FormControl,
	FormRecord,
	Validators
} from "@angular/forms";
import { AppSharedModule } from "@shared";
import { passwordRegexPattern } from "@core";
import { FormValidationErrorComponent } from "../form-validation-error/form-validation-error.component";

@Component({
	selector: "password-field",
	standalone: true,
	imports: [
		CommonModule,
		AppCoreModule,
		MaterialModule,
		AppSharedModule,
		FormValidationErrorComponent
	],
	templateUrl: "./password-field.component.html",
	styleUrl: "./password-field.component.scss"
})
export class PasswordFieldComponent {
	_passwordControl: FormControl;
	@Input({ required: true }) set passwordControl(value: FormControl) {
		this._passwordControl = value;
		this._passwordControl.setValidators([
			Validators.required,
			Validators.pattern(passwordRegexPattern)
		]);
		this._passwordControl.touched;
	}
	@Input({ required: false }) label: string = "Password";

	passwordVisibility: boolean = false;

	togglePasswordVisibility() {
		this.passwordVisibility = !this.passwordVisibility;
	}

	ngOnInit() {}
}
