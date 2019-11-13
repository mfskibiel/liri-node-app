require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

let axios = require("axios");
let fs = require("fs");