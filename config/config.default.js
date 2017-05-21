'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1495340017705_8146';

    // add your config here
    //view
    config.view={
        mapping:{
            ".html":"nunjucks",
        },
        defaultViewEngine:"nunjucks",
        defaultExtension:".html"
    };

    return config;
};
