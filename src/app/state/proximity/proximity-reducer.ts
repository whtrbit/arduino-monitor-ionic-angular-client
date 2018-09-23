import * as proximityActions from './proximity-actions';
import {ProximityState} from './proximity-state';
import {ProximityStateActionTypes} from './proximity-actions';

const initialState: ProximityState = {
    all: null,
    alarm: null
};

/**
 * Returns ProximityState based on action type.
 *
 * @param {ProximityState} state
 * @param {ProximityActions} action
 *
 * @return {ProximityState}
 */
export function proximityReducer(
    state: ProximityState = initialState,
    action: proximityActions.ProximityActions
): ProximityState {
    switch (action.type) {
        case ProximityStateActionTypes.AddAll: {
            return {
                ...state,
                all: action.payload
            };
        }

        case ProximityStateActionTypes.AddAlarm: {
            return {
                ...state,
                alarm: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
