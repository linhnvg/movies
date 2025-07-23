import { Credits, Image, SeasonDetails } from "@/tmdb/models"

import { api } from "../api"
import {
  TvSeasonsDetailsRequestParams,
  TvSeasonsImagesRequestParams,
} from "./types"

/**
 * Fetches detailed information about a specific TV season.
 *
 * @param {TvSeasonsDetailsRequestParams} params - The parameters for the TV season details request, including the TV series ID and the season number.
 * @returns {Promise<SeasonDetails>} A promise that resolves to the detailed information about the TV season.
 * @see https://developer.themoviedb.org/reference/tv-season-details
 */
const details = <T>({
  id,
  season,
  append,
  langs,
}: TvSeasonsDetailsRequestParams) => {
  const params_ = {
    append_to_response: append,
    include_image_language: langs,
  }

  return api.fetcher<SeasonDetails & T>(
    {
      endpoint: `tv/${id}/season/${season}`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/season/${season}`, JSON.stringify(params_)],
      },
    }
  )
}

const credits = ({ id, season }: TvSeasonsDetailsRequestParams) => {
  return api.fetcher<Credits>(
    {
      endpoint: `tv/${id}/season/${season}/credits`,
    },
    {
      next: {
        tags: [`tv/${id}/season/${season}/credits`],
      },
    }
  )
}

const aggregateCredits = ({ id, season }: TvSeasonsDetailsRequestParams) => {
  return api.fetcher<Credits>(
    {
      endpoint: `tv/${id}/season/${season}/aggregate_credits`,
    },
    {
      next: {
        tags: [`tv/${id}/season/${season}/aggregate_credits`],
      },
    }
  )
}

const images = ({ id, season, langs }: TvSeasonsImagesRequestParams) => {
  const params_ = {
    include_image_language: langs,
  }

  return api.fetcher<{ posters: Image[]; backdrops: Image[] }>(
    {
      endpoint: `tv/${id}/season/${season}/images`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/season/${season}/images`, JSON.stringify(params_)],
      },
    }
  )
}

export const tvSeasons = {
  details,
  credits,
  aggregateCredits,
  images,
}
