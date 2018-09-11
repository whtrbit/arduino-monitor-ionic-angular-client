import {Action} from '@ngrx/store';
import Temperature from '../../common/models/temperature/temperature';

export enum TemperatureStateActionTypes {
    AddAll = '[Temperature] adds all temperatures to store'
}

export class TemperatureAddAllAction implements Action {
    readonly type = TemperatureStateActionTypes.AddAll;

    constructor(
      public payload: Temperature[]
    ) {}
}

export type TemperatureActions = TemperatureAddAllAction;
