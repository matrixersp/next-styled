import VideoCard from "./VideoCard";
import styled from "styled-components";

const videoCards = [
  { id: 1, title: "Should I start a YouTube channel for makeup storytimes" },
  { id: 2, title: "Should I start a YouTube channel for makeup storytimes" },
  { id: 3, title: "Should I start a YouTube channel for makeup storytimes" },
  { id: 4, title: "Should I start a YouTube channel for makeup storytimes" },
  { id: 5, title: "Should I start a YouTube channel for makeup storytimes" },
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function VideoList() {
  return (
    <Container>
      {videoCards.map((videoCard) => (
        <VideoCard key={videoCard.id} {...videoCard} />
      ))}
    </Container>
  );
}
