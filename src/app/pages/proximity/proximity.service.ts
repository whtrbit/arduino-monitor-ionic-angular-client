import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

import {Store} from '@ngrx/store';

import * as moment from 'moment';

import {ProximityAddAlarmAction, ProximityAddAllAction} from '../../state/proximity/proximity-actions';
import {AppState} from '../../state/app-state';
import Proximity from '../../common/models/proximity/proximity';

@Injectable({
    providedIn: 'root'
})
export class ProximityService {
    public isAlarmSetup = false;

    constructor(
        private db: AngularFirestore,
        private store: Store<AppState>
    ) {}

    public initializeStoreUpdate(): void {
        this.db.collection('proximityAlarms').valueChanges().subscribe((proximityAlarms: Proximity[]) => {
            this.store.dispatch(new ProximityAddAllAction(proximityAlarms));

            if (this.isAlarmSetup) {
                this.store.dispatch(new ProximityAddAlarmAction(proximityAlarms[0]));
            }
        });
    }

    public attachAlarm(): void {
        this.isAlarmSetup = true;
    }

    public detachAlarm(): void {
        this.isAlarmSetup = false;
        this.store.dispatch(new ProximityAddAlarmAction(null));
    }

    public decorateProximityAlarmsForView(proximityAlarms: Proximity[]): object[] {
        return proximityAlarms.map((proximityAlarm) => {
            return this.decorateProximityAlarmForView(proximityAlarm);
        });
    }

    public decorateProximityAlarmForView(proximityAlarm: Proximity): object {
        return {
            date: moment(proximityAlarm.date).format('DD.MM.YYYY - HH:mm'),
            distance: (proximityAlarm.distance / 100).toFixed(2) + 'm'
        };
    }
}
