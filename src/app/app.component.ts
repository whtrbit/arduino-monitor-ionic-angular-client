import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Store} from '@ngrx/store';

import {TemperatureAddAllAction} from './state/temperature/temperature-actions';
import {AppStateSlices} from './state/app-state-slices';
import {AppState} from './state/app-state';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Temperature',
            url: '/temperature',
            icon: 'home'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private store: Store<AppState>
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        this.store.dispatch(new TemperatureAddAllAction([
            {
                celsius: 15,
                date: 'My date to format'
            },
            {
                celsius: 21,
                date: 'My date to format'
            }
        ]));

        this.store.select(AppStateSlices.temperature).subscribe((temperature) => {
            console.log(temperature);
        });
    }
}
