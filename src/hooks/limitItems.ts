import type { FilmStaff } from "../models/models";
import { useGetFilmStaffQuery } from "../store/kinopoisk/kinopoiskApi"

export const useLimitedItemsQuery = (limit:number,filmId:number) => {
  const {data} = useGetFilmStaffQuery(filmId);
  return (
    data?.slice(1,limit)
  )

}