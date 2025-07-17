import { tmdb } from "@/tmdb/api"

import { MediaVideos } from "@/components/media-videos"

interface VideosProps {
  params: Promise<{ id: string }>
}

export const metadata = {
  title: "Videos",
}

export default async function DetailVideos({ params }: VideosProps) {
  const { results: videos } = await tmdb.tv.videos({
    id: (await params).id,
  })

  return <MediaVideos videos={videos} />
}
