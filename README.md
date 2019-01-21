# learn-iris

This is for personal learning.

## What is this ?

To get current time on specific location using google geolocation and post to slack channel using Real Time Messaging client.

## How to use ?
First we use google geolocation API to determine specific location and use it to get the current time at that location.
- Get an API key from google console [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

Then we have to create slack workspace
- Create slack workspace [here](https://slack.com/create#email)

Create slack app
- Create slack app [here](https://api.slack.com/apps?new_app=1)
- On the left side menu choose Bot users.
- Give name for your bot user and click add.
- On the left side choose install app, and install it to your workspace.
- You'll redirecte to authorization page, click authorize.
- You'll get OAuth token and Bot User OAuth token(we will using this). Usually started with xoxb-blablabla
- Go back to your workspace, use any channel do you want or if need you can create one.
- Add your Bot user to that channel.

## Really this is the real implementation

- Copy your google api key to env file
- Copy your slack token to env file
- Copy your slack channel id to env file. Usually it will be your `workspaceurl.slack.com/YOUR_CHANNEL_ID`
- You can run `npm start` to start the app. It will automatically publish the event to your slack app.
- Type any location that you want to get the time e.g. `london` and the bot will reply the current time at that location.
- You can deploy your application on heroku or anything else.

## TODO
[] Refactor code
