import * as temperatureActions from './temperature-actions';
import {TemperatureState} from './temperature-state';
import {TemperatureStateActionTypes} from './temperature-actions';

const initialState: TemperatureState = {
    all: []
};

/**
 * Returns TemperatureState based on action type.
 *
 * @param {TemperatureState} state
 * @param {TemperatureActions} action
 *
 * @return {TemperatureState}
 */
export function temperatureReducer(
    state: TemperatureState = initialState,
    action: temperatureActions.TemperatureActions
): TemperatureState {
    switch (action.type) {
        case TemperatureStateActionTypes.AddAll: {
            return {
                ...state,
                all: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
