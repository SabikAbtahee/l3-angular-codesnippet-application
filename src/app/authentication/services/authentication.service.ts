import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AccessTokenCookieKey, RoutePath } from "@core";
import { environment } from "@environment";
import { CookieService } from "ngx-cookie-service";
import { Observable, tap } from "rxjs";
import { ISignInDto } from "../interfaces/ISignIn";
import { ISignUpDto } from "../interfaces/ISignupDto";
import { IAuthResponse } from "../interfaces/IAuthResponse";

@Injectable()
export class AuthenticationService {
	constructor(
		private router: Router,
		private _httpClient: HttpClient,
		private _cookieService: CookieService
	) {}

	redirectToPath(path: string) {
		this.router.navigate([`/${RoutePath.Authentication}/${path}`]);
	}

	gotoHome() {
		this.router.navigate([`/${RoutePath.Product}`]);
	}
	signin(payload: ISignInDto): Observable<IAuthResponse> {
		return this._httpClient
			.post<IAuthResponse>(environment.ApiBaseUrl + "/auth/login", payload)
			.pipe(
				tap((res) => {
					this._cookieService.set(AccessTokenCookieKey, res.AccessToken);
				})
			);
	}

	signUp(payload: ISignUpDto): Observable<IAuthResponse> {
		return this._httpClient.post<IAuthResponse>(
			environment.ApiBaseUrl + "/auth/register",
			payload
		);
	}
}
