import { Injectable, Signal, signal } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AccessTokenCookieKey, RouteHelperService } from "@core";
import { CookieService } from "ngx-cookie-service";
import { IToken, IAuth, ILoggedInUser } from "./IAuth.interface";
import { Roles } from "../../enums/roles.enum";

@Injectable({
	providedIn: "root"
})
export class AuthService implements IAuth {
	constructor(
		private _cookieService: CookieService,
		private _routeHelperService: RouteHelperService
	) {}

	private _LoggedInUser = signal<ILoggedInUser>(null);
	public get LoggedInUser(): Signal<ILoggedInUser> {
		if (!this._LoggedInUser()) {
			this._setLoggedInUser();
		}
		return this._LoggedInUser;
	}
	private set LoggedInUser(value: IToken | null) {
		if (value) {
			this._LoggedInUser.set({
				Email: value.email,
				Name: value.name,
				Roles: this._getRoles()
			});
		} else {
			this._LoggedInUser.set(null);
		}
	}

	isLoggedIn(): boolean {
		const jwtService = new JwtHelperService();
		const token = this._cookieService.get(AccessTokenCookieKey);
		if (!token) return false;
		const isTokenExpired = jwtService.isTokenExpired(token);
		if (isTokenExpired) return false;
		return true;
	}

	isCustomer(): boolean {
		if (this.isLoggedIn()) return false;
		const roles = this._getRoles();
		return roles.includes(Roles.Customer);
	}

	isAdmin(): boolean {
		if (this.isLoggedIn()) return false;
		const roles = this._getRoles();
		return roles.includes(Roles.Admin);
	}

	isVendor(): boolean {
		if (this.isLoggedIn()) return false;
		const roles = this._getRoles();
		return roles.includes(Roles.Vendor);
	}

	logOut(): void {
		this.LoggedInUser = null;
		this._cookieService.delete(AccessTokenCookieKey);
		this._routeHelperService.redirectToHome();
	}

	private _getTokenValue(): IToken | null {
		const jwtService = new JwtHelperService();
		const token = this._cookieService.get(AccessTokenCookieKey);
		return jwtService.decodeToken(token);
	}

	private _getRoles(): Roles[] {
		const token = this._getTokenValue();
		if (typeof token?.roles == "string") {
			return [token.roles] as Roles[];
		}
		return token?.roles as Roles[];
	}

	private _setLoggedInUser() {
		const tokenValue = this._getTokenValue();
		if (tokenValue) this.LoggedInUser = tokenValue;
	}
}
