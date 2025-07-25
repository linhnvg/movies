"use client"

import Image from "next/image"
import { Image as TmdbImage } from "@/tmdb/models"
import { tmdbImage } from "@/tmdb/utils"
import { Download, Expand, Link } from "lucide-react"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "./ui/button"

interface MediaImagesProps {
  posters?: TmdbImage[]
  backdrops?: TmdbImage[]
  profiles?: TmdbImage[]
  logos?: TmdbImage[]
}

export const MediaImages: React.FC<MediaImagesProps> = ({
  posters = [],
  backdrops = [],
  profiles = [],
  logos = [],
}) => {
  const images = [...posters, ...backdrops, ...profiles, ...logos]
  const [copiedText, copy] = useCopyToClipboard()

  if (!images.length) return <div className="empty-box">No images</div>

  return (
    <div className="grid-list items-center gap-4">
      {images.map(({ file_path, aspect_ratio }) => (
        <Dialog key={file_path}>
          <DialogTrigger>
            <div
              key={file_path}
              className={cn(
                aspect_ratio > 1
                  ? "col-span-2 aspect-video lg:col-span-3 xl:col-span-2"
                  : "aspect-poster",
                "group relative block transition"
              )}
            >
              <Image
                src={tmdbImage.url(file_path, "w780")}
                alt={file_path}
                className="size-full rounded-md border"
                unoptimized
                fill
              />

              <div className="overlay grid place-items-center opacity-0 transition group-hover:opacity-100">
                <Expand />
              </div>
            </div>
          </DialogTrigger>

          <DialogContent
            className={cn(aspect_ratio > 1 && "max-w-(--breakpoint-xl)")}
          >
            <div
              className={cn(
                aspect_ratio > 1 ? "aspect-video" : "aspect-poster"
              )}
            >
              <Image
                src={tmdbImage.url(file_path, "original")}
                alt={file_path}
                className="rounded-md border bg-muted"
                unoptimized
                fill
              />
            </div>

            <div className="absolute bottom-0 left-0 flex h-32 w-full items-end justify-end space-x-2 bg-linear-to-t from-background to-transparent pb-4 pr-4">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copy(tmdbImage.url(file_path, "w780"))}
              >
                <Link className="size-4" />
                <span className="sr-only md:not-sr-only md:ml-2">
                  {copiedText ? "Copied!" : "Copy link"}
                </span>
              </Button>

              <Button asChild size="sm" variant="ghost">
                <a
                  href={tmdbImage.url(file_path, "original")}
                  download
                  target="_blank"
                >
                  <Download className="size-4" />
                  <span className="sr-only md:not-sr-only md:ml-2">Save</span>
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
