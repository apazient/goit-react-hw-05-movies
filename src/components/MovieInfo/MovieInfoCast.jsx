import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCastByMovieId } from 'services/api';
import styled from 'styled-components';

const MovieInfoCast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await fetchCastByMovieId(id);
        console.log(data);
        setActors(data);
      } catch (error) {
      } finally {
      }
    };

    fetchAll();
  }, [id]);

  return (
    <FlexBox>
      <List>
        {actors?.map(({ id, name, url, character }) => {
          return (
            <Item key={id}>
              <Image src={url} alt={name}></Image>
              <Info>
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </Info>
            </Item>
          );
        })}
      </List>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;

  padding: 20px 0 20px 0;
  flex: 1 1 auto;
`;
const Image = styled.img`
  heigth: 100px;
  width: 150px;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  display: block;
`;
const Item = styled.li`
  width: 150px;
`;
export default MovieInfoCast;
