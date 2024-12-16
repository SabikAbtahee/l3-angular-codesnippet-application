import { Signal } from "@angular/core";
export interface IAuth {
	isLoggedIn(): boolean;
	isAdmin(): boolean;
	isCustomer(): boolean;
	isVendor(): boolean;
	logOut(): void;
	LoggedInUser: Signal<ILoggedInUser>;
	// CurrentEmail
	// CurrentName
	// isAuthorized
}

export interface IToken {
	sub: string;
	name: string;
	email: string;
	roles: string[] | string;
	exp: number;
	iss: string;
	aud: string;
}

interface LoggedInUser {
	Email: string;
	Name: string;
	Roles: string[];
}

export type ILoggedInUser = LoggedInUser | null;
