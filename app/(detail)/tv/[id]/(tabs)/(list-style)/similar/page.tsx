import { tmdb } from "@/tmdb/api"

import { ListPagination } from "@/components/list-pagination"
import { TvCard } from "@/components/tv-card"

interface DetailSimilarProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page: string }>
}

export const metadata = {
  title: "Similar",
}

export default async function DetailSimilar({
  params,
  searchParams,
}: DetailSimilarProps) {
  const {
    results: tvShows,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.tv.similar({
    id: (await params).id,
    page: (await searchParams).page,
  })

  if (!tvShows?.length) {
    return <div className="empty-box">No recommendations</div>
  }

  return (
    <div className="space-y-4">
      <section className="grid-list">
        {tvShows.map((tv) => (
          <TvCard key={tv.id} {...tv} />
        ))}
      </section>
      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
