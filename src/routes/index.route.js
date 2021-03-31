const newRouter = require("./news.route");
const siteRouter = require("./site.route");

function route(app) {
                app.use("/news", newRouter);

    app.use("/", siteRouter);

    // app.post("/search", (req, res) => {
    //     //dung form thi submit theo body
    //     // console.log(req.body.q);
    //     // console.log(req.body.gender);
    //     res.send("");
    // });
}

module.exports = route;
