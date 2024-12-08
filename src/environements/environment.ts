import { environmentDefault } from "./environment.default";
import { environmentDev } from "./environment.dev";

export const environment = {
	...environmentDefault,
	...environmentDev
};
