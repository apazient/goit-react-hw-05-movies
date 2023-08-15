import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import styled from 'styled-components';

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from);
  console.log(location);

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
      } finally {
      }
    };

    fetchAll();
  }, [id]);

  const { title, overview, url, score, genres } = movie;
  return (
    <Container>
      <StyledButton to={goBackLink.current || '/'}>Go Back</StyledButton>
      <FlexBox>
        <div>
          <img src={url} alt={title}></img>
        </div>
        <div>
          <Title>{title}</Title>
          <p>User Score: {score}</p>
          <Title>Overview</Title>
          <Text>{overview}</Text>
          <Title>Genres</Title>
          <List>
            {genres?.map(el => {
              return <li key={el}>{el}</li>;
            })}
          </List>
        </div>
      </FlexBox>
      <ListInfo>
        <Title>Additional Information</Title>
        <StyledLink to="cast" state={{ from: location }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </ListInfo>
      <hr />
      <Outlet />
    </Container>
  );
};
const Container = styled.div`
  margin: 10px 0 0 0;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px 0 20px 0;
  flex: 1 1 auto;
`;
const Text = styled.p`
  width: 670px;
`;

const Title =
  styled.h2 &&
  styled.h3`
    margin: 0;
  `;
const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
const ListInfo = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #22c1c3;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
const StyledButton = styled(NavLink)`
  padding: 5px;
  border-radius: 6px;
  text-decoration: none;
  border-color: lightskyblue;
  background-color: lightskyblue;
  color: black;

  &.active {
    background-color: #22c1c3;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;
export default MovieDetails;
