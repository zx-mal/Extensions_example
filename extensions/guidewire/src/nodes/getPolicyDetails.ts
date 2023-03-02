import {
  createNodeDescriptor,
  INodeFunctionBaseParams,
} from "@cognigy/extension-tools";
import axios from "axios";

export interface IGetPolicyDetailsParams extends INodeFunctionBaseParams {
  config: {
    connection: {
      domain: string;
      username: string;
      password: string;
    };
    policyId: string;
    storeLocation: string;
    contextKey: string;
    inputKey: string;
  };
}

export const getPolicyDetailsNode = createNodeDescriptor({
  type: "getPolicyDetails",
  defaultLabel: "Get Policy Details",
  preview: {
    key: "policyId",
    type: "text",
  },
  fields: [
    {
      key: "connection",
      label: "Guidewire Connection",
      type: "connection",
      params: {
        connectionType: "guidewire",
        required: true,
      },
    },
    {
      key: "policyId",
      label: "Policy Id",
      description:
        "The ID of the policy for which more information is requested.",
      type: "cognigyText",
      params: {
        required: true,
      },
    },
    {
      key: "storeLocation",
      type: "select",
      label: "Where to store the result",
      defaultValue: "input",
      params: {
        options: [
          {
            label: "Input",
            value: "input",
          },
          {
            label: "Context",
            value: "context",
          },
        ],
        required: true,
      },
    },
    {
      key: "inputKey",
      type: "cognigyText",
      label: "Input Key to store Result",
      defaultValue: "guidewire.policy",
      condition: {
        key: "storeLocation",
        value: "input",
      },
    },
    {
      key: "contextKey",
      type: "cognigyText",
      label: "Context Key to store Result",
      defaultValue: "guidewire.policy",
      condition: {
        key: "storeLocation",
        value: "context",
      },
    },
  ],
  sections: [
    {
      key: "storage",
      label: "Storage Option",
      defaultCollapsed: true,
      fields: ["storeLocation", "inputKey", "contextKey"],
    },
  ],
  form: [
    { type: "field", key: "connection" },
    { type: "field", key: "policyId" },
    { type: "section", key: "storage" },
  ],
  appearance: {
    color: "#0052CC",
  },
  function: async ({ cognigy, config }: IGetPolicyDetailsParams) => {
    const { api } = cognigy;
    const { policyId, connection, storeLocation, contextKey, inputKey } =
      config;
    const { domain, username, password } = connection;

    try {
      const response = await axios({
        method: "get",
        url: `${domain}/policies/${policyId}`,
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: username,
          password: password,
        },
      });

      if (storeLocation === "context") {
        api.addToContext(contextKey, response, "simple");
      } else {
        // @ts-ignore
        api.addToInput(inputKey, response);
      }
    } catch (error) {
      if (storeLocation === "context") {
        api.addToContext(contextKey, error.message, "simple");
      } else {
        // @ts-ignore
        api.addToInput(inputKey, error.message);
      }
    }
  },
});
