//controllers viet chuc nang
class NewsController {
    // [GET] /
    home(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
