import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import Temperature from '../../common/models/temperature/temperature';
import {AppState} from '../../state/app-state';
import {AppStateSlices} from '../../state/app-state-slices';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public temperature: Temperature;

    constructor(
        private store: Store<AppState>
    ) {}

    public ngOnInit() {
        this.store.select(AppStateSlices.temperature).subscribe((temperatures) => {
            this.temperature = temperatures.all[0];
        });
    }
}
