require("dotenv").config();
var keys = require("./keys.js");

var fs = require("fs");
var axios = require("axios");

var Spotify = require("node-spotify-api");

//creating new object with my keys
var spotify = new Spotify(keys.spotify);

//taking what will be input into the command line by the user and storing in variables
var search = process.argv[2];
var item = process.argv.slice(3).join(" ");

//setting if statements for what to do based on input by the user 
//moveie-this
if (search === "movie-this") {
    if (item === "") {
        getMovie("Mr.+Nobody")
    } else {
        getMovie(process.argv.slice(3).join("+"));  //making what we will pass through
    }
};
//spotify-this-song
if (search === "spotify-this-song") {//if this is the method we need to use...
    if (item === "") {
        spotifySong("The Sign");
    } else {
        spotifySong(process.argv[3]);
    }
};

//do-what-it-says
if (search === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        dataArr = data.split(",");  //data is a string that is in the random file that we want to split into an array
        if (dataArr[0] === "movie-this") {
            if (dataArr[1] === undefined) {
                getMovie("Mr.+Nobody")
            } else {
                getMovie(dataArr[1].split().join("+"))
            }
        };
        if (dataArr[0] === "spotify-this-song") {
            if (dataArr[1] === undefined) {
                spotifySong("The Sign")
            } else {
                spotifySong(dataArr[1])
            }
        };
    });
}

//making my functions
//making function to retrieve the object from the spotify API when a song is entered
function spotifySong(songName) {
    spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data) {
        if (err) {
            return console.log("Error occured: " + error);
        }
        data.tracks.items.forEach(function (element) {
            console.log("");
            console.log(`Artist: ${element.artists[0].name}`);
            console.log(`Song: ${songName}`);
            console.log(`Spotify Preview Link: ${element.preview_url}`);
            console.log(`Album: ${element.album.name}`);
        })
    })
};

//making the getmovie function to call the omd api and retrieve the response object. then using the object to access values. 
function getMovie(movieName) {
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieName}+`).then
        (function (response) {
            var stuff = response.data
            console.log("");
            console.log(`Title: ${stuff.Title}`);
            console.log(`Released: ${stuff.Year}`);
            console.log(`IMDB rating: ${stuff.Ratings[0].Value}`);
            console.log(`Rotten tomatoes rating: ${stuff.Ratings[1].Value}`);
            console.log(`Produced in: ${stuff.Country}`);
            console.log(`Language: ${stuff.Language}`)
            console.log(`Plot: ${stuff.Plot}`);
            console.log(`Starring: ${stuff.Actors}`);
            if (movieName === "Mr.+Nobody") {
                console.log(`If you haven't watched Mr. Nobody then you should: http://www.imdb.com/title/tt0485947/`);
                console.log("It's on Netflix!");
            }
            console.log(`---------------------------`)
        })
        .catch(function (err) {
            console.log(err)
        });
};