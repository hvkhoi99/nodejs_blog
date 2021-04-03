const Course = require('../models/course.model');
const { mutipleMongooseToObject } = require('../../util/mongoose');
//controllers viet chuc nang
class SiteController {
    // [GET] /
    home(req, res, next) {
        // res.render("home");
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     };
        // });

        Course.find({})
            .then((courses) => {
                // courses = courses.map(course=>course.toObject()); //viet cach nay cung dc
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next); // next = <err => next(err)>
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
