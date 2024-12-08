import { Component, Input } from "@angular/core";

@Component({
    selector: "app-icon-text",
    templateUrl: "./app-icon-text.component.html",
    styleUrl: "./app-icon-text.component.scss",
    standalone: false
})
export class AppIconTextComponent {
	@Input({ required: true }) text: string | null | undefined;
	@Input() textClass: string;
	@Input({ required: true }) iconName: string;
	@Input() divClass: any;
}
