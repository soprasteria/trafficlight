# CDK - TrafficLight #

## Run one trafficlight on the same host ##

1. Get a Cleware USB mini Trafficlight

2. Configure the "CDK - TrafficLight App"
	2.1. Add your custom sounds to the sounds folder.
	2.2. Rename and edit the file example.data.js to data.js in conf folder.
	2.3. Edit the Jenkins info (url, port and path)
	2.4. Choose if your want to show a global status of a list of Jenkins jobs of a jenkins views. Please respect JSON Array Notation. If you put jobs AND views, only jobs will be analysed. Jobs name are case sensitive, if you have any doubt you can get them in Jenkins URL.

3. Launch it

- On Windows :

1. Launch nw.exe and within a few seconds the usb mini traffic light will blink, loader status will stop and the traffic light in the app will show the right color.
2. If you want that this app launch automatically with windows, do it in the configuration screen.

- On Linux/ARM :

```bash
sudo -E wget --http-user='cdk_ro' --http-password='viewer' --no-check-certificate http://pdtinteg.ptx.fr.sopra/artifactory/prj-cdk-releases/com/soprasteria/cdk/trafficlight/TrafficLight-linux.zip -O TrafficLight-linux.zip
sudo unzip -o TrafficLight-linux.zip
cd TrafficLight-linux
npm start
```
	
## Running multiple trafficlight instances on the same host ##

You can run multiple instances of the trafficlight on the same machine and use a different trafficlight device for each one.

1. Get the serial number for each of your trafficlights (the serial number should be written on the trafficlight itself : 6 caracters).
2. In your data.js files, add the -n option. Example: ( USBswitchCmd.exe -n 901577 ).
