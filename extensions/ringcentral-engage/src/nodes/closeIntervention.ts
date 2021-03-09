import { createNodeDescriptor, INodeFunctionBaseParams } from "@cognigy/extension-tools";

// Creating the node UI
export interface ICloseInterventionParams extends INodeFunctionBaseParams {
	config: {};
}

//Creating all necessary parameter for the node to work properly if any parameter are mandatory or optionals.
export const closeInterventionNode = createNodeDescriptor({
	type: "closeInterventionRingCentral",
	defaultLabel: "Close Intervention",
	fields: [],
	sections: [],
	form: [],
	appearance: {
		color: "#FF8800"
    },
	
	
	function: async ({ cognigy, config }: ICloseInterventionParams) => {
		const { api } = cognigy;
		const { space, connection, storeLocation, contextKey, inputKey } = config;
		const { domain, access_token } = connection;

		try {
			const response = await axios({
				method: 'put',
				url: `${domain}/interventions/${intervention_id}/close',
				headers: {
					'Authorization': 'Bearer ${access_token}'
				},
			});

			if (storeLocation === "context") {
				api.addToContext(contextKey, results, "simple");
			} else {
				// @ts-ignore
				api.addToInput(inputKey, results);
			}
		} catch (error) {
			if (storeLocation === "context") {
				api.addToContext(contextKey, error.message, "simple");
			} else {
				// @ts-ignore
				api.addToInput(inputKey, error.message);
			}
		}
	}
});
	
		
	
	
	
	
    
	//function: async ({ cognigy, config }: ICloseInterventionParams) => {
	//	const { api, input} = cognigy;
		// Send RingCentral Engage Command

        // How can I directly call ED API and use Cognigy context data in that call for 'API URL from the endpoint set up' and for 'intervention_id' as Cognigy automatically creates the intervention on the first reply ?
	//	api.say('', {
	//		_cognigy: {
	//			_ringCentralEngage: {
	//				json: { 
	//					command: "curl --location --request PUT '<context.API_URL>/interventions/<input.intervention_id>/close'",
	//				}
	//			}
	//		}
	//	});
//	}
//});