import { CommonModule } from "@angular/common";
import {
	Component,
	Inject,
	OnInit,
	TemplateRef,
	ViewChild
} from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBar } from "@angular/material/snack-bar";
import { ISnackbarConfig, ToastMessageService } from "@common";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";

@Component({
    selector: "toast-message",
    imports: [CommonModule, MaterialModule, AppSharedModule],
    templateUrl: "./toast-message.component.html",
    styleUrl: "./toast-message.component.scss"
})
export class ToastMessageComponent implements OnInit {
	currentTemplate!: TemplateRef<any>;

	@ViewChild("SuccessToast", { static: true }) SuccessToast!: TemplateRef<any>;
	@ViewChild("ErrorToast", { static: true }) ErrorToast!: TemplateRef<any>;
	@ViewChild("WarningToast", { static: true }) WarningToast!: TemplateRef<any>;

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: ISnackbarConfig,
		private toastMessageService: ToastMessageService
	) {}
	ngOnInit() {
		this.setToastType();
	}

	setToastType() {
		switch (this.data.type) {
			case "success":
				this.currentTemplate = this.SuccessToast;
				break;
			case "error":
				this.currentTemplate = this.ErrorToast;
				break;
			case "warning":
				this.currentTemplate = this.WarningToast;
				break;
		}
	}

	closeSnackBar() {
		this.toastMessageService.closeSnackbar();
	}
}
