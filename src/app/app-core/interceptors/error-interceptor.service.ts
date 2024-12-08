import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ToastMessageService } from "@common";
import { IErrorResponse } from "@core";
import { Observable, catchError, finalize, throwError } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ErrorInterceptorService implements HttpInterceptor {
	constructor(private toastMessageService: ToastMessageService) {}
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				const currentError = error.error as IErrorResponse;
				this.toastMessageService.openSnackbar({
					type: "error",
					message: currentError?.title ?? "Something went Wrong"
				});
				return throwError(() => {
					return error;
				});
			}),
			finalize(() => {})
		);
	}
}
