import { ValueProvider, InjectionToken } from '@angular/core';
import { Actions, MultipleActions, AdditionActions, ActionTypes } from '../types';

const ACTIONS = 'ACTIONS';

export const ACTIONS_TOKEN = new InjectionToken(ACTIONS);

export const additionActions: Record<ActionTypes, AdditionActions> = {
    [ActionTypes.INCREASE]: Actions.ADD,
    [ActionTypes.DECREASE]: Actions.REDUCE
};

export const multiplicationActions: Record<ActionTypes, MultipleActions> = {
    [ActionTypes.INCREASE]: Actions.MULTIPLE,
    [ActionTypes.DECREASE]: Actions.SPLIT
};

export const AdditionActionsProvider: ValueProvider = {
    provide: ACTIONS_TOKEN,
    useValue: additionActions
};

export const MultiplicationActionsProvider: ValueProvider = {
    provide: ACTIONS_TOKEN,
    useValue: multiplicationActions
};
