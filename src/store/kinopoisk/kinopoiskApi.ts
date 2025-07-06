import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";



const baseQuery = fetchBaseQuery({
  baseUrl:'https://api.kinopoisk.dev/',
  prepareHeaders:(headers) => {
    const apiKey = 'JE1K7AJ-FK8M7TQ-KNA791V-RZG87Y3'
    if (apiKey) {
      headers.set('X-API-KEY', apiKey)
    }
    return headers
  }
})

export const kinopoiskApi = createApi({
  reducerPath:'kinopoisk/api',
  baseQuery:baseQuery,
  endpoints: (build) => ({
    getMovies: build.query<any, string>({
      query:() => `movie/random` 
    })
  })
})







export const {useGetMoviesQuery} = kinopoiskApi