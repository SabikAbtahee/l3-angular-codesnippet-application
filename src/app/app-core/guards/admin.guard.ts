import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { inject } from "@angular/core";

export const AdminGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
) => {
	const authService = inject(AuthService);
	return authService.isAdmin();
};
