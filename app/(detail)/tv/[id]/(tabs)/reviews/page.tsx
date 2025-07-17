import { tmdb } from "@/tmdb/api"

import { ListPagination } from "@/components/list-pagination"
import { UserReviewCard } from "@/components/user-review-card"

interface DetailReviewsProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page: string }>
}

export const metadata = {
  title: "Reviews",
}

export default async function DetailReviews({
  params,
  searchParams,
}: DetailReviewsProps) {
  const { results, page, total_pages } = await tmdb.tv.reviews({
    id: (await params).id,
    page: (await searchParams).page,
  })

  if (!results.length) return <div className="empty-box">No reviews</div>

  return (
    <section className="space-y-8">
      {results.map((review) => (
        <UserReviewCard key={review.id} review={review} />
      ))}

      <ListPagination currentPage={page} totalPages={total_pages} />
    </section>
  )
}
