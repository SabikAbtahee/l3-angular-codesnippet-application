import { CommonModule } from "@angular/common";
import { Component, Signal } from "@angular/core";
import { ToastMessageService } from "@common";
import {
	AppCoreModule,
	AuthService,
	ILoggedInUser,
	RouteHelperService
} from "@core";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";

@Component({
    selector: "profile-menu",
    imports: [CommonModule, AppSharedModule, MaterialModule, AppCoreModule],
    templateUrl: "./profile-menu.component.html",
    styleUrl: "./profile-menu.component.scss"
})
export class ProfileMenuComponent {
	loggedInUser: Signal<ILoggedInUser>;

	constructor(
		private _authService: AuthService,
		private _routerHelperService: RouteHelperService,
		private _toastMessageService: ToastMessageService
	) {}

	ngOnInit() {
		this.loggedInUser = this._authService.LoggedInUser;
	}
	isLoggedIn(): boolean {
		return this._authService.isLoggedIn();
	}

	gotoLogin() {
		this._routerHelperService.redirectToLogin();
	}

	logout() {
		this._authService.logOut();
		this._toastMessageService.openSnackbar({
			type: "success",
			message: "Logged Out Successfully"
		});
	}
}
