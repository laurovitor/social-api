const userSchema = require("./schemas/userSchema");
const gallerySchema = require("./schemas/gallerySchema");
const mongoose = require("./database");

module.exports = { userSchema, gallerySchema, mongoose };
