import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { CookieService } from "ngx-cookie-service";
import { ErrorInterceptorService } from "../interceptors/error-interceptor.service";

export const appProviders: Provider[] = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: ErrorInterceptorService,
		multi: true
	},
	{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
	CookieService
];
