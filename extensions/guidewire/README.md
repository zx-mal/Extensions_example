
# Guidewire

Integrates Cognigy.AI with Guidewire (https://developer.guidewire.com/rest-api-client/)

The InsuranceSuite REST API Client provides functionality that Guidewire applications and integrations use to make outbound HTTP calls to third-party OpenAPI Spec-compliant REST services. Using the client enables loosely-coupled external code to be invoked by events that are sourced in InsuranceSuite and other Guidewire applications.

# Get Policy Details

Pass the policy ID to the node to retrieve policy details. 

Sample response: 
```
{
"data": {
"attributes": {},
"checksum": "string",
"id": "string",
"links": {},
"method": "post",
"refid": "string",
"related": {},
"type": "string",
"uri": "string"
},
"included": {
"Account": [],
"AccountContact": [],
"AccountLocation": [],
"Activity": [],
"ActivityPattern": [],
"AdditionalNamedInsured": [],
"AssessmentSummary": [],
"Assignee": [],
"Contingency": [],
"Cost": [],
"Document": [],
"DocumentContent": [],
"Job": [],
"JobPreemption": [],
"JobRoles": [],
"JobVersion": [],
"LossHistory": [],
"Note": [],
"OOSConflicts": [],
"PAVhcleAddlInterest": [],
"PaymentInfo": [],
"PaymentPlan": [],
"PersonalAutoLine": [],
"PersonalAutoLineCoverage": [],
"PersonalVehicle": [],
"PersonalVehicleCoverage": [],
"Policy": [],
"PolicyContact": [],
"PolicyDriverMVR": [],
"PolicyLine": [],
"PolicyLocation": [],
"PolicyLocationQuestions": [],
"PolicyQuestions": [],
"PriorLoss": [],
"PriorPolicy": [],
"UWIssue": [],
"UWIssueHistory": [],
"UWReferralReason": [],
"VehicleDriver": []
}
} 
```