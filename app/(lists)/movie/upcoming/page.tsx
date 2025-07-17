import { pages } from "@/config"

import { MovieList } from "@/components/movie-list"

interface ListPageProps {
  searchParams?: Promise<Record<string, string>>
}

export async function generateMetadata() {
  return {
    title: "Upcoming Movies",
    description: pages.movie.upcoming.description,
  }
}

export default async function Upcoming({ searchParams }: ListPageProps) {
  return (
    <MovieList
      list="upcoming"
      page={(await searchParams)?.page ?? "1"}
      title={pages.movie.upcoming.title}
      description={pages.movie.upcoming.description}
    />
  )
}
