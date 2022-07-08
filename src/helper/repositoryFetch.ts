import axios from "axios";
import getRandomToken from "./getRandomToken";

type RepositoryData = {
  stars: number;
  forks: number;
  openedIssues: number;
};

export default async function repositoryFetch(
  username: string,
  totalpage: number
): Promise<RepositoryData> {
  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  await Promise.all(
    Array.from(
      { length: totalpage },
      async (_, i) => await getPerPageReposData(username, i + 1)
    )
  ).then((data: any) => {
    data.forEach((repo: any) => {
      stars += repo.stars;
      forks += repo.forks;
      openedIssues += repo.openedIssues;
    });
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}

async function getPerPageReposData(
  username: string,
  pageno: number
): Promise<object> {
  let data = await axios({
    method: "get",
    url: `https://api.github.com/users/${username}/repos?page=${pageno}&per_page=100`,
    headers: {
      "User-Agent": "tuhinpal/readme-stats-github",
      Authorization: getRandomToken(true),
    },
  });

  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  data.data.forEach((repo: any) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
    openedIssues += repo.open_issues;
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}
