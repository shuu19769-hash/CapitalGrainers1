import Image from "next/image";

type TeamPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Fixed-height portrait frame so every team card aligns in the grid. */
export function TeamPhoto({ src, alt, priority }: TeamPhotoProps) {
  const frameClass =
    "relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-sand";

  if (!src) {
    return (
      <div className={`${frameClass} flex items-center justify-center`}>
        <span className="text-4xl font-bold tracking-wide text-copper/35" aria-hidden>
          {initialsFromName(alt)}
        </span>
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-top"
      />
    </div>
  );
}
