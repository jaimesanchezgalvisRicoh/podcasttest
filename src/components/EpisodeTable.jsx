import { Table } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDetailsEpisodes } from "../api/getDetailsEpisodes";
import { useEpisodes } from "../hooks/useEpisodes";

function EpisodeTable({ feedUrl }) {
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
  const { data } = useEpisodes(feedUrl);

  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header>
        <Table.Column>Title</Table.Column>
        <Table.Column>Date</Table.Column>
        <Table.Column>Duration</Table.Column>
      </Table.Header>
      <Table.Body>
        {data?.map((episode, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Link to={`${episode.id}`} key={index}>
                {episode.title}
              </Link>
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
