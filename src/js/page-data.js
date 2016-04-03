'use strict';

const feed = require('./feed.json');

const distillFeed = (breadCrumb, data) => {

    let distilled;
    let i = 0;

    const query = (breadCrumb, data, i) => {

        console.log(breadCrumb, i, breadCrumb[i]);

        if (i >= breadCrumb.length || !data.children) {
            console.log('i >== breadCrumb.length || !data.children');
            return;
        }

        const ref = breadCrumb[i];
        let match;

        data.children.map((page) => {

            console.log('testing', page.directory, '');

            if (page.directory === breadCrumb[i]) {
                console.log('*** page match', page.directory, '');
                match = page;
            }

        });

        i += 1;

        distilled = match;
        // console.log(distilled);

        query(breadCrumb, match, i);

    };

    query(breadCrumb, data, i);

    return distilled;

};

const fetch = (path) => {

    // const path = '/fruit';

    console.log('** ------------- **');
    console.log(path);
    console.log('** ------------- **');

    if (path !== '/') {

        console.log('NOT homepage');

        const breadCrumb = path.slice(1).split('/');

        // let json = distillFeed(breadCrumb, feed);

        // console.log('  ** ------------ **');
        // console.log(json);
        // console.log(json.directory);

        return distillFeed(breadCrumb, feed);


    } else {

        console.log('IS homepage');

        return feed;

    }

};

module.exports = fetch;
