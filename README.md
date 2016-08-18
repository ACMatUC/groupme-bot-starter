# GroupMe Bot Starter

[![MIT License](https://img.shields.io/github/license/acmatuc/groupme-bot-starter.svg?maxAge=2592000)]()
[![dependencies Status](https://david-dm.org/acmatuc/groupme-bot-starter/status.svg)](https://david-dm.org/acmatuc/groupme-bot-starter)

> Starter code for the GroupMe bot workshop at ACM@UC

[Screenshot of final product.]

## Requirements

* Node.js installed on your machine
  * OS X: install with [nvm](https://github.com/creationix/nvm), [brew](http://brew.sh/), or [nodejs.org](https://nodejs.org)
  * Windows: install with [nvm-windows](https://github.com/coreybutler/nvm-windows) or [nodejs.org](https://nodejs.org/)
* Git installed on your machine
  * OS X: install with [brew](http://brew.sh/) or [git-scm.com](https://git-scm.com/)
  * Windows: install with [git-scm.com](https://git-scm.com/)
* A [GroupMe](https://groupme.com/) account

## Quick Start

### 0. Start a new GroupMe group

* Launch the GroupMe app (or use [web.groupme.com](https://web.groupme.com/)) and create a new group (or just use an existing group)

### 1. Register a new GroupMe Bot

* Head over to [dev.groupme.com](https://dev.groupme.com/) and login with your GroupMe account credentials
* Go to the `bots` tab and select `Create Bot`
* Choose a group name, and avatar uri for the bot. The callback url should be `http://localhost:5000` for local development.
* Select `Submit` to create your bot
* Select your bot from the list of bots and copy the bot id for later

### 2. Setup the bot code

Getting the bot running on your localhost!

* Verify `Node.js` is installed by running `node -v`
* Clone this repository with `git clone https://github.com/acmatuc/groupme-bot-starter.git`
* `cd groupme-bot-starter`
* Install dependencies with `npm install`
* Setup a `.env` for storing your GroupMe bot id
  * Copy `.env.example` to `.env` with `cp .env.example .env`
  * Put your bot id in the key field for the value `BOT_ID` and save

### 3. Starting The Server

* Making sure everything is setup correctly
  * Run `node index.js` and head over to `http://localhost:5000` in your favorite web browser. This is a `GET` request, so the app will respond with `hey there!`.
  * This is great! The web server is working
* Responding to a GroupMe message
  * GroupMe sends `POST` requests to the app, so lets see if that's working
  * Run `node index.js`
  * Launch GroupMe and open the group that the bot is registered in.

## Deploying to the Interwebz (Optional step)

Sure, the bot works fine, but it is running on your local machine. Let's get the bot running on a live server for a 24/7 bot!

## License

[MIT License](LICENSE.md)
