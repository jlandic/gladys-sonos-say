# Sonos Say

Make Gladys speak through your node-sonos-http-api server

## First step

* Install and run [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api)

Ideally, you might want to install it on your RaspberryPi, alongside your Gladys installation, and manage it with `pm2`. To do so, instead of launching the server with `npm start`, use the command `pm2 start server.js`

**Note that, in order to make this module work, you must have a TTS service configured in `node-sonos-http-api`. See the related documentation.**

## Configuration

* The module requires the Parameter `SONOS_SAY_API_URL` to be set to the URL your `node-sonos-http-api` server is at. Once set, do not forget to restart Gladys.
* The module also requires the parameter `SONOS_SAY_ROOM` to be set to the room set in your Sonos configuration. Notifications are only supported for a single device as of now.
* Finally, you need to add at least one parameter `SONOS_SAY_VOICE_<language_code>` to match languages to voices or language code, according to the TTS services you use in `node-sonos-http-api` (ex: for AWS Polly, if you want the voice `Emma` to be used for English notifications, add the parameter `SONOS_SAY_VOICE_EN` with the value `Emma`)

## Usage

* Once installed, you may use this module as a notification service. Note that if you are not home, the service will ignore the notification, and pass it onto the next service, according to the priority levels you have set.
