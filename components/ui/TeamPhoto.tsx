import Image from "next/image";

type TeamPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/** Portrait frame — full photo visible, anchored from top so faces are not cropped. */
export function TeamPhoto({ src, alt, priority }: TeamPhotoProps) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-contain object-top"
      />
    </div>
  );
}
