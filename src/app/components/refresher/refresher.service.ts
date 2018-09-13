import {Injectable} from '@angular/core';

import {TemperatureService} from '../../common/services/temperature/temperature.service';

@Injectable({
    providedIn: 'root'
})
export class RefresherService {
    constructor(
        private temperatureService: TemperatureService
    ) {}

    public refresh(): void {
        this.temperatureService.getFreshAndUpdateStore();
    }
}
