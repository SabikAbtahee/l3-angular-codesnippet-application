import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: false
})
export class AppComponent implements OnInit {
	/**
	 *
	 */
	constructor(private _authService: AuthService) {}
	ngOnInit() {
		console.log("AppComponent ngOninit");
		const a = this._authService.isLoggedIn();
		console.log(a);
	}
}
