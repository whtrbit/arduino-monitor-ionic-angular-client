// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBT8EKZoJX1h4RUp_6eBb1Kt2DXb5ir4Io',
        authDomain: 'arduino-monitor-7a5c5.firebaseapp.com',
        databaseURL: 'https://arduino-monitor-7a5c5.firebaseio.com',
        projectId: 'arduino-monitor-7a5c5',
        storageBucket: 'arduino-monitor-7a5c5.appspot.com',
        messagingSenderId: '258745019678'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
