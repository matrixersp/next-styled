import VideoCard from "./VideoCard";
import styled from "styled-components";

const videoCards = [
  {
    id: 1,
    userId: 1,
    title: "Should I start a YouTube channel for makeup storytimes",
  },
  {
    id: 2,
    userId: 2,
    title: "Should I start a YouTube channel for makeup storytimes",
  },
  {
    id: 3,
    userId: 3,
    title: "Should I start a YouTube channel for makeup storytimes",
  },
  {
    id: 4,
    userId: 4,
    title: "Should I start a YouTube channel for makeup storytimes",
  },
  {
    id: 5,
    userId: 5,
    title: "Should I start a YouTube channel for makeup storytimes",
  },
];

const VideosContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  padding-bottom: 5rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function VideoList() {
  return (
    <VideosContainer>
      {videoCards.map((videoCard) => (
        <VideoCard key={videoCard.id} {...videoCard} />
      ))}
    </VideosContainer>
  );
}
