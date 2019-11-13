require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
let Spotify = require("node-spotify-api")

var axios = require("axios");
var fs = require("fs");

const [node, file, ...args] = process.argv;

//movie-this
if (args[0] === "movie-this") {
    if (args[1] === undefined) {
        getMovie("Mr.+Nobody")
    } else {
        getMovie(args.slice(1).join("+"));  //making what we will pass through
    }
};

//spotify-this-song
if (args[0] === "spotify-this-song") {//if this is the method we need to use...
    if (args[1] === undefined) {
        spotifySong("The Sign");
    } else {
        spotifySong(songTitle);
    }
};

//do-what-it-says
if (args[0] === "do-what-it-says") {
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
                spotifySong(dataarr[1])
            }
        };
    });
}


//making my functions

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

//get movie function 

function getMovie(movieName) {
    axios.get(`http://omdapi.com/?t=${movieName}@apikey=PUT KEY IN`).then
        (function (movie) {
            console.log("");
            console.log(`Title: ${movie.data.Title}`);
            console.log(`Released: ${movie.data.Year}`);
            console.log(`IMDB rating: ${movie.data.Ratings[0].Value}`);
            console.log(`Rotten tomatoes rating: ${movie.data.Ratings[1].Value}`);
            console.log(`Produced in: ${movie.data.Country}`);
            console.log(`Plot: ${movie.data.Plot}`);
            console.log(`Starring: ${movie.data.Actors}`);
        })
        .catch(function (err) {
            console.log(err)
        });
};