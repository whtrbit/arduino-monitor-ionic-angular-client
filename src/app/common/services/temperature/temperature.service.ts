import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/index';

import Temperature from '../../models/temperature/temperature';
import {AppState} from '../../../state/app-state';

@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    private getURL = 'https://us-central1-arduino-monitor-7a5c5.cloudfunctions.net/getTemperatures';

    constructor(
        private store: Store<AppState>,
        private http: HttpClient
    ) {}

    /**
     * Gets Firestore data through Google Functions.
     *
     * @return {Observable<Temperature[]>}
     */
    public getTemperatures(): Observable<Temperature[]> {
        return this.http.get(this.getURL);
    }
}
