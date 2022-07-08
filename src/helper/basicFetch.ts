import axios from "axios";
import getRandomToken from "./getRandomToken";

type User = {
  public_repos: number;
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
};

export default async function basicFetch(username: string): Promise<User> {
  try {
    let data = await axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        "User-Agent": "tuhinpal/readme-stats-github",
        Authorization: getRandomToken(true),
      },
    });
    return data.data;
  } catch (error: any) {
    throw new Error(`Error: ${error?.response?.data?.message}`);
  }
}
