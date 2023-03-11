export const getDetailsPodcast = async (id) => {
  const url = `https://itunes.apple.com/lookup?id=${id}`;
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  );
  const data = await response.json();
  const { contents } = data;
  return contents;
;
};
