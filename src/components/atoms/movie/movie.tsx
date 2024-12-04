import React from "react";
import styled from "@emotion/styled";

interface MovieCardProps {
  title: string;
  posterUrl?: string; // Optional poster image
  releaseDate?: string; // Optional release date
  description?: string; // Optional movie description
}

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  padding: 0 10px;
  color: #333;
`;

const ReleaseDate = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const Description = styled.p`
  font-size: 12px;
  color: #555;
  padding: 0 10px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterUrl,
  releaseDate,
  description,
}) => {
  return (
    <Card>
      {/* {posterUrl && <Poster src={posterUrl} alt={`${title} poster`} />} */}
      <Title>{title}</Title>
      {releaseDate && <ReleaseDate>Released: {releaseDate}</ReleaseDate>}
      {description && <Description>{description}</Description>}
    </Card>
  );
};
