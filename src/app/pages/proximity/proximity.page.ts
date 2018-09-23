import {Component, OnInit} from '@angular/core';

import {ProximityService} from './proximity.service';
import Proximity from '../../common/models/proximity/proximity';
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
    public proximityAlarms: null | Proximity[] = null;
    public proximityAlarm: null | Proximity = null;
    public proximityAlarmSub: Subscription;

    constructor(
        private proximityService: ProximityService,
        private store: Store<AppState>
    ) {}

    ngOnInit (): void {
        this.proximityService.initializeStoreUpdate();
        this.store.select(AppStateSlices.proximity).subscribe((proximityState) => {
            this.proximityAlarms = proximityState.all;
        });
    }

    public attachAlarm(): void {
        this.proximityService.attachAlarm();
        this.proximityAlarmSub = this.store.select(AppStateSlices.proximity).subscribe((proximityState) => {
            this.proximityAlarm = proximityState.alarm;
        });
    }

    public detachAlarm(): void {
        this.proximityService.detachAlarm();
        this.proximityAlarmSub.unsubscribe();
    }
}
