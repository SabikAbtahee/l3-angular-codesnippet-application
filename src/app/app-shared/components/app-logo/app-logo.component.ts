import { Component, Input } from "@angular/core";

@Component({
    selector: "app-logo",
    templateUrl: "./app-logo.component.html",
    styleUrls: ["./app-logo.component.scss"],
    standalone: false
})
export class AppLogoComponent {
	@Input() logoClass = "logo";
}
