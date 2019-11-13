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
