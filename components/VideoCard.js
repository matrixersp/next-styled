import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import toBase64 from "./toBase64";
import Shimmer from "./Shimmer";

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  background-color: white;
  margin: 10px;
`;

const Media = styled.div`
  margin-bottom: 58px;
  position: relative;
`;

const ImageWrapper = styled.div`
  height: 300px;
  @media (max-width: 992px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 500px;
  }
`;

const Product = styled.div`
  position: absolute;
  top: 102%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const User = styled.div`
  position: absolute;
  z-index: 100;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: bold;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const PlayIcon = styled.img`
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProductImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.19);
  margin-bottom: 8px;
  display: flex;
`;

const Description = styled.p`
  padding: 12px 18px;
  font-size: 0.85rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.4;
`;

const loader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function VideoCard({ id, userId, title }) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleRedirectToVideo = (e) => {
    e.preventDefault();
    router.push(`/videos/${id}`);
  };

  const handleRedirectToUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/users/${userId}`);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div
      role="link"
      onClick={handleRedirectToVideo}
      rel="noopener noreferrer"
      style={{ cursor: "pointer" }}
    >
      <Container>
        <Media>
          <ImageWrapper className={imageLoaded && "imageWrapper"}>
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                Shimmer(400, 350)
              )}`}
              src={`/images/sampleImage${id}.jpeg`}
              alt="Sample image"
              layout="fill"
              objectFit="cover"
              className="radius"
              onLoad={handleImageLoaded}
            />
          </ImageWrapper>
          <a href="#" onClick={handleRedirectToUser} rel="noopener noreferrer">
            <User>
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                <Image
                  src={`/images/userImage2.jpeg`}
                  alt="User image"
                  width={32}
                  height={32}
                  objectFit="cover"
                />
              </div>
              <Username>Estertaniaj</Username>
            </User>
          </a>
          <PlayIcon src="/images/play_icon.png" alt="Play icon" />
          <Product>
            <ProductImageWrapper>
              <Image
                src={`/images/productImage.png`}
                alt="Product picture"
                width={62}
                height={62}
              />
            </ProductImageWrapper>
            <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
              $35.95
            </span>
          </Product>
        </Media>
        <Description>{title}</Description>
      </Container>
    </div>
  );
}
