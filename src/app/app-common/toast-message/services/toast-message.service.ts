import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IToastMessage, ISnackbarConfig, ToastMessageComponent } from "@common";
import { Snackbar } from "../models/Snackbar.model";

@Injectable({
	providedIn: "root"
})
export class ToastMessageService implements IToastMessage {
	constructor(private _snackBar: MatSnackBar) {}

	openSnackbar(data: Partial<ISnackbarConfig>): void {
		const snackBar = new Snackbar(data);

		this._snackBar.openFromComponent(ToastMessageComponent, {
			duration: snackBar.duration,
			data: snackBar,
			horizontalPosition: "end",
			verticalPosition: "top"
		});
	}
	closeSnackbar(): void {
		this._snackBar.dismiss();
	}
}
