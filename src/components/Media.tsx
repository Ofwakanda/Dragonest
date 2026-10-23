import Image from "next/image";
import type { PhotoSlot } from "@/config/site";
import { HeroInteractiveGraphic } from "./illustrations/HeroInteractiveGraphic";

/** Shows the configured photo if there is one, otherwise the interactive graphic or illustration. */
export function Media({ photo, illustration, priority = false }: { photo?: PhotoSlot; illustration: React.ReactNode; priority?: boolean }) {
  if (photo?.src) {
    return (
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
          <Image src={photo.src} alt={photo.alt ?? ""} fill priority={priority} sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        </div>
        {photo.credit && <figcaption className="mt-2 text-sm text-muted">{photo.credit}</figcaption>}
      </figure>
    );
  }
  return <div className="w-full">{illustration ?? <HeroInteractiveGraphic />}</div>;
}
