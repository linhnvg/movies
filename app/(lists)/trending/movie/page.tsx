import { pages } from "@/config"

import { TrendList } from "@/components/trend-list"

interface TrendingPageProps {
  searchParams?: Promise<Record<string, string>>
}

export async function generateMetadata() {
  return {
    title: "Trending Movies",
    description: pages.trending.movie.description,
  }
}

export default async function TrendingPage({
  searchParams,
}: TrendingPageProps) {
  return (
    <TrendList
      type="movie"
      time="day"
      title="Trending Movies"
      description={pages.trending.movie.description}
      page={(await searchParams)?.page ?? "1"}
    />
  )
}
