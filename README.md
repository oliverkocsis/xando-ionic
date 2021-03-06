# X & O

Xs and Os (Irish English), tic-tac-toe (American English) or noughts and crosses (Commonwealth English) is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. [^1]

The game is implemented using React and Ionic Framework. 

# Getting Started

## Install the Ionic CLI
Before proceeding, make sure your computer has [Node.js](https://nodejs.org/) installed. Install the Ionic CLI with npm:

    npm install -g @ionic/cli
    
## Clone the repository
Clone a repository from GitHub to your local computer.

    git clone git@github.com:oliverkocsis/xando-ionic.git
    
## Run the App
The majority of Ionic app development can be spent right in the browser using the ionic serve command:

    cd xando-ionic
    ionic serve

## Run the Tests

When you run `npm test`, Jest will launch in watch mode*. Every time you save a file, it will re-run the tests

## Deploying to Android

Complete a fresh build of the Ionic project, fixing any errors that it reports:

    ionic build

Every time you perform a build (e.g. `ionic build`) that updates your web directory (default: `build`), you'll need to copy those changes into your native projects:

    ionic cap copy

## Deploy to a Firebase

To deploy to a Firebase project, run the following command from your project directory:

    firebase deploy

# References
[^1]: Tic-tac-toe From Wikipedia, the free encyclopedia https://en.wikipedia.org/wiki/Tic-tac-toe 
