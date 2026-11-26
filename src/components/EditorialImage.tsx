import { ImageOff } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface EditorialImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
  label?: string;
  sizes?: string;
  objectPositionClass?: string;
}

/**
 * Tiny color-matched inline SVG blur-up placeholders (<350 bytes each)
 * keyed by asset filename fragment so every category/portfolio card
 * renders an immediate warm architectural tone with zero layout shift.
 */
function getLqipDataUri(src: string): string {
  let c1 = "#E5DFD3";
  let c2 = "#C8BFB0";
  let c3 = "#9C9282";

  if (src.includes("midwest_backsplash_showcase")) {
    c1 = "#EDE9DF";
    c2 = "#B7AC96";
    c3 = "#5C4D3B";
  } else if (src.includes("midwest_kitchen_backsplash")) {
    c1 = "#EDE8DD";
    c2 = "#CBBFA9";
    c3 = "#736350";
  } else if (src.includes("midwest_decorative_backsplash")) {
    c1 = "#E6E3DB";
    c2 = "#B3B8AC";
    c3 = "#6E5A46";
  } else if (src.includes("midwest_shaker_cabinets")) {
    c1 = "#EFECE4";
    c2 = "#C7B8A3";
    c3 = "#7A6A58";
  } else if (src.includes("midwest_quartz_countertops")) {
    c1 = "#F2EFEA";
    c2 = "#C9C6C0";
    c3 = "#78756E";
  } else if (src.includes("midwest_kitchen_island_layout")) {
    c1 = "#EAE5DC";
    c2 = "#A88B6E";
    c3 = "#4B3A2C";
  } else if (src.includes("midwest_full_kitchen_remodel")) {
    c1 = "#EEF0EE";
    c2 = "#B8A690";
    c3 = "#3A4E61";
  } else if (src.includes("midwest_kitchen_pendants_trim")) {
    c1 = "#ECEAE4";
    c2 = "#9B988F";
    c3 = "#243547";
  } else if (src.includes("midwest_bathroom_shower_tile")) {
    c1 = "#E5E2DB";
    c2 = "#B8B0A2";
    c3 = "#7E6F5E";
  } else if (src.includes("midwest_bathroom_vanity_tile")) {
    c1 = "#EAE9E3";
    c2 = "#8FA09A";
    c3 = "#556862";
  } else if (src.includes("midwest_tile_flooring")) {
    c1 = "#DDD6C8";
    c2 = "#7C7D7E";
    c3 = "#3A3C3E";
  } else if (src.includes("midwest_stonework_detail")) {
    c1 = "#DFDDD6";
    c2 = "#A5A299";
    c3 = "#54585A";
  } else if (src.includes("midwest_pebble_cobble_stone")) {
    c1 = "#DCD5C7";
    c2 = "#9E8E78";
    c3 = "#554D43";
  } else if (src.includes("midwest_living_stone_hearth")) {
    c1 = "#EAE3D7";
    c2 = "#B89A76";
    c3 = "#5C4E41";
  } else if (src.includes("midwest_interior_flooring_trim")) {
    c1 = "#E6DDD0";
    c2 = "#BA9B77";
    c3 = "#5B4330";
  } else if (src.includes("midwest_patio_door_transition")) {
    c1 = "#E5E2DA";
    c2 = "#B88B72";
    c3 = "#4F6B43";
  } else if (src.includes("midwest_limestone_retaining_wall")) {
    c1 = "#DFDDD4";
    c2 = "#A69B7E";
    c3 = "#4A5C3B";
  } else if (src.includes("midwest_patio_limestone_yard")) {
    c1 = "#D8D6C8";
    c2 = "#7E6B55";
    c3 = "#3F4C38";
  } else if (src.includes("midwest_front_yard_landscaping")) {
    c1 = "#E2E0D6";
    c2 = "#A26B4D";
    c3 = "#4D633A";
  } else if (src.includes("midwest_backyard_fire_pit")) {
    c1 = "#E4C9A5";
    c2 = "#8C7D68";
    c3 = "#3D4435";
  }

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${c1}'/><stop offset='55%' stop-color='${c2}'/><stop offset='100%' stop-color='${c3}'/></linearGradient></defs><rect width='16' height='12' fill='url(#g)'/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function getResponsiveWebpSrcSet(src: string): string | null {
  if (!src.startsWith("/src/assets/images/") || !src.endsWith(".jpg")) {
    return null;
  }
  const stem = src.slice(0, -4);
  return `${stem}_640w.webp 640w, ${stem}_1100w.webp 1100w`;
}

export function EditorialImage({
  src,
  alt,
  aspectClass = "aspect-[4/3]",
  className = "",
  priority = false,
  label,
  sizes = "(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 560px",
  objectPositionClass = "object-center",
}: EditorialImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Reset image status when src changes (e.g. seasonal focus switch)
  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    if (priority) {
      setInView(true);
    }
  }, [src, priority]);

  // IntersectionObserver with 200px vertical rootMargin for crisp mobile scrolling without eager bandwidth waste
  useEffect(() => {
    if (priority || inView) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, inView]);

  // Immediately resolve cached images on mount without blur delay
  const setImgRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const lqipUri = getLqipDataUri(src);
  const webpSrcSet = getResponsiveWebpSrcSet(src);
  const intrinsicHeight = aspectClass.includes("16/10") || aspectClass.includes("16/9") ? 750 : 900;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#EFECE6] ${aspectClass} ${className}`}
    >
      {/* Blur-up LQIP backdrop rendered immediately with zero layout shift */}
      {!failed && (
        <div
          aria-hidden="true"
          style={{ backgroundImage: `url("${lqipUri}")` }}
          className={`absolute inset-0 scale-110 bg-cover bg-center blur-xl transition-opacity duration-300 ease-out ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {!failed && inView ? (
        <picture className="block h-full w-full">
          {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
          <img
            ref={setImgRef}
            src={src}
            alt={alt}
            width={1200}
            height={intrinsicHeight}
            sizes={sizes}
            referrerPolicy="no-referrer"
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`relative h-full w-full object-cover ${objectPositionClass} transition-[opacity,filter,transform] duration-300 ease-out sm:group-hover:scale-[1.02] ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          />
        </picture>
      ) : null}

      {failed && (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EFECE6] to-[#E2DDD4] p-6 text-center text-[#57534C]">
          <ImageOff className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
          <p className="max-w-xs text-xs leading-relaxed">{alt}</p>
        </div>
      )}

      {label && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-3 pt-8">
          <p className="text-xs font-medium tracking-wide text-[#F8F6F2]/95">{label}</p>
        </div>
      )}
    </div>
  );
}
