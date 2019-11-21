const mongoose = require("../database");

const GallerySchema = new mongoose.Schema(
	{
		link: {
			type: String,
			required: true,
			lowercase: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);
