import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from "rxjs";

@Component({
    selector: "unsubscribe-all-subject",
    imports: [CommonModule],
    templateUrl: "./unsubscribe-all-subject.component.html",
    styleUrl: "./unsubscribe-all-subject.component.scss"
})
export class UnsubscribeAllSubjectComponent implements OnDestroy {
	public _unsubscribleAll: Subject<boolean>;

	/**
	 *
	 */
	constructor() {
		this._unsubscribleAll = new Subject();
	}
	ngOnDestroy(): void {
		this._unsubscribleAll.next(false);
		this._unsubscribleAll.complete();
	}
}
