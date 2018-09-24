import {Component, OnInit} from '@angular/core';

import {ProximityService} from './proximity.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app-state';
import {AppStateSlices} from '../../state/app-state-slices';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-proximity',
    templateUrl: './proximity.page.html',
    styleUrls: ['./proximity.page.scss'],
})
export class ProximityPage implements OnInit {
    public proximityAlarms: null | object[] = null;
    public proximityAlarm: {
        isSet: boolean,
        alarm: null | object
    } = {
        isSet: false,
        alarm: null
    };
    public proximityAlarmSub: Subscription;

    constructor(
        private proximityService: ProximityService,
        private store: Store<AppState>
    ) {}

    public ngOnInit (): void {
        this.proximityService.initializeStoreUpdate();
        this.store.select(AppStateSlices.proximity).subscribe((proximityState) => {
            if (proximityState.all) {
                this.proximityAlarms = this.proximityService.decorateProximityAlarmsForView(proximityState.all);
            }
        });
    }

    public attachAlarm(): void {
        this.proximityService.attachAlarm();
        this.proximityAlarm.isSet = this.proximityService.isAlarmSetup;
        this.proximityAlarmSub = this.store.select(AppStateSlices.proximity).subscribe((proximityState) => {
            if (proximityState.alarm) {
                this.proximityAlarm.alarm = this.proximityService.decorateProximityAlarmForView(proximityState.alarm);
            }
        });
    }

    public detachAlarm(): void {
        this.proximityService.detachAlarm();
        this.proximityAlarm.isSet = this.proximityService.isAlarmSetup;
        this.proximityAlarm.alarm = null;
        this.proximityAlarmSub.unsubscribe();
    }
}
