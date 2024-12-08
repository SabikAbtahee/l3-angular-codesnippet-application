import { Component, Inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DrawerPosition } from "./side-drawer.config";
import { takeUntil } from "rxjs";
import { UnsubscribeAllSubjectComponent } from "../unsubscribe-all-subject/unsubscribe-all-subject.component";
import { SideDrawerService } from "@common";

@Component({
	selector: "app-side-drawer",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./side-drawer.component.html",
	styleUrls: ["./side-drawer.component.scss"]
})
export class SideDrawerComponent extends UnsubscribeAllSubjectComponent {
	@Input() position: DrawerPosition = "end";
	@Input() set opened(value: boolean) {
		this.isDrawerOpen = value;
	}
	@Input() hasBackdrop = true;
	@Input() disableClose = false;

	isDrawerOpen = false;

	constructor(
		private _sideDrawerService: SideDrawerService //
	) {
		super();
	}
	ngOnInit() {
		// this.subscribeToServiceEvents();
	}

	subscribeToServiceEvents() {
		this._sideDrawerService
			.drawerOpenCloseEvent()
			.pipe(takeUntil(this._unsubscribleAll))
			.subscribe((isOpen) => (this.isDrawerOpen = isOpen));
	}

	close() {
		this.isDrawerOpen = false;
	}

	open() {
		this.isDrawerOpen = true;
	}

	toggle() {
		this.isDrawerOpen = !this.isDrawerOpen;
	}
}
