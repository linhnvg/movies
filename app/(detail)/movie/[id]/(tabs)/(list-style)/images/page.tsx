import { tmdb } from "@/tmdb/api"

import { MediaImages } from "@/components/media-images"

interface DetailImagesProps {
  params: Promise<{ id: string }>
}

export const metadata = {
  title: "Images",
}

export default async function DetailImages({ params }: DetailImagesProps) {
  const { posters, backdrops } = await tmdb.movie.images({
    id: (await params).id,
    langs: "en",
  })

  return <MediaImages posters={posters} backdrops={backdrops} />
}
