export const getDetailsEpisodes = async (feedUrl) => {
  const response = await fetch(feedUrl);
  const xmlString = await response.text();
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  const episodes = xmlDOM.querySelectorAll("item");
  const episodeList = [];

  const description = xmlDOM.querySelector("description").textContent;

  for (let i = 0; i < episodes.length; i++) {
    const episode = {};

    episode.title = episodes[i].querySelector("title").textContent;
    const pubDate = episodes[i].querySelector("pubDate").textContent;
    episode.date = new Date(pubDate);

    const enclosure = episodes[i].querySelector("enclosure");
    const duration = enclosure?.getAttribute("length");
    episode.duration = duration / 60000;

    episode.id = episodes[i].querySelector("guid").textContent;

    episode.description = episodes[i].querySelector("description").textContent;
    try {
      episode.thumbnail = episodes[i]
        .querySelector("itunes\\:image")
        .getAttribute("href");
    } catch (error) {
      try {
        episode.thumbnail = episodes[i]
          .querySelector("image")
          .getAttribute("href");
      } catch (error) {
        episode.thumbnail = "/assets/DefaultImg.png";
      }
    }

    episode.audioUrl = enclosure?.getAttribute("url");

    episodeList.push(episode);
  }

  return { episodeList, description };
};
