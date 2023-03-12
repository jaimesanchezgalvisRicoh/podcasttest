export const getEpisodeDetails = async (episodeId) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://jbpod.libsyn.com/${episodeId}.json`
    )}`
  );
  const episodeData = await response.json();

  //   const episode = {};

  //   episode.id = episodeId;
  //   episode.title = data.title;
  //   episode.date = new Date(data.published_at);
  //   episode.duration = data.audio_length / 60;
  //   episode.link = data.permalink_url;

  return episodeData;
};
