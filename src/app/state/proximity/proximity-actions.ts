import {Action} from '@ngrx/store';
import Proximity from '../../common/models/proximity/proximity';

export enum ProximityStateActionTypes {
    AddAll = '[ProximityAlarm] adds proximity alarm to store',
    AddAlarm = '[ProximityAlarm] new alarm set'
}

export class ProximityAddAllAction implements Action {
    readonly type = ProximityStateActionTypes.AddAll;

    constructor(
        public payload: Proximity[]
    ) {}
}

export class ProximityAddAlarmAction implements Action {
    readonly type = ProximityStateActionTypes.AddAlarm;

    constructor(
        public payload: Proximity
    ) {}
}

export type ProximityActions = ProximityAddAllAction | ProximityAddAlarmAction;
