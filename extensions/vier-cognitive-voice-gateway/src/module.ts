import { createExtension } from '@cognigy/extension-tools/build';
import { terminateCallNode } from './nodes/terminateCall';
import { forwardCallNode } from './nodes/forwardCall';
import { bridgeCallNode, onBridgeFailure, onBridgeSuccess, onBridgeTermination } from './nodes/bridgeCall';
import { playNode } from './nodes/play';
import { recordingStartNode } from './nodes/recordingStart';
import { recordingStopNode } from './nodes/recordingStop';
import { sendDataNode } from './nodes/data';
import { promptForNumberNode } from './nodes/numberPrompt';
import { promptForMultipleChoice } from './nodes/multipleChoicePrompt';
import { speakNode } from './nodes/speak';
import { setSpeechtoTextServiceNode } from './nodes/setSpeechToTextService';
import { checkForwardResultNode, onForwardDefault, onForwardFailure, onForwardSuccess, onForwardTermination } from './nodes/checkForwardResult';

export default createExtension({
  nodes: [
    promptForNumberNode,
    promptForMultipleChoice,
    recordingStartNode,
    recordingStopNode,
    playNode,
    sendDataNode,
    forwardCallNode,
    bridgeCallNode,
    terminateCallNode,
    speakNode,
    checkForwardResultNode,
    onForwardSuccess, // child
    onForwardFailure, // child
    onForwardTermination, // child
    onForwardDefault,  // child
    onBridgeSuccess, // child
    onBridgeFailure, // child
    onBridgeTermination, // child
    setSpeechtoTextServiceNode,
  ],
  options: {
    label: 'VIER Voice'
  }
});