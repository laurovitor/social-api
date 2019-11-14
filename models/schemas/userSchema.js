const mongoose = require("../database");
const { hashSync } = require("bcryptjs");

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true,
			select: false
		},
		name: {
			type: String,
			required: true,
		}
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function (next) {
	const hash = await hashSync(this.password);
	this.password = hash;
	next();
});

module.exports = mongoose.model("User", UserSchema);
