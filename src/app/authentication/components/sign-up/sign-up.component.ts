import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";
import { RouteHelperService, extractFormControls } from "@core";
import { environment } from "@environment";
import { AuthenticationService } from "../../services/authentication.service";
import { ISignUpDto } from "../../interfaces/ISignupDto";
import { delay, finalize, first } from "rxjs";
import { ToastMessageService } from "@common";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrl: "./sign-up.component.scss"
})
export class SignUpComponent implements OnInit {
	title = environment.portalName;
	isLoading: boolean = false;
	signUpForm: FormGroup;
	controls: { [key: string]: FormControl };
	constructor(
		private _formBuilder: FormBuilder,
		private _authenticationService: AuthenticationService,
		private _routeHelperService: RouteHelperService,
		private _toastMessageService: ToastMessageService
	) {}
	ngOnInit() {
		this.initSignUpForm();
	}

	initSignUpForm() {
		this.signUpForm = this._formBuilder.nonNullable.group({
			Email: ["", [Validators.email, Validators.required]],
			Password: [""],
			PhoneNumber: ["", [Validators.required]],
			Address: ["", [Validators.required]],
			FullName: ["", Validators.required]
		});
		this.controls = extractFormControls(this.signUpForm);
	}

	redirectToSignIn() {
		this._routeHelperService.redirectToLogin();
	}

	signup() {
		if (!this.signUpForm.valid) return;
		this.isLoading = true;

		const signUpDto: ISignUpDto = {
			Name: this.signUpForm.value.FullName,
			Email: this.signUpForm.value.Email,
			PhoneNumber: this.signUpForm.value.PhoneNumber,
			Address: this.signUpForm.value.Address,
			Password: this.signUpForm.value.Password
		};
		this._authenticationService
			.signUp(signUpDto)
			.pipe(
				first(),
				finalize(() => {
					this.isLoading = false;
				})
			)
			.subscribe({
				next: (res) => {
					this._toastMessageService.openSnackbar({
						type: "success",
						message: "Your Account has been Created"
					});
					this.redirectToSignIn();
				}
			});
	}
}
