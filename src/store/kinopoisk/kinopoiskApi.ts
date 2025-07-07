import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film } from "../../models/models";



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
    searchUsers:build.query<Film[], string> ({
      query:(search:string) => ({
        url:`v1.4/movie/search`,
        params: {
          query:search,
          page:1,
          limit:10
        }
      }),
      transformResponse:(response:any) => response.docs
    })
  })
})






export const {useSearchUsersQuery} = kinopoiskApi
// export const {useGetMoviesBySearchQuery} = kinopoiskApi
// export const prefetchMovies = kinopoiskApi.endpoints.getMoviesBySearch.initiate