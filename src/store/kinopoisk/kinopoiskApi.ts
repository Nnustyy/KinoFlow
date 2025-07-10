import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film } from "../../models/models";


const baseQuery = fetchBaseQuery({
  baseUrl:'https://kinopoiskapiunofficial.tech/',
  prepareHeaders:(headers) => {
    const apiKey = '47c5ae18-8e84-4e81-89f0-247648676722'
    if(apiKey) {
      headers.set('X-API-KEY',apiKey)
    }
    return headers
  }
})

export const kinopoiskApi = createApi({
  reducerPath:'kinopoisk/api',
  baseQuery:baseQuery,
  endpoints:(build) => ({
    searchFilms: build.query<Film[], string> ({
      query:(search:string) => ({
        url:'api/v2.1/films/search-by-keyword',
        params: {
          keyword:search
        }
      }),
      transformResponse:(response:any) => response.films
    }),
    getFilmById: build.query<Film, string> ({
      query:(id:string) => ({
        url:`api/v2.1/films/${id}`,
        params: {
          id:id
        }
      })
    })
    
  })
})





export const {useSearchFilmsQuery,useGetFilmByIdQuery} = kinopoiskApi