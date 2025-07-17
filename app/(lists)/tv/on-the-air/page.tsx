import { pages } from "@/config"

import { TvList } from "@/components/tv-list"

interface ListPageProps {
  searchParams?: Promise<Record<string, string>>
}

export async function generateMetadata() {
  return {
    title: "On The Air TV Shows",
    description: pages.tv.onTheAir.description,
  }
}

export default async function OnTheAir({ searchParams }: ListPageProps) {
  return (
    <TvList
      list="on_the_air"
      page={(await searchParams)?.page ?? "1"}
      title={pages.tv.onTheAir.title}
      description={pages.tv.onTheAir.description}
    />
  )
}
