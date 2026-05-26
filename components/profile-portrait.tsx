import Image from "next/image";
import { User } from "lucide-react";

type ProfilePortraitProps = {
  name: string;
  initials: string;
  imageUrl?: string;
  caption?: string;
};

export function ProfilePortrait({
  name,
  initials,
  imageUrl,
  caption = "Ebube Epistle Onunwor",
}: ProfilePortraitProps) {
  return (
    <aside className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-linear-to-br from-primary/20 via-secondary/15 to-accent/20 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="relative h-52 w-52 overflow-hidden rounded-full border border-border bg-card/90 shadow-lg shadow-primary/20 backdrop-blur">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name} profile image`}
            fill
            className="object-cover"
            sizes="176px"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/15 via-background to-secondary/15">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-heading text-primary">
                {initials}
              </span>
              <User className="mt-1 size-5 text-primary/80" />
            </div>
          </div>
        )}
      </div>

      <p className="absolute bottom-4 text-xs text-muted-foreground">
        {caption}
      </p>
    </aside>
  );
}
