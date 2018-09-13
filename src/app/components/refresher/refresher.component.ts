import {Component, OnInit} from '@angular/core';

import {RefresherService} from './refresher.service';

@Component({
    selector: 'arm-refresher',
    templateUrl: './refresher.component.html',
    styleUrls: ['./refresher.component.scss']
})
export class RefresherComponent implements OnInit {
    constructor(
        private refresherService: RefresherService
    ) {}

    ngOnInit() {}

    public refresh(): void {
        this.refresherService.refresh();
    }
}
