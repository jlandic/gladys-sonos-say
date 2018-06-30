# Sonos Say

Make Gladys speak through your node-sonos-http-api server

## First step

* Install and run [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api)

Ideally, you might want to install it on your RaspberryPi, alongside your Gladys installation, and manage it with `pm2`. To do so, instead of launching the server with `npm start`, use the command `pm2 start server.js`

**Note that, in order to make this module work, you must have a TTS service configured in `node-sonos-http-api`. See the related documentation.**

## Configuration

* The module requires the Parameter `SONOS_SAY_API_URL` to be set to the URL your `node-sonos-http-api` server is at. Once set, do not forget to restart Gladys.

## Usage

* Once installed, you may use this module as a notification service. Note that if you are not home, the service will ignore the notification, and pass it onto the next service, according to the priority levels you have set.
