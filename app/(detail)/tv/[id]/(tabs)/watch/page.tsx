import { MediaWatchProviders } from "@/components/media-watch-providers"

interface DetailWatchProps {
  params: Promise<{ id: string }>
}

export const metadata = {
  title: "Watch",
}

export default async function DetailWatch({ params }: DetailWatchProps) {
  return <MediaWatchProviders id={(await params).id} type="tv" />
}
