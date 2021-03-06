# Club Mananger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

##### By **Joshua Fairchild, July 14, 2017**

## Description

This is a website that allows a user to save details regarding clubs and the people who are members of those clubs. The application supports multiple clubs (though only contains two at the moment) and each club can contain many users. From the homepage the user may select a club, and they will be navigated to a screen that displays the names of the club members, each with their name hyperlinked to a personal information page. Also from the club's page the user may view an "About" page, detailing the club, or they may navigate to a "Admin" page where they may add/update/delete existing member profiles.

This application was created primarily using Angular 2, Firebase and the AngularFire2 library.

Deployed site can be viewed at: https://angular2-club-manager.firebaseapp.com/

## Installation Requirements

* You must install or have installed a current version of:

  * [Node and npm](https://nodejs.org/en/)

  * [TypeScript](https://www.typescriptlang.org/#download-links)

## Setup

* Clone this repository

  `$ git clone https://github.com/joshuafairchild1/angular2-club-manger`


* Run the following commands from the root directory:

  `$ npm install`

  `$ bower install`

  This will download the project's dependencies

## Firebase configuration

* Sign into the firebase console ([https://firebase.google.com/](https://firebase.google.com/)) and create a new project, then select "Add firebase to your web app". You will be presented with a modal window containing a few script tags, leave this information handy.

* In the directory `src/app` create a file called `api-key.ts` and add the following code:

  ```
  export const masterFirebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    databaseURL: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
  };

  ```
  * Note: for each property of the `masterFirebaseConfig` object, replace 'XXXX' with the information that firebase provided you in the previous step.


* Database content has been provided in a file called `db-content.json`, this can be uploaded to firebase directly by going into your database in the firebase console and selecting 'Import JSON'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technologies Used

* JavaScript
* TypeScript
* Angular CLI
* Bootstrap
* Firebase/AngularFire

## Known Bugs

* Editing a member and saving the changes causes their details to render multiple times on the page.

## License

This project is licensed under the MIT License

**Joshua Fairchild Copyright (c) 2017**
