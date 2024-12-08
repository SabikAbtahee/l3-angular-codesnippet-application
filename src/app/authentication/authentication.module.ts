import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormValidationErrorComponent, PasswordFieldComponent } from "@common";
import { appProviders } from "@core";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";
import { AppCoreModule } from "../app-core/app-core.module";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AuthenticationService } from "./services/authentication.service";

@NgModule({
	declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent],
	imports: [
		CommonModule,
		AppSharedModule,
		AppCoreModule,
		MaterialModule,
		PasswordFieldComponent,
		FormValidationErrorComponent,
		RouterModule.forChild([
			{
				path: "",
				redirectTo: "signin",
				pathMatch: "prefix"
			},
			{
				path: "signup",
				component: SignUpComponent
			},
			{
				path: "signin",
				component: SignInComponent
			},
			{
				path: "forgotpassword",
				component: ForgotPasswordComponent
			}
		])
	],
	providers: [AuthenticationService, ...appProviders]
})
export class AuthenticationModule {}
