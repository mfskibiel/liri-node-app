# liri-node-app

LIRI Bot app takes a user input for a method (such as "movie-this") and a song or movie title in the command line. It then returns detailed information such as release year, artist/cast, etc. on the input using the Spotify API for songs, and the OMDB API for movies. 

Video Demonstration: https://drive.google.com/file/d/1AKN4BmCg-JmIYJevU_elqRwAGW42-XH4/view


## Instructions for getting the app running on your machine 

The app is run by entering in 'node liri.js [either movie-this or spotify-this-song] [a song or movie if the user wants to enter one]'. If the user chooses not to input a song or movie it will default to set values. 

To get the app running on your machine, you'll want to make sure you do an npm install -y, to get your packages folder


the app uses: 
- axios
- file system 
- OMD API
- Spotify API
