import React, { useState, useEffect } from "react";
import MovieCardView from "../component/movies/MovieCardView";
import AxiosApi from "../api/AxiosApi";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #eee;
  gap: 8px;
  justify-content: start;
  margin: 20px 20px 40px;
`;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieList = async () => {
      try {
        const res = await AxiosApi.movieList();
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    movieList();
  }, []);

  return (
    <CardContainer>
      {movies.map((movie) => (
        <MovieCardView
          key={movie.rank}
          rank={movie.rank}
          image={movie.image}
          title={movie.title}
          score={movie.score}
          rate={movie.rate}
          reservation={movie.reservation}
          date={movie.date}
        />
      ))}
    </CardContainer>
  );
}

export default Movies;
