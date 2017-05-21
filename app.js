/**
 * Created by MBENBEN on 2017/5/21.
 */
var path = require("path");
module.exports = app => {
    class Widget extends app.Service {

    }

    app.Widget = Widget;

    app.beforeStart(function () {
        //加载widget
        const widgetPaths = app.loader.getLoadUnits().map(unit => {
            return path.join(unit.path, 'app/widget');
        });
        app.loader.loadToContext(widgetPaths, 'widget', {
            // service 需要继承 app.Service，所以要拿到 app 参数
            // 设置 call 在加载时会调用函数返回 UserService
            call: true
        });
    });
}