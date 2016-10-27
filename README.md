# GroupMe Bot Starter

[![MIT License](https://img.shields.io/github/license/acmatuc/groupme-bot-starter.svg?maxAge=2592000)]()
[![Dependencies Status](https://david-dm.org/acmatuc/groupme-bot-starter/status.svg)](https://david-dm.org/acmatuc/groupme-bot-starter)
[![Dependencies Status](https://david-dm.org/acmatuc/groupme-bot-starter/dev-status.svg)](https://david-dm.org/acmatuc/groupme-bot-starter?type=dev)

> Starter code for the GroupMe bot workshop at ACM@UC

![bot interaction](screenshots/bot-interaction.jpg)

## Before You Begin

You'll need a few things before you start:

* Git
    * Windows: install with [git-scm.com](https://git-scm.com/)
    * OS X: install with [git-scm.com](https://git-scm.com/) or [brew](http://brew.sh/)
    * Run `git --version` to verify that Git is installed
* Node.js >=4.0.0
    * Windows: install with [nodejs.org](https://nodejs.org/) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
    * OS X: install with [nodejs.org](https://nodejs.org), [nvm](https://github.com/creationix/nvm), or [brew](http://brew.sh/)
    * Run `node --version` to see your Node.js version and verify that it is installed
* A [GroupMe](https://groupme.com/) account

## Quick Start

### 0. Start a new GroupMe group

* Launch the GroupMe app (or use [web.groupme.com](https://web.groupme.com/)) and create a new group (or use an existing group)

### 1. Register a new GroupMe Bot

* Head over to [dev.groupme.com](https://dev.groupme.com/) and login with your GroupMe credentials
* Go to the `bots` tab and select `Create Bot`
* Choose a group, and avatar uri for the bot. The callback url should be `http://localhost:3000` for local development.
* Select `Submit` to create your bot
* Select your bot from the list of bots and save the bot id for later
* Check the group that you added the bot to. There should be a message that your bot was added to the group

### 2. Setup The Bot

Let's get this bot running on localhost!

* Verify Node.js is installed by running `node -v`
* Clone this repository with `git clone https://github.com/acmatuc/groupme-bot-starter.git`
* `cd groupme-bot-starter`
* Install dependencies with `npm install`
* Setup a `.env` for storing your GroupMe bot id
    * Copy `.env.example` to `.env` with `cp .env.example .env`
    * Put your bot id in the key field for the value `BOT_ID` and save

### 3. Starting The Server

* Making sure everything is setup correctly
    * Run `npm start` and head over to [`http://localhost:3000`](http://localhost:3000) in your favorite web browser. This is a `GET` request, so the app will respond with `Hey there!`
    * This is great! The web server is working, but GroupMe sends `POST` requests to your app, so lets see if that is working
    * Use `^C` (`control` + `C`) to exit the program
* Responding to a GroupMe message
    * Run `npm start` (or `npm run dev` on development)
    * Launch GroupMe and open the group that the bot is registered in
    * Post a message in the chat. By default the bot is setup to respond to messages starting with `/shrug`, so do that
    * You should see that the bot responds with `¯\_(ツ)_/¯`

#### Note: Running on your local machine

You'll notice that on your local development machine, you run `npm run dev` instead of `npm start`. `npm run dev` will ask to expose port 3000 (your bot) to [localtunnel.me](http://localtunnel.me) - a very handy tool for web development. The localtunnel implementation will look at the `LT_SUBDOMAIN` environment variable to set a subdomain. If the environment variable is not set, localtunnel will choose a random subdomain.

TODO

### 4. Customizing Your Bot

* Use `^C` to exit the program
* Open `lib/bot.js` in your favorite text editor and play around. Don't forget to run `npm start` or `npm run dev` after you make a change!

## Deploying to the Interwebz

Sure the bot works fine, but it is running on your local machine. Let's get the bot running on a live server for a 24/7 bot!

Steps: TODO

## Beyond This Guide

Check out [dev.groupme.com](https://dev.groupme.com/) for more information on GroupMe's api. The possibilities are endless when it comes to chat bots. These bots interact with simple http requests, so you can build them in the language or platform of your choice.

## License

[MIT License](LICENSE.md)

* Some content based on [groupme/bot-tutorial-nodejs](https://github.com/groupme/bot-tutorial-nodejs) (MIT License)
