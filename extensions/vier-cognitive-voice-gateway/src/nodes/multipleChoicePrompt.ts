import { createNodeDescriptor, INodeFunctionBaseParams } from '@cognigy/extension-tools';
import { promptFields } from './shared';

export interface IMultipleChoicePromptParams extends INodeFunctionBaseParams {
  config: {
    text: string,
    timeout: number,
    language?: string,
    synthesizers?: Array<string>,
    interpretAs?: string,
    bargeIn?: boolean,
    choices: object,
  };
}

export const promptForMultipleChoice = createNodeDescriptor({
  type: 'multipleChoicePrompt',
  defaultLabel: 'Get Multiple Choice Answer from Caller',
  summary: 'Say something to the call with a multiple choice prompt',
  appearance: {
    color: '#9a4a21'
  },
  tags: ['message'],
  fields: [
    ...promptFields,
    {
      type: 'json',
      label: 'Choices',
      key: 'choices',
      description: 'Add and adopt options and their synonyms to your need.',
      defaultValue: '{\n\
\t"yes": [\n\
\t\t"yes",\n\
\t\t"yeah",\n\
\t\t"affirmative",\n\
\t\t"DTMF_1"\n\
\t],\n\
\t"no": [\n\
\t\t"no",\n\
\t\t"never",\n\
\t\t"negative",\n\
\t\t"DTMF_0"\n\
\t]\n\
}',
      params: {
        required: true,
      }
    }
  ],
  sections: [
    {
      key: 'general',
      fields: ['text', 'timeout'],
      label: 'General Settings',
      defaultCollapsed: false
    },
    {
      key: 'choicesSection',
      fields: ['choices'],
      label: 'Choices',
      defaultCollapsed: false,
    },
    {
      key: 'additional',
      fields: ['language', 'synthesizers', 'interpretAs', 'bargeIn'],
      label: 'Additional Settings',
      defaultCollapsed: true
    }
  ],
  form: [
    {
      key: 'general',
      type: 'section'
    },
    {
      key: 'choicesSection',
      type: 'section'
    },
    {
      key: 'additional',
      type: 'section'
    }
  ],
  function: async ({ cognigy, config }: IMultipleChoicePromptParams) => {
    const { api } = cognigy;

    api.say(config.text, {
      status: 'prompt',
      timeout: config.timeout * 1000,
      language: config.language || null,
      synthesizers: config.synthesizers.length === 0 ? null : config.synthesizers,
      interpretAs: config.interpretAs || null,
      bargeIn: config.bargeIn,
      type: {
        name: 'MultipleChoice',
        choices: config.choices,
      }
    });
  }
});
