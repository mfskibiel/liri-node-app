# liri-node-app

LIRI Bot app takes a user input for a method (such as "movie-this") and a song or movie title in the command line. It then returns detailed information such as release year, artist/cast, etc. on the input using the Spotify API for songs, and the OMDB API for movies. 

Video Demonstration: https://drive.google.com/file/d/1AKN4BmCg-JmIYJevU_elqRwAGW42-XH4/view


## Instructions for getting the app running on your machine 

The app is run by entering in 'node liri.js [either movie-this or spotify-this-song] [a song or movie if the user wants to enter one]'. If the user chooses not to input a song or movie it will default to set values. 

To get the app running on your machine, you'll want to make sure you do an npm install -y, to get your packages folder. you'll then want to make sure you have the following dependencies installed: dotenv, moment, axios, filesystem (fs). 

Once all of your packages are installed, you can run the app typing in node liri.js and then a method + a movie or song. 

## Technologies used:
- axios
- file system 
- OMD API
- Spotify API
- node.js
