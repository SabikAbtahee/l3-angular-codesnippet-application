import { Component } from "@angular/core";

@Component({
	selector: "app-form-container",
	standalone: false,

	templateUrl: "./form-container.component.html",
	styleUrl: "./form-container.component.scss"
})
export class FormContainerComponent {
	items = Array(1000).fill(0);

	ngOnInit(): void {}
}
