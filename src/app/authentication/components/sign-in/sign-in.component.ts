import { Component, Inject } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";
import { environment } from "@environment";
import { AuthenticationService } from "../../services/authentication.service";
import { AuthService, extractFormControls } from "@core";
import { ISignInDto } from "../../interfaces/ISignIn";
import { finalize, first } from "rxjs";

@Component({
	selector: "app-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrl: "./sign-in.component.scss"
})
export class SignInComponent {
	title = environment.portalName;
	signInForm: FormGroup;
	controls: { [key: string]: FormControl };

	isLoading: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private _authenticationService: AuthenticationService,
		private _authService: AuthService
	) {}
	ngOnInit() {
		this.initSignInForm();
	}

	initSignInForm() {
		this.signInForm = this.formBuilder.nonNullable.group({
			Email: ["", [Validators.email, Validators.required]],
			Password: [""]
		});
		this.controls = extractFormControls(this.signInForm);
	}

	redirectToForgotPassword() {
		this._authenticationService.redirectToPath("forgotpassword");
	}

	redirectToSignUp() {
		this._authenticationService.redirectToPath("signup");
	}

	redirectToHome() {
		this._authenticationService.gotoHome();
	}

	signIn() {
		if (!this.signInForm.valid) return;
		this.isLoading = true;
		this._authenticationService
			.signin(this.signInForm.value as ISignInDto)
			.pipe(
				first(),
				finalize(() => {
					this.isLoading = false;
				})
			)
			.subscribe({
				next: (res) => {
					this.redirectToHome();
				}
			});
	}
}
