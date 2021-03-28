const path = require("path");
//template
const express = require("express");

//morgan: de biet trong qua trinh Cli gui request len Ser nhu the nao
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//file tĩnh sẽ vô public
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
// app.use(morgan("combined"));

//Template engine : chia code ra nhieu file khac nhau, de quan ly
app.engine(".hbs", handlebars({
  extname: '.hbs'
}));
app.set("view engine", ".hbs");

//doi lai duong dan mac dinh cua handlebars
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  //render ra home.handlebars
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
