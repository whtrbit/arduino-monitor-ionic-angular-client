import {Component} from '@angular/core';

import {Store} from '@ngrx/store';

import {TemperatureService} from '../../common/services/temperature/temperature.service';
import Temperature from '../../common/models/temperature/temperature';
import {TemperatureAddAllAction} from '../../state/temperature/temperature-actions';
import {AppStateSlices} from '../../state/app-state-slices';
import {AppState} from '../../state/app-state';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature-page.html',
    styleUrls: ['./temperature-page.scss'],
})
export class TemperaturePage {
    public temperatures: Temperature[];

    constructor(
        private store: Store<AppState>,
        private temperatureService: TemperatureService
    ) {
        this.temperatureService.getTemperatures().subscribe((temperatures) => {
            this.store.dispatch(new TemperatureAddAllAction(temperatures));

            this.store.select(AppStateSlices.temperature).subscribe((temperatureSlice) => {
                this.temperatures = temperatureSlice.all;
            });
        });
    }
}
