import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl } from "@angular/forms";

@Component({
	selector: "form-validation-error",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./form-validation-error.component.html",
	styleUrl: "./form-validation-error.component.scss"
})
export class FormValidationErrorComponent {
	@Input({ required: false }) name: string = "This";
	@Input({ required: true }) control: FormControl;
}
