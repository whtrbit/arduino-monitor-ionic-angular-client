import {Component, OnInit} from '@angular/core';

import {getTemperatureSelector} from '../../state/temperature/temperature-reducer';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature-page.html',
    styleUrls: ['./temperature-page.scss'],
})
export class TemperaturePage implements OnInit {
    constructor() {}

    ngOnInit() {}
}
