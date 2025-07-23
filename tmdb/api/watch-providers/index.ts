import { api } from "@/tmdb/api/api"
import { ListResponse, WatchProvidersRequestParams } from "@/tmdb/api/types"
import { GetAvailableRegionsResponse, WatchProvider } from "@/tmdb/models"

/**
 * Fetches the available regions for watch providers.
 *
 * @returns {Promise<GetAvailableRegionsResponse>} A promise that resolves to a list of reviews for the movie.
 * @see https://developer.themoviedb.org/reference/watch-providers-available-regions
 */
const regions = () => {
  return api.fetcher<GetAvailableRegionsResponse>(
    {
      endpoint: `watch/providers/regions`,
    },
    {
      next: {
        tags: [`watch/providers/regions`],
      },
    }
  )
}

/**
 * Fetches the list of Movie watch providers based on the specified region.
 *
 * @param {WatchProvidersRequestParams} params - The request parameters.
 * @returns {Promise<ListResponse<WatchProvider>>} - The list of Movie watch providers.
 */
const movie = ({ region }: WatchProvidersRequestParams) => {
  const params_ = {
    watch_region: region,
  }

  return api.fetcher<ListResponse<WatchProvider>>(
    {
      endpoint: `watch/providers/movie`,
      params: params_,
    },
    {
      next: {
        tags: [`watch/providers/movie`, JSON.stringify(params_)],
      },
    }
  )
}

/**
 * Fetches the list of TV watch providers based on the specified region.
 *
 * @param {WatchProvidersRequestParams} params - The request parameters.
 * @returns {Promise<ListResponse<WatchProvider>>} - The list of TV watch providers.
 */
const tv = ({ region }: WatchProvidersRequestParams) => {
  const params_ = {
    watch_region: region,
  }

  return api.fetcher<ListResponse<WatchProvider>>(
    {
      endpoint: `watch/providers/tv`,
      params: {
        watch_region: region,
      },
    },
    {
      next: {
        tags: [`watch/providers/tv`, JSON.stringify(params_)],
      },
    }
  )
}

export const watchProviders = {
  regions,
  movie,
  tv,
}
