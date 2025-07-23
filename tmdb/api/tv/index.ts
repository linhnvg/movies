import {
  Credits,
  GetImagesResponse,
  GetVideosResponse,
  Review,
  TvShow,
  TvShowDetails,
  WatchProviders,
} from "@/tmdb/models"

import { api } from "../api"
import { ListResponse } from "../types"
import {
  TvCreditsRequestParams,
  TvDetailsRequestParams,
  TvImagesRequestParams,
  TvListRequestParams,
  TvProvidersRequestParams,
  TvRecommendationsRequestParams,
  TvReviewsRequestParams,
  TvSimilarRequestParams,
  TvVideosRequestParams,
} from "./types"

/**
 * Fetches a list of TV shows based on the specified criteria.
 *
 * @param {TvListRequestParams} params - The parameters for the TV list request, including list type, page, and region.
 * @returns {Promise<ListResponse<TvShow>>} A promise that resolves to the list of TV shows.
 * @see https://developer.themoviedb.org/reference/tv-series-airing-today
 * @see https://developer.themoviedb.org/reference/tv-series-on-the-air
 * @see https://developer.themoviedb.org/reference/tv-series-popular
 * @see https://developer.themoviedb.org/reference/tv-series-top-rated
 */
const list = ({ list, page = "1", region, timezone }: TvListRequestParams) => {
  const params_ = {
    page,
    region,
    timezone,
  }

  return api.fetcher<ListResponse<TvShow>>(
    {
      endpoint: `tv/${list}`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${list}`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches detailed information about a specific TV series.
 *
 * @param {TvDetailsRequestParams} params - The parameters for the TV details request, including the TV series ID and any additional data to append.
 * @returns {Promise<TvShowDetails>} A promise that resolves to the detailed information about the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-details
 */
const detail = <T>({ id, append }: TvDetailsRequestParams) => {
  const params_ = {
    append_to_response: append,
  }

  return api.fetcher<TvShowDetails & T>(
    {
      endpoint: `tv/${id}`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches the credits (cast and crew) for a specific TV series.
 *
 * @param {TvCreditsRequestParams} params - The parameters for the TV credits request, including the TV series ID.
 * @returns {Promise<Credits>} A promise that resolves to the credits for the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-credits
 */
const credits = ({ id }: TvCreditsRequestParams) => {
  return api.fetcher<Credits>(
    {
      endpoint: `tv/${id}/credits`,
    },
    {
      next: {
        tags: [`tv/${id}/credits`],
      },
    }
  )
}

/**
 * Fetches the aggregate credits (cast and crew) that have been added to a TV show.
 *
 * @param {TvCreditsRequestParams} params - The parameters for the TV credits request, including the TV series ID.
 * @returns {Promise<Credits>} A promise that resolves to the credits for the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-credits
 */
const aggregateCredits = ({ id }: TvCreditsRequestParams) => {
  return api.fetcher<Credits>(
    {
      endpoint: `tv/${id}/aggregate_credits`,
    },
    {
      next: {
        tags: [`tv/${id}/aggregate_credits`],
      },
    }
  )
}

/**
 * Fetches recommendations for a specific TV series.
 *
 * @param {TvRecommendationsRequestParams} params - The parameters for the TV recommendations request, including the TV series ID and page number.
 * @returns {Promise<ListResponse<TvShow>>} A promise that resolves to a list of recommended TV shows.
 * @see https://developer.themoviedb.org/reference/tv-series-recommendations
 */
const recommendations = ({ id, page }: TvRecommendationsRequestParams) => {
  const params_ = {
    page,
  }

  return api.fetcher<ListResponse<TvShow>>(
    {
      endpoint: `tv/${id}/recommendations`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/recommendations`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches TV shows similar to a specific TV series.
 *
 * @param {TvSimilarRequestParams} params - The parameters for the TV similar request, including the TV series ID and page number.
 * @returns {Promise<ListResponse<TvShow>>} A promise that resolves to a list of similar TV shows.
 * @see https://developer.themoviedb.org/reference/tv-series-similar
 */
const similar = ({ id, page }: TvSimilarRequestParams) => {
  const params_ = {
    page,
  }

  return api.fetcher<ListResponse<TvShow>>(
    {
      endpoint: `tv/${id}/similar`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/similar`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches images for a specific TV series.
 *
 * @param {TvImagesRequestParams} params - The parameters for the TV images request, including the TV series ID and languages for the images.
 * @returns {Promise<GetImagesResponse>} A promise that resolves to the images of the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-images
 */
const images = ({ id, langs }: TvImagesRequestParams) => {
  const params_ = {
    include_image_language: langs,
  }

  return api.fetcher<GetImagesResponse>(
    {
      endpoint: `tv/${id}/images`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/images`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches videos related to a specific TV series.
 *
 * @param {TvVideosRequestParams} params - The parameters for the TV videos request, including the TV series ID.
 * @returns {Promise<GetVideosResponse>} A promise that resolves to the videos of the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-videos
 */
const videos = ({ id }: TvVideosRequestParams) => {
  return api.fetcher<GetVideosResponse>(
    {
      endpoint: `tv/${id}/videos`,
    },
    {
      next: {
        tags: [`tv/${id}/videos`],
      },
    }
  )
}

/**
 * Fetches reviews for a specific TV series.
 *
 * @param {TvReviewsRequestParams} params - The parameters for the TV reviews request, including the TV series ID and page number.
 * @returns {Promise<ListResponse<Review>>} A promise that resolves to the reviews of the TV series.
 * @see https://developer.themoviedb.org/reference/tv-series-reviews
 */
const reviews = ({ id, page }: TvReviewsRequestParams) => {
  const params_ = {
    page,
  }

  return api.fetcher<ListResponse<Review>>(
    {
      endpoint: `tv/${id}/reviews`,
      params: params_,
    },
    {
      next: {
        tags: [`tv/${id}/reviews`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches providers for a specific TV Series.
 *
 * @param {TvProvidersRequestParams} params - The parameters for the movie reviews request, including the movie ID and page number.
 * @returns {Promise<WatchProviders>} A promise that resolves to a list of reviews for the movie.
 * @see https://developer.themoviedb.org/reference/tv-series-watch-providers
 */
const providers = ({ id, region, season }: TvProvidersRequestParams) => {
  const params_ = {
    watch_region: region,
  }

  return api.fetcher<WatchProviders>(
    {
      endpoint: `tv/${id}/${season ? `season/${season}/` : ""}watch/providers`,
      params: {
        watch_region: region,
      },
    },
    {
      next: {
        tags: [
          `tv/${id}/${season ? `season/${season}/` : ""}watch/providers`,
          JSON.stringify(params_),
        ],
      },
    }
  )
}

export const tv = {
  list,
  detail,
  credits,
  aggregateCredits,
  recommendations,
  similar,
  images,
  videos,
  reviews,
  providers,
}

export * from "./types"
