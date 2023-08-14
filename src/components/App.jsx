import { fetchMovieAll } from 'services/api';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const data = async () => {
      await fetchMovieAll();
    };
    fetchMovieAll();
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
