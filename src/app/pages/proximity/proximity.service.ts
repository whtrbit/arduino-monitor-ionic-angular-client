import {Injectable} from '@angular/core';

import {AngularFirestore} from 'angularfire2/firestore';

import {Store} from '@ngrx/store';

import {ProximityAddAlarmAction, ProximityAddAllAction} from '../../state/proximity/proximity-actions';
import {AppState} from '../../state/app-state';
import Proximity from '../../common/models/proximity/proximity';

@Injectable({
    providedIn: 'root'
})
export class ProximityService {
    private isAlarmSetup = false;

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
}
