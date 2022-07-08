require("dotenv").config();

function getRandomToken(bearerHeader: boolean): string {
  let getEnvs: any = process.env;
  let getGhEnv: any = Object.keys(getEnvs).filter((key) =>
    key.startsWith("GH_")
  );
  getGhEnv = getGhEnv.map((key: string) => getEnvs[key]);
  let getRandomEnv: string =
    getGhEnv[Math.floor(Math.random() * getGhEnv.length)];

  if (bearerHeader) {
    return `Bearer ${getRandomEnv}`;
  }
  return getRandomEnv;
}

export default getRandomToken;
