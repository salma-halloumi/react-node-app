const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
	res.json({ message: "Hello! Welcome to Salma's Website!" });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
