/**
 * Created by MBENBEN on 2017/5/21.
 */
module.exports = app => {
    return class Form extends app.Widget {
        * input() {
            let h=yield this.ctx.renderView('widget/demo',{});
            return h;
        }
    }
}