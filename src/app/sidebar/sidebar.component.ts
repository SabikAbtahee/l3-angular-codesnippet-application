import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavigationComponent } from "../navigation/navigation.component";
@Component({
	selector: "app-sidebar",
	imports: [MatSidenavModule, NavigationComponent],
	templateUrl: "./sidebar.component.html",
	styleUrl: "./sidebar.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
	ngOnInit(): void {}
}
