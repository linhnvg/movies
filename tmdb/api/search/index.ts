import {
  MovieWithMediaType,
  PersonWithMediaType,
  TvShowWithMediaType,
} from "@/tmdb/models"

import { api } from "../api"
import { ListResponse } from "../types"
import { SearchRequestParams } from "./types"

/**
 * Fetches a list of movies, TV shows, and people based on the specified search query.
 *
 * @param {SearchRequestParams} params - The parameters for the search request, including the search query, adult content filter, and page number.
 * @returns {Promise<ListResponse<MovieWithMediaType | TvShowWithMediaType | PersonWithMediaType>>} A promise that resolves to the list of movies, TV shows, and people.
 * @see https://developers.themoviedb.org/3/search-multi
 */
const multi = async ({
  query,
  adult = false,
  page = "1",
}: SearchRequestParams) => {
  const params_ = {
    query,
    page,
    include_adult: String(adult),
  }
  return api.fetcher<
    ListResponse<MovieWithMediaType | TvShowWithMediaType | PersonWithMediaType>
  >(
    {
      endpoint: "/search/multi",
      params: params_,
    },
    {
      next: {
        tags: [`search/multi`, JSON.stringify(params_)],
      },
    }
  )
}

export const search = {
  multi,
}
