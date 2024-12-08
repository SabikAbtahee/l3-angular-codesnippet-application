import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { environment } from "@environment";
import { AuthenticationService } from "../../services/authentication.service";
import { extractFormControls } from "@core";

@Component({
    selector: "app-forgot-password",
    templateUrl: "./forgot-password.component.html",
    styleUrl: "./forgot-password.component.scss",
    standalone: false
})
export class ForgotPasswordComponent {
	title = environment.portalName;
	forgotPasswordForm: FormGroup;
	controls;
	constructor(
		private formBuilder: FormBuilder,
		private _authenticationService: AuthenticationService
	) {}
	ngOnInit() {
		this.initforgotPasswordForm();
	}

	initforgotPasswordForm() {
		this.forgotPasswordForm = this.formBuilder.nonNullable.group({
			Email: ["", [Validators.email, Validators.required]]
		});
		this.controls = extractFormControls(this.forgotPasswordForm);
	}

	redirectToSignUp() {
		this._authenticationService.redirectToPath("signup");
	}
}
