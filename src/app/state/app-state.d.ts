import {TemperatureState} from './temperature/temperature-state';

export interface AppState {
    readonly temperature: TemperatureState;
}
