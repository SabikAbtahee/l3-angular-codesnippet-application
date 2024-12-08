import { FormControl, FormGroup } from "@angular/forms";

export const toggleFullScreen = (): void => {
	const doc = window.document;
	const docEl = doc.documentElement;

	const requestFullScreen = docEl.requestFullscreen;
	const cancelFullScreen = doc.exitFullscreen;

	if (!doc.fullscreenElement) {
		requestFullScreen.call(docEl);
	} else {
		cancelFullScreen.call(doc);
	}
};

export const extractFormControls = (
	formGroup: FormGroup
): { [key: string]: FormControl } => {
	const controlsObject: { [key: string]: FormControl } = {};

	Object.keys(formGroup.controls).forEach((key) => {
		const control = formGroup.controls[key] as FormControl;
		controlsObject[key] = control;
	});

	return controlsObject;
};

export const getEnumEntries = (
	enumObj: any
): { name: string; value: number }[] => {
	return Object.keys(enumObj)
		.filter((key) => isNaN(Number(key)))
		.map((key) => ({
			name: key,
			value: enumObj[key]
		}));
};
