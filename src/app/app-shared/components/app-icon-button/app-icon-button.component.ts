import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-icon-button",
	templateUrl: "./app-icon-button.component.html",
	styleUrls: ["./app-icon-button.component.scss"]
})
export class AppIconButtonComponent {
	@Input() iconName!: string;
	@Input() iconClass: any;

	@Output() buttonClicked = new EventEmitter<boolean>();
	onClick() {
		this.buttonClicked.emit();
	}
}
