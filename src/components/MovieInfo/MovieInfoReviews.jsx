import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'services/api';
import styled from 'styled-components';

const MovieInfoReviews = () => {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await fetchReviewsByMovieId(id);

        setReview(data);
      } catch (error) {
      } finally {
      }
    };

    fetchAll();
  }, [id]);
  console.log(review);
  return (
    <List>
      {review?.map(({ author, content }, index) => {
        return (
          <li key={index}>
            <Info>
              <Title>{author}</Title>
              <Text> {content}</Text>
            </Info>
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Title = styled.h3`
  display: inline-block;
  margin: 0;
`;
const Text = styled.p`
  margin: 0;
  padding: 5px 0 0 0;
`;
export default MovieInfoReviews;
