import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchByQuery } from 'services/api';
import styled from 'styled-components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const query = searchParams.get('query');
  const location = useLocation();

  console.log(location);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await fetchByQuery(query);
        setMovies(data);
      } catch (error) {
      } finally {
      }
    };
    fetchAll();
    console.log();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        ></input>
        <Search>Search</Search>
      </Form>
      <hr />
      <List>
        {movies?.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};
const Form = styled.form`
  display: flex;
  gap: 5px;
  padding: 5px 0 2px 0;
  justify-content: center;
`;
const Item = styled.li`
  line-height: 1.8;
`;
const List = styled.ul`
  list-style-type: disclosure-closed;
`;
const Search = styled.button`
  padding: 5px;
  border-radius: 6px;
  border-color: lightskyblue;
  background-color: lightskyblue;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #22c1c3;
    border-color: #22c1c3;
    color: white;
    cursor: pointer;
  }
`;
export default Movies;
