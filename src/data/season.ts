export type SeasonKey = "winter" | "spring-summer" | "fall";

export interface SeasonalConfig {
  key: SeasonKey;
  label: string;
  seasonHeadline: string;
  seasonKicker: string;
  seasonBody: string;
  ctaLabel: string;
  ctaHref: string;
  primaryCategories: ("kitchens" | "bathrooms" | "tile-stonework" | "interior" | "outdoor")[];
  featuredSlugs: string[];
  secondaryHeadline: string;
  secondaryBody: string;
}

/**
 * Change DEFAULT_SEASON to shift homepage and featured campaign emphasis
 * across seasons without redesigning pages or navigation.
 */
export const DEFAULT_SEASON: SeasonKey = "winter";

export const seasons: Record<SeasonKey, SeasonalConfig> = {
  winter: {
    key: "winter",
    label: "Winter Focus",
    seasonKicker: "Winter Project Window · Interior Craftsmanship",
    seasonHeadline: "Upgrade Your Kitchen This Winter.",
    seasonBody:
      "From hand-set kitchen backsplashes and precision tile flooring to shower tilework and interior stone accents, winter is the ideal season to upgrade the surfaces you live with every day.",
    ctaLabel: "Request a Winter Tile & Kitchen Estimate",
    ctaHref: "/kitchens",
    primaryCategories: ["kitchens", "tile-stonework", "bathrooms", "interior", "outdoor"],
    featuredSlugs: [
      "backsplash-installation",
      "tile-flooring",
      "bathroom-shower-tile",
      "custom-tile-stonework",
    ],
    secondaryHeadline: "Planning ahead for spring outdoor spaces.",
    secondaryBody:
      "While interior kitchens, bathrooms, and stonework take priority through the winter months, exterior patios, limestone walls, and landscape plans can be walked and scheduled ahead of the thaw.",
  },
  "spring-summer": {
    key: "spring-summer",
    label: "Spring & Summer",
    seasonKicker: "Outdoor Living Season · Exterior & Interior",
    seasonHeadline: "Built for Outdoor Living and Everyday Rooms.",
    seasonBody:
      "Warm weather opens the yard for limestone retaining walls, custom patios, fire gathering spaces, and layered Midwestern plantings—while kitchen and tile scopes remain open indoors.",
    ctaLabel: "Plan an Outdoor Project",
    ctaHref: "/outdoor-landscaping",
    primaryCategories: ["outdoor", "tile-stonework", "kitchens", "bathrooms", "interior"],
    featuredSlugs: [
      "patios-hardscaping-outdoor-living",
      "limestone-walls-stonework",
      "landscape-design-installation",
      "fire-features",
    ],
    secondaryHeadline: "Kitchens, bathrooms, and interior tile year-round.",
    secondaryBody:
      "Every exterior stone wall and patio shares the same material discipline as our indoor kitchen backsplashes, bathroom showers, and interior stonework.",
  },
  fall: {
    key: "fall",
    label: "Fall Focus",
    seasonKicker: "Autumn Transition · Stonework & Interiors",
    seasonHeadline: "Prepare Your Home Inside and Out for the Season Ahead.",
    seasonBody:
      "Autumn balances interior kitchen backsplashes, hearth stonework, and bathroom tile upgrades with fall planting, limestone wall reinforcement, and exterior finishing before winter arrives.",
    ctaLabel: "Schedule a Fall Walkthrough",
    ctaHref: "/contact",
    primaryCategories: ["tile-stonework", "kitchens", "interior", "bathrooms", "outdoor"],
    featuredSlugs: [
      "custom-tile-stonework",
      "backsplash-installation",
      "interior-stone-hearths",
      "limestone-walls-stonework",
    ],
    secondaryHeadline: "Seamless continuity from entryway to backyard.",
    secondaryBody:
      "One craftsman walking both the interior rooms and the grounds ensures materials, thresholds, and sightlines feel intentional across the entire property.",
  },
};
