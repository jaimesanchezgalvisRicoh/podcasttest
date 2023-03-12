export const getDataEpisode = async (url) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`
  );
  console.log({ url });
  const xmlString = await response.text();
  console.log({ xmlString });
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  console.log({ xmlDOM });

  const titleElement = xmlDOM.getElementsByTagName("title")[0];
  const title = titleElement.textContent;

  const episode = {
    title,
    // ...
  };

  return episode;
};
