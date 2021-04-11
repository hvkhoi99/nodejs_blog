const Course = require("../models/course.model");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // ktra req.query.type co phai la 1 trong 2 thang ['asc', 'desc'] khong
        let courseQuery = Course.find({});

        // De xu ly viec bat dong bo, ta su dung Promise.all([promises])
        // gop chung 2 cai ben duoi vao
        Promise.all([
            courseQuery.sortable(req),
            Course.countDocumentsDeleted(),
        ]).then(([courses, deletedCount]) => {
            //cu phap distructoring javascript
            res.render("me/stored-courses", {
                deletedCount, //cu phap ES6
                courses: mutipleMongooseToObject(courses),
            });
        }).catch(next);

        // Hien thi khoa hoc da bi xoa mem -> bat dong bo voi ben duoi
        // Course.countDocumentsDeleted()
        //     .then(deletedCount => {
        //         console.log(deletedCount)
        //     })
        //     .catch(next);

        // Course.find({})
        //     .then((courses) => {

        //     })
        //     .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render("me/trash-courses", {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
