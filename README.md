# arduino-monitor-ionic-angular-client

## Deploying
`npm i -g ionic cordova`

`npm run build`

`ionic cordova build android --prod --release`

Form your project directory (on Windows):  
First, change the default PACKAGE_NAME from `io.ionic.starter`.
The occurrences can be found in `google-services.json` (platforms directory - not part of repository), `android.json`, `config.xml`

`"\Program Files\Java\jre-10.0.2\bin\keytool.exe" -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias`

`"\Program Files\Java\jdk-10.0.2\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias`

`"\Users\gbielak\AppData\Local\Android\Sdk\build-tools\28.0.2\zipalign.exe" -v 4 app-release-unsigned.apk WhtrbitArduinoMonitor.apk`

`"\Users\gbielak\AppData\Local\Android\Sdk\build-tools\28.0.2\apksigner.bat" verify WhtrbitArduinoMonitor.apk`