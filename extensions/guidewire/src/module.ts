import { createExtension } from "@cognigy/extension-tools";
import { guidewireConnection } from "./connections/guidewireConnection";
import { getPolicyDetailsNode } from "./nodes/getPolicyDetails";

export default createExtension({
	nodes: [
		getPolicyDetailsNode
	],

	connections: [
		guidewireConnection
	],

	options: {
		label: "Guidewire"
	}
});