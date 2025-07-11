
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

export interface FilmStaff {
  staffId: number
  nameRu: string
  nameEn: string
  description: string
  posterUrl: string
  professionText: string
  professionKey: string
  }
  