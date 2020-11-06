const axios = require("axios");
const base64 = require('node-base64-image');
const token = [process.env.GH_TOKEN_ONE, process.env.GH_TOKEN_TWO, process.env.GH_TOKEN_THREE]; // Choose between three token to bypass the GH Limit 

async function repoD(username) {
    var ghd = await BASICfetch(username);
    var repo_info = await ISF(username, Math.ceil(ghd.public_repos / 100));
    var tiss = Number(await FIssues(username)) - Number(repo_info.total_opened_issues);
    if (tiss < 0) var tiss = 0;
    if (ghd.login == undefined) {
        return ghd;
    } else {
        if (ghd.name == undefined) { //Fallback in username if there is noname of that profile
            var name = ghd.login;
        } else {
            var name = ghd.name; //Grab First Name
        }
        var output = ({
            username: ghd.login,
            name: name,
            pic: await base64.encode(ghd.avatar_url + "&s=200", { string: true }),
            public_repos: format(ghd.public_repos),
            followers: format(ghd.followers),
            following: ghd.following,
            total_stars: format(repo_info.total_stars),
            total_forks: format(repo_info.total_forks),
            total_issues: format(await FIssues(username)),
            total_closed_issues: format(tiss),
            total_commits: format(await Fcommit(username))
        });
        return output;
    };
};

// Get Total Star, Total Opened Issues, Total Forks
async function ISF(username, totalpage) {
    var array = [];
    for (i = 0; i < totalpage; i++) {
        array.push(await fetchRD(username, (i + 1)));
    };
    var tstars = 0;
    var tforks = 0;
    var toissues = 0;
    array.filter(function(rt) {
        tstars += rt.total_stars;
        tforks += rt.total_forks;
        toissues += rt.total_opened_issues;
    });
    var ifs = ({
        total_stars: tstars,
        total_forks: tforks,
        total_opened_issues: toissues
    });
    return ifs;
};

// Fetch Basic Details
async function BASICfetch(username) {
    var basicconfig = {
        method: "get",
        url: "https://api.github.com/users/" + username,
        headers: { "User-Agent": "Tuhin", "Authorization": "Bearer " + token[Math.floor(Math.random() * 3)] }
    };
    return axios(basicconfig)
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return "Sorry that's an " + error
        });
};

// Fetch Repo Page
async function fetchRD(username, pageno) {

    var fetchRDco = {
        method: "get",
        url: "https://api.github.com/users/" + username + "/repos?per_page=100&page=" + pageno,
        headers: { "User-Agent": "Tuhin", "Authorization": "Bearer " + token[Math.floor(Math.random() * 3)] }
    };
    return axios(fetchRDco)
        .then(function(resp) {
            var tstars = 0;
            var tforks = 0;
            var toissues = 0;

            resp.data.filter(function(rt) {
                tstars += rt.stargazers_count;
                tforks += rt.forks_count;
                toissues += rt.open_issues;
            });
            var sisf = ({
                total_stars: tstars,
                total_forks: tforks,
                total_opened_issues: toissues
            });
            return sisf;
        })
        .catch(function(err) {
            return "Sorry that's an " + err
        });
};

// Fetch Total Commit
async function Fcommit(username) {
    var commitF = {
        method: 'get',
        url: 'https://api.github.com/search/commits?per_page=1&q=author:' + username,
        headers: {
            'Accept': 'application/vnd.github.cloak-preview',
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token[Math.floor(Math.random() * 3)]
        }
    };
    return axios(commitF)
        .then(function(resco) {
            return resco.data.total_count;
        })
        .catch(function(errorco) {
            return "Sorry that's an " + errorco;
        });
};
async function FIssues(username) {
    var issuesF = {
        method: 'get',
        url: 'https://api.github.com/search/issues?per_page=1&q=author:' + username,
        headers: {
            'Accept': 'application/vnd.github.cloak-preview',
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token[Math.floor(Math.random() * 3)]
        }
    };
    return axios(issuesF)
        .then(function(resis) {
            return resis.data.total_count;
        })
        .catch(function(erroris) {
            return "Sorry that's an " + erroris;
        });
};

function format(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k+' : Math.sign(num) * Math.abs(num)
}

module.exports = {
    repoD
};
