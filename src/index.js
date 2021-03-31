const path = require('path');
//template
const express = require('express');
//morgan: de biet trong qua trinh Cli gui request len Ser nhu the nao
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index.route');

//doi voi form, khi su dung post thi goi ra req.body.<key>
//can su dung body-parser trong express hay co the noi la su dung middleware
app.use(
    express.urlencoded({
        //can dinh nghia 1 oj extended: true de khong bi warning
        extended: true,
    }),
);

//neu su dung code javascript de submit, hoac voi cac phuong thuc get, post thong thuong thi dung express.json()
app.use(express.json());

//file tĩnh sẽ vô public
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan("combined"));

//Template engine : chia code ra nhieu file khac nhau, de quan ly
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');

//doi lai duong dan mac dinh cua handlebars
            app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(          app);

            app.listen(port, () => {
                console.log(`Example app listening at http://localhost:${port}`);
            });
