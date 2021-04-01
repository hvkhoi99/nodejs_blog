const newRouter = require("./news.route");
const siteRouter = require("./site.route");
const contactRouter = require('./contact.route');

function route(app) {
    app.use("/news", newRouter);
    app.use("/", siteRouter);
    app.use('/contact', contactRouter);
    // app.post("/search", (req, res) => {
    //     //dung form thi submit theo body
    //     // console.log(req.body.q);
    //     // console.log(req.body.gender);
    //     res.send("");
    // });
}

module.exports = route;
