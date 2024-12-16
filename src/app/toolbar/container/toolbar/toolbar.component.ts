import { Component } from "@angular/core";
import { environment } from "@environment";

@Component({
	selector: "app-toolbar",
	templateUrl: "./toolbar.component.html",
	styleUrls: ["./toolbar.component.scss"],
	standalone: false
})
export class ToolbarComponent {
	title = environment.portalName;
}
