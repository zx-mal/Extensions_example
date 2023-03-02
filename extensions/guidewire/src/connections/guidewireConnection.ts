import { IConnectionSchema } from "@cognigy/extension-tools";

export const guidewireConnection: IConnectionSchema = {
	type: "guidewire",
	label: "Guidewire Connection",
	fields: [
		{ fieldName: "domain" },
		{ fieldName: "username" },
		{ fieldName: "password" }
	]
};