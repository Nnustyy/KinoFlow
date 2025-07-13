import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film, FilmStaff, FilmTrailer, ResponseFilm, ResponseFilmTrailer } from "../../models/models";


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
      transformResponse:(response:ResponseFilm) => response.films
    }),
    getFilmStaff: build.query<FilmStaff[], number>({
      query:(filmId:number) => ({
        url:'api/v1/staff',
        params:{
          filmId:filmId
        }
      })
    }),
    getFilmTrailer: build.query<FilmTrailer[], number> ({
      query:(filmId:number) => ({
        url: `api/v2.2/films/${filmId}/videos`,
        params:{
          id:filmId
        }
      }),
      transformResponse:(response:ResponseFilmTrailer) => response.items
    }),
    getFilms: build.query<Film[],number> ({
      query:(year:number) => ({
        url:'api/v2.2/films',
        params:{
          yearFrom: year
        }
      }),
      transformResponse:(response:ResponseFilm) => response.items
    })
  })
})





export const {useSearchFilmsQuery,useGetFilmStaffQuery,useGetFilmTrailerQuery,useGetFilmsQuery} = kinopoiskApi