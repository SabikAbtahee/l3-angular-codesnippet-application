export type ISnackbarType = "success" | "error" | "warning";

export interface ISnackbarConfig {
	message: string;
	subMessage: string;
	duration: number;
	type: ISnackbarType;
}

export interface IToastMessage {
	openSnackbar(data: Partial<ISnackbarConfig>): void;
	closeSnackbar(): void;
}
