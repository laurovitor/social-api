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
		profile: {
			firstname: {
				type: String,
				required: true,
			},
			lastname: {
				type: String
			},
			nickname: {
				type: String
			},
			birthday: {
				type: Date
			},
			photo: {
				type: mongoose.Schema.Types.ObjectId, ref: "Gallery"
			},
			biography: {
				type: String
			},
		},
		contact: {
			type: [{
				phone: { type: String },
				email: { type: String },
				public: { type: Boolean },
				validate: { type: Boolean }
			}],
			select: false
		},
		friends: {
			type: [{
				user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
				status: { type: Number, default: 0 },
				createdAt: { type: Date, default: Date.now }
			}],
			select: false
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
