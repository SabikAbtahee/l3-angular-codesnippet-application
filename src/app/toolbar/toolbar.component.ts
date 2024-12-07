import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
@Component({
	selector: "app-toolbar",
	imports: [MatToolbarModule],
	templateUrl: "./toolbar.component.html",
	styleUrl: "./toolbar.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
	ngOnInit(): void {}
}
