require("dotenv").config();

const { default: mongoose } = require("mongoose");
const errorHandler = require("./middlewares/errorHandler");
const express = require("express");

const app = express();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(errorHandler);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Db connected"))
    .catch((error) => console.log(error));

app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    res.json({
        service: "SwipStory Backend API Server",
        status: true,
        time: new Date(),
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://${HOST}:${PORT}...`);
});
