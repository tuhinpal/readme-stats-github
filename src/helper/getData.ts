import millify from "millify";
import basicFetch from "./basicFetch";
import repositoryFetch from "./repositoryFetch";
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
  total_contributions: string | number;
};

async function getData(username: string): Promise<GetData> {
  let user = await basicFetch(username);
  let totalRepoPages = Math.ceil(user.repositories.totalCount / 100);
  let userRepositories = await repositoryFetch(username, totalRepoPages);

  if (!user.name) user.name = user.login;

  let output = {
    username: user.login,
    name: user.name,
    pic: await base64ImageFetcher.encode(`${user.avatarUrl}&s=200`, {
      string: true,
    }),
    public_repos: millify(user.repositories.totalCount),
    followers: millify(user.followers.totalCount),
    following: millify(user.following.totalCount),
    total_stars: millify(userRepositories.stars),
    total_forks: millify(userRepositories.forks),
    total_issues: millify(
      user.openedIssues.totalCount + user.closedIssues.totalCount
    ),
    total_closed_issues: millify(user.closedIssues.totalCount),
    total_contributions: millify(
      user.contributionsCollection.restrictedContributionsCount +
        user.contributionsCollection.totalCommitContributions
    ),
  };

  return output;
}

export default getData;
