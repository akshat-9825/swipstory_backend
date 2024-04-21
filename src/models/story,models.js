const mongoose = require("mongoose");
const generateUniqueSlug = require("../utils");

const slideSchema = new mongoose.Schema({
    Heading: String,
    Description: String,
    Image: String,
    Category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const storySchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            required: true,
            default: function () {
                return generateUniqueSlug();
            },
        },
        slides: [slideSchema],
        likes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("Story", storySchema);
