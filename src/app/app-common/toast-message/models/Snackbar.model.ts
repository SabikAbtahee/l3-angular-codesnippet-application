import {
	ISnackbarConfig,
	ISnackbarType
} from "../interfaces/ISnackbar.interface";

export class Snackbar implements ISnackbarConfig {
	message: string;
	duration: number;
	type: ISnackbarType;
	subMessage: string;

	constructor(data: Partial<ISnackbarConfig>) {
		this.message = data?.message ?? "";
		this.type = data?.type ?? "success";
		this.duration = data?.duration ?? 5000;
		this.subMessage = data?.subMessage ?? "";
	}
}
