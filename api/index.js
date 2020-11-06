const fetcher = require("../helper/fetcher");
const card = require("../template/card");

module.exports = (req, res) => {
    const username = req.query.username;
    var cc = req.query.cc;
    var tc = req.query.tc;
    var ic = req.query.ic;

    if (username == undefined) {
        res.json("Username is required") // If username is undefined
    } else {
        // If user not provide the color values it will fallback to Default Values
        if (cc == undefined) var cc = 'fff';
        if (tc == undefined) var tc = '000';
        if (ic == undefined) var ic = 'FF0000';

        async function call(username) {
            var stats = await fetcher.repoD(username);
            if (stats.username == undefined) {
                res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
                res.json("Sorry user not found")
            } else {
                res.setHeader("Content-Type", "image/svg+xml");
                res.setHeader("Cache-Control", "s-maxage=700, stale-while-revalidate");
                res.send(await card.main(stats.name, stats.pic, stats.public_repos, stats.total_stars, stats.total_commits, stats.total_forks, stats.total_issues, stats.total_closed_issues, tc, cc, ic, stats.followers))
            };
        };
        call(username);
    }
}