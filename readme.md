# Not-Scrabble PROJECT
-----------------------------

### Overview

For Project 3, I created a two player scrabble simulator.

The goal was to create an app that allowed multiple two player games to be created and played simultaneously. 

**Play a game [here:](https://not-scrabble.herokuapp.com/)**

-----------------------------

### Purpose

A few years ago, Words With Friends dominated the app scene as the "free version" of scrabble. There were no other clear competitors that I knew of at the time. Also, Words With Friends is only available as a mobile app. I wanted to fix the problem of both not having enough competition and not having an open source version to play from a desktop/laptop. Hopefully there are other people out there with the same desire.

-----------------------------

### Technologies Used

* Languages - CSS3, JS ES6,
* Frameworks - Node Express, React
* Database - MongoDB
* Project Planning - [Github Projects and Issues](https://git.generalassemb.ly/hwilliams13/project-3/projects/1)
* Editor - VSCode

-----------------------------

### Features

* 1 schema
    * GameInstance
* GameInstance stores all information necessary for both players to play against each other (gameBoard state, score, player turn, etc.)

-----------------------------

### Wireframe

![Wireframe](/images/Wireframe.jpg)

-----------------------------

### ERD

![ERD](/images/ERD.jpg)

-----------------------------

### Future Development

* Add user login
* Improve functionality
    * Make dragging cleaner
    * Make responsive
* Increase functionality
    * Add spellcheck
    * Add chain scoring