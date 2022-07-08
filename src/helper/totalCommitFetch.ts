import axios from "axios";
import getRandomToken from "./getRandomToken";

export default async function totalCommitFetch(
  username: string
): Promise<number> {
  let data = await axios({
    method: "get",
    url: `https://api.github.com/search/commits?per_page=1&q=author:${username}`,
    headers: {
      Accept: "application/vnd.github.cloak-preview",
      "Content-Type": "application/json",
      "User-Agent": "tuhinpal/readme-stats-github",
      Authorization: getRandomToken(true),
    },
  });

  return Number(data.data.total_count);
}
