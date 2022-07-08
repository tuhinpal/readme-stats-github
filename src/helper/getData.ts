import basicFetch from "./basicFetch";
import repositoryFetch from "./repositoryFetch";
import totalIssueFetch from "./totalIssueFetch";
import millify from "millify";
import totalCommitFetch from "./totalCommitFetch";
const base64ImageFetcher = require("node-base64-image");

export type GetData = {
  username: string;
  name: string;
  pic: string | Buffer;
  public_repos: string | number;
  followers: string | number;
  following: string | number;
  total_stars: string | number;
  total_forks: string | number;
  total_issues: string | number;
  total_closed_issues: string | number;
  total_commits: string | number;
};

async function getData(username: string): Promise<GetData> {
  let user = await basicFetch(username);
  let totalRepoPages = Math.ceil(user.public_repos / 100);
  let userRepositories = await repositoryFetch(username, totalRepoPages);
  let userTotalIssues = await totalIssueFetch(username);
  let totalClosedIssues = userTotalIssues - userRepositories.openedIssues;
  let totalCommits = await totalCommitFetch(username);

  if (!user.name) user.name = username;

  let output = {
    username: user.login,
    name: user.name,
    pic: await base64ImageFetcher.encode(`${user.avatar_url}&s=200`, {
      string: true,
    }),
    public_repos: millify(user.public_repos),
    followers: millify(user.followers),
    following: millify(user.following),
    total_stars: millify(userRepositories.stars),
    total_forks: millify(userRepositories.forks),
    total_issues: millify(userTotalIssues),
    total_closed_issues: millify(totalClosedIssues),
    total_commits: millify(totalCommits),
  };

  return output;
}

export default getData;
