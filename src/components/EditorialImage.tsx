import { useState } from "react";
import { ImageOff } from "lucide-react";

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
  label?: string;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = "aspect-[4/3]",
  className = "",
  priority = false,
  label,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EFECE6] ${aspectClass} ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EFECE6] to-[#E2DDD4] p-6 text-center text-[#57534C]">
          <ImageOff className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
          <p className="max-w-xs text-xs leading-relaxed">{alt}</p>
        </div>
      )}
      {label && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-3 pt-8">
          <p className="text-xs font-medium tracking-wide text-[#F8F6F2]/95">{label}</p>
        </div>
      )}
    </div>
  );
}
