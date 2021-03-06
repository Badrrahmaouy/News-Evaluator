# Webbpack Express Example App

## News Evaluator web app

### Overview

A simple web app that takes as input a valid URL to analyze the sentiment of the requested page. The analyzes comes from a fetch request made to Meaning Cloud API and is displayed to the user dynamically in the DOM.  

### Technologies implemented 
This app was made for an assigned project for the Udacity Front-End nanodegree. The app runs with Node.js and express server and all JavaScript, HTML, CSS files in the source folder are bundled with webpack. Jest is also implemented in the project in order to verify if the Javascript files run without any issue.

### Command for running
Here are the commands tha you need to run this app.

1. To install the necessary dependencies:  
- prompt this command to the terminal in the app folder after cloning it:   
    ```npm install```

2. To run the app in development mode:  
    ```npm run build-dev```

3. To run the express server:  
    ```npm start``` 
 
4. To execute Jest on the javascript files:  
    ```npm jest```