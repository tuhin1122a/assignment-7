import "server-only";

const getVideos = async () =>
  import("./data/videos.js").then((module) => module.default);

export default getVideos;
