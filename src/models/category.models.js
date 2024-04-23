const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});

module.exports = mongoose.model("Category", categorySchema);
