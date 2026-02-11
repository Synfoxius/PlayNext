//NodeJS uses the CommonJS module system (i.e. the "require()")
//as opposed to ES6 modules (similar concept) but different syntax
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("main");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});