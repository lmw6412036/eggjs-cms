'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            let h=yield this.ctx.widget.form.input();
            console.log(h);
            yield this.ctx.render('home/index', {name: "hi,egg",h:h});
        }
    }
    return HomeController;
};
