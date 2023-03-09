export const getPodCast = async () => {
  try {
    const url =
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
    const response = await fetch(url);
    const { feed } = await response.json();
    const { entry } = feed;
    return entry;
  } catch (error) {
    console.log(error);
  }
};
