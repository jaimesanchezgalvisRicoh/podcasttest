import { Link, Table } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function EpisodeTable({ feedUrl }) {
  const [episodes, setEpisodes] = useState([]);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFloor = Math.floor(remainingSeconds % 60);
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSecondsFloor).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    fetch(`${feedUrl}`)
      .then((response) => response.text())
      .then((xmlString) => {
        const parser = new DOMParser();
        const xmlDOM = parser.parseFromString(xmlString, "text/xml");

        const episodes = xmlDOM.querySelectorAll("item");

        const episodeList = [];

        for (let i = 0; i < episodes.length; i++) {
          const episode = {};

          episode.title = episodes[i].querySelector("title").textContent;
          const pubDate = episodes[i].querySelector("pubDate").textContent;
          episode.date = new Date(pubDate);

          const enclosure = episodes[i].querySelector("enclosure");
          const duration = enclosure?.getAttribute("length");
          episode.duration = duration / 60000;

          // episode.link = episodes[i].querySelector("link").textContent;

          episodeList.push(episode);
        }

        setEpisodes(episodeList);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Title</Table.Column>
        <Table.Column>Date</Table.Column>
        <Table.Column>Duration</Table.Column>
      </Table.Header>
      <Table.Body>
        {episodes.map((episode, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Link to={`1`}>{episode.title}</Link>
            </Table.Cell>
            <Table.Cell>{episode.date.toLocaleDateString()}</Table.Cell>
            <Table.Cell>{formatTime(episode.duration)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default EpisodeTable;
