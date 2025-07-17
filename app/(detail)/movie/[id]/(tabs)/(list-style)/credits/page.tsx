import { tmdb } from "@/tmdb/api"

import { SeparatorLabel } from "@/components/ui/separator-label"
import { MediaCastCard } from "@/components/media-cast-card"
import { MediaCrewCard } from "@/components/media-crew-card"

interface DetailCreditsProps {
  params: Promise<{ id: string }>
}

export const metadata = {
  title: "Credits",
}

export default async function DetailCredits({ params }: DetailCreditsProps) {
  const { cast, crew } = await tmdb.movie.credits({ id: (await params).id })

  return (
    <section className="space-y-12">
      {cast.length > 0 ? (
        <div className="grid-list">
          {cast.map((cast) => (
            <MediaCastCard key={cast.credit_id} {...cast} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No cast</div>
      )}

      <SeparatorLabel>Crew</SeparatorLabel>

      {crew.length > 0 ? (
        <div className="grid-list">
          {crew.map((crew) => (
            <MediaCrewCard key={crew.credit_id} {...crew} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No crew</div>
      )}
    </section>
  )
}
