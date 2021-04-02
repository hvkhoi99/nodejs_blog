//controllers viet chuc nang
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render("news");
    }

    // [GET] /:slug
    show(req, res) {
        res.send("news show!");
    }
}

module.exports = new NewsController();
