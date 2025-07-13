


export interface Film {
  filmId: number
  nameRu: string
  nameEn: string
  type: string
  year: string
  description: string
  filmLength: string
  countries: Country[]
  genres: Genre[]
  rating: string
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
}



export interface Country {
  country: string
}

export interface Genre {
  genre: string
}

export interface ResponseFilm {
  keyword: string
  pagesCount: number
  searchFilmsCountResult: number
  films: Film[]
}

export interface FilmStaff {
  staffId: number
  nameRu: string
  nameEn: string
  description: string
  posterUrl: string
  professionText: string
  professionKey: string
  }
  
  export interface FilmTrailer {
    url: string
    name: string
    site: string
  }

  export interface ResponseFilmTrailer {
    total: number
    items: FilmTrailer[]
  }

export interface FilmItem {
  kinopoiskId: number
  imdbId: string
  nameRu: string
  nameEn: string
  nameOriginal: string
  countries: Country[]
  genres: Genre[]
  ratingKinopoisk: number
  ratingImdb: number
  year: number
  type: string
  posterUrl: string
  posterUrlPreview: string
}

export interface FilmItem {
  kinopoiskId: number
  imdbId: string
  nameRu: string
  nameEn: string
  nameOriginal: string
  countries: Country[]
  genres: Genre[]
  ratingKinopoisk: number
  ratingImdb: number
  year: number
  type: string
  posterUrl: string
  posterUrlPreview: string
}
  
  export interface ResponseFilm {
    total: number
    totalPages: number
    items: FilmItem[]
  }

