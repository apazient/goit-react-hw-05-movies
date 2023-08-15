import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMovieAll } from 'services/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data, total_pages, page, total_results } =
          await fetchMovieAll();
        setMovie(data);
      } catch (error) {
      } finally {
      }
    };

    fetchAll();
  }, []);

  return (
    <ul>
      {movie?.map(({ id, title, img, date }) => {
        return (
          <Item key={id}>
            <MovieImg src={img} alt="tirle" />
            <Link to={`movies/${id}`}>{title}</Link>
          </Item>
        );
      })}
    </ul>
  );
};

const MovieImg = styled.img`
  width: 100px;
  height: 150px;
  padding: 5px;
`;
const Item = styled.li`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  align-items: center;
`;
export default Home;
