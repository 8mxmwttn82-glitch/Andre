export const site = {
  name: "Andre Preer",
  person: "Andre M. Preer II",
  phoneDisplay: "309-431-1805",
  phoneTel: "+13094311805",
  altPhoneDisplay: "702-232-6150",
  altPhoneTel: "+17022326150",
  area: "Springfield & Central Illinois",
  locality: "Springfield",
  region: "IL",
  tagline: "Exceptional Craftsmanship. Inside and Out.",
  supportingStatement:
    "Specializing in kitchen backsplashes, tile flooring, bathroom tile, custom natural stonework, and outdoor hardscaping—Andre Preer brings steady residential craftsmanship to every surface in and around your home.",
};

export type CategoryId =
  | "kitchens"
  | "bathrooms"
  | "tile-stonework"
  | "interior"
  | "outdoor";

export interface CategoryInfo {
  id: CategoryId;
  slug: string;
  route: string;
  name: string;
  shortName: string;
  kicker: string;
  headline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  scopeNote: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "kitchens",
    slug: "kitchens",
    route: "/kitchens",
    name: "Kitchens & Backsplashes",
    shortName: "Kitchens",
    kicker: "Winter Priority · Kitchen Craftsmanship",
    headline: "Kitchens and backsplashes built with crisp lines and lasting materials.",
    description:
      "Tile and natural stone backsplashes, cabinet updates, countertops, islands, and lighting finishes planned as one cohesive kitchen scope.",
    heroImage: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    heroAlt:
      "Contemporary kitchen inspiration featuring handmade ceramic tile backsplash, white oak cabinetry, and honed quartzite countertops.",
    scopeNote:
      "All kitchen installations are scoped on site so tile layouts, outlet placements, cabinet lines, and countertop edges align cleanly.",
  },
  {
    id: "bathrooms",
    slug: "bathrooms",
    route: "/bathrooms",
    name: "Bathroom Tile & Stone",
    shortName: "Bathrooms",
    kicker: "Shower Tile, Floors & Stone Surfaces",
    headline: "Bathroom shower tile, tile flooring, and natural stone vanity accents.",
    description:
      "Precision shower surround tile, river stone floor mosaics, porcelain and stone bathroom flooring, and vanity tile backsplashes.",
    heroImage: "/src/assets/images/bathroom_shower_tile_1795691087587.jpg",
    heroAlt:
      "Bathroom inspiration showing limestone-look porcelain shower tile, natural river stone floor mosaic, and white oak vanity.",
    scopeNote:
      "Andre specializes in tile, natural stone, and finish surfaces—not plumbing. Existing plumbing rough-ins and valves must be handled by a licensed plumber prior to tile installation.",
  },
  {
    id: "tile-stonework",
    slug: "tile-stonework",
    route: "/tile-stonework",
    name: "Tile & Stonework",
    shortName: "Tile & Stone",
    kicker: "Tile Flooring, Backsplashes & Masonry",
    headline: "Precision tile flooring, decorative tile, and custom natural stonework.",
    description:
      "Porcelain and stone tile flooring, decorative ceramic and stone backsplashes, interior stone hearths, limestone walls, and bespoke cobble or pebble work.",
    heroImage: "/src/assets/images/tile_stonework_craft_1795691089671.jpg",
    heroAlt:
      "Architectural detail inspiration showing chiseled limestone masonry meeting precision herringbone ceramic tile.",
    scopeNote:
      "Every tile floor, wall, and stone layout is flat-prepped and dry-planned around corners, thresholds, and natural stone variation.",
  },
  {
    id: "interior",
    slug: "interior",
    route: "/interior-improvements",
    name: "Interior Tile & Finish Upgrades",
    shortName: "Interiors",
    kicker: "Tile Flooring, Hearths & Interior Surfaces",
    headline: "Tile flooring, stone hearths, and finish upgrades throughout your home.",
    description:
      "Kitchen, mudroom, and living-area tile flooring, natural stone fireplace surrounds, finish carpentry trim, and clean indoor-to-outdoor transitions.",
    heroImage: "/src/assets/images/interior_improvement_space_1795691088141.jpg",
    heroAlt:
      "Sunlit residential living and dining space inspiration featuring custom stone fireplace surround and wide-plank flooring.",
    scopeNote:
      "Andre focuses on tile, stonework, cabinetry/surface updates, and finish improvements—not plumbing or electrical rough-ins. Exact scope is confirmed on walkthrough.",
  },
  {
    id: "outdoor",
    slug: "outdoor",
    route: "/outdoor-landscaping",
    name: "Outdoor & Landscaping",
    shortName: "Outdoor",
    kicker: "Grounds, Stone & Outdoor Living",
    headline: "Patios, limestone walls, fire gathering spaces, and enduring Midwest landscapes.",
    description:
      "Integrated landscape design and installation, hardscaping, limestone retaining walls, trees, shrubs, roses, and fire features.",
    heroImage: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    heroAlt:
      "Midwestern residential backyard inspiration at dusk with natural limestone patio, retaining wall, and stone fire pit.",
    scopeNote:
      "Scaled to real Central Illinois lots—built for freeze-thaw durability, natural drainage, and multi-season structure.",
  },
];

export interface ServiceItem {
  slug: string;
  category: CategoryId;
  name: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  h1: string;
  problem: string;
  approach: string;
  benefits: string[];
  typicalScopes: string[];
  image: string;
  imageAlt: string;
  related: string[];
  winterPriority?: boolean;
  requiresScopeConfirmation?: boolean;
}

export const services: ServiceItem[] = [
  {
    slug: "backsplash-installation",
    category: "kitchens",
    winterPriority: true,
    name: "Kitchen Backsplash Installation",
    seoTitle: "Kitchen Backsplash Installation in Springfield, IL | Andre Preer",
    seoDescription:
      "Custom kitchen backsplash installation in Springfield and Central Illinois. Precision ceramic, zellige, and tile backsplashes aligned to cabinets and counters.",
    summary:
      "The focal wall between countertop and cabinetry—laid out so edges, outlets, and transitions finish cleanly.",
    h1: "Kitchen Backsplash Installation",
    problem:
      "A backsplash treated as an afterthought often ends abruptly past upper cabinets, crowds outlets awkwardly, or misses the sightline behind the range.",
    approach:
      "Andre maps the tile layout before mixing mortar—aligning grout joints to hood centers, window trim, and countertop planes so the finished surface anchors the entire kitchen.",
    benefits: [
      "Clean terminations at open wall edges, window casings, and upper cabinet returns.",
      "Careful layout around electrical outlets, range hoods, and under-cabinet lighting.",
      "Can be booked as a focused 2-to-4-day winter upgrade or paired with countertops and cabinetry.",
    ],
    typicalScopes: [
      "Full-height ceramic or handmade tile behind range and hood",
      "Classic subway, stacked, or herringbone kitchen backsplashes",
      "Replacing dated laminate upstands with full-wall architectural tile",
    ],
    image: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    imageAlt: "Handmade square ceramic tile backsplash in a modern white oak and charcoal kitchen.",
    related: ["decorative-stone-backsplashes", "countertops", "cabinets"],
  },
  {
    slug: "decorative-stone-backsplashes",
    category: "kitchens",
    winterPriority: true,
    name: "Decorative Tile & Natural Stone Backsplashes",
    seoTitle: "Decorative Tile & Natural Stone Backsplashes in Springfield, IL | Andre Preer",
    seoDescription:
      "Decorative pattern tile and natural stone backsplashes in Springfield, IL. Travertine, marble mosaic, herringbone, and artisan ceramic installations.",
    summary:
      "Patterned ceramic, glazed terracotta, and natural stone backsplashes installed with tight, balanced geometry.",
    h1: "Decorative Tile & Natural Stone Backsplashes",
    problem:
      "Specialty tile patterns and natural stone slabs reveal every slight measurement error along corners, outlets, and uneven drywall.",
    approach:
      "Substrates are flattened and prepped carefully before setting, natural stone pieces are dry-blended across boxes for tonal balance, and proper sealers protect porous stone surfaces.",
    benefits: [
      "Box-to-box color and veining blending for natural marble, limestone, and travertine.",
      "Balanced herringbone, chevron, or framed range-niche focal layouts.",
      "Appropriate sealing and grout selection tailored to cooking zones.",
    ],
    typicalScopes: [
      "Framed decorative tile medallion or patterned inset behind a range",
      "Honed marble, limestone, or split-face natural stone backsplashes",
      "Herringbone and vertical stacked tile feature walls",
    ],
    image: "/src/assets/images/kitchen_stone_island_1795691086675.jpg",
    imageAlt: "Decorative patterned tile backsplash framed cleanly behind a residential kitchen range.",
    related: ["backsplash-installation", "custom-tile-stonework", "countertops"],
  },
  {
    slug: "cabinets",
    category: "kitchens",
    name: "Cabinets — New & Refacing",
    seoTitle: "Kitchen Cabinets & Refacing in Springfield, IL | Andre Preer",
    seoDescription:
      "New kitchen cabinetry and cabinet refacing in Springfield and Central Illinois, coordinated with countertops and backsplash tile.",
    summary:
      "Full cabinet replacements when layout changes are needed, or cabinet refacing when solid existing boxes deserve a fresh architectural face.",
    h1: "Cabinets, New Installation & Refacing",
    problem:
      "Tearing out sound cabinet boxes wastes budget when only doors and finishes are dated—yet refacing worn-out boxes fails to fix broken storage.",
    approach:
      "Andre evaluates your existing cabinetry honestly during the kitchen walk, guiding whether full replacement or targeted refacing, hardware, and trim work fits best.",
    benefits: [
      "Cabinet reveals and crown moldings coordinated directly with backsplash height.",
      "Consistent alignment with countertop overhangs and island seating.",
      "Hardware placement and soft-close adjustments finished cleanly.",
    ],
    typicalScopes: [
      "New base and wall cabinet installation for updated layouts",
      "Refacing doors, drawer fronts, and end panels on sound existing boxes",
      "Adding pantry runs, floating oak shelves, or island cabinetry",
    ],
    image: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    imageAlt: "Custom white oak upper cabinets and dark charcoal base cabinetry.",
    related: ["countertops", "kitchen-islands-layout", "backsplash-installation"],
  },
  {
    slug: "countertops",
    category: "kitchens",
    name: "Kitchen Countertops",
    seoTitle: "Kitchen Countertops in Springfield, IL | Andre Preer",
    seoDescription:
      "Kitchen countertop planning and installation coordination in Springfield, IL, matched seamlessly with cabinets and backsplash edges.",
    summary:
      "Durable, properly templated work surfaces coordinated with sink cutouts, cabinet reveals, and backsplash landings.",
    h1: "Kitchen Countertops",
    problem:
      "Swapping a counter without planning the backsplash transition or cabinet support creates awkward gaps, mismatched edges, and uneven sink reveals.",
    approach:
      "Countertops are planned alongside the backsplash and cabinet run so edge profiles, overhang depths, and range seams work as a single surface system.",
    benefits: [
      "Eliminates the dated 4-inch laminate strip so full tile or stone meets the counter cleanly.",
      "Coordinates sink, faucet, and cooktop openings in one unified timeline.",
      "Honest material guidance tailored to daily cooking and family wear.",
    ],
    typicalScopes: [
      "Countertop replacement paired with a new winter backsplash",
      "Full-perimeter and island stone or quartz work surfaces",
      "Integrated countertop-to-backsplash ledge and sill details",
    ],
    image: "/src/assets/images/kitchen_stone_island_1795691086675.jpg",
    imageAlt: "Honed natural stone kitchen island countertop with clean overhang.",
    related: ["backsplash-installation", "cabinets", "kitchen-islands-layout"],
  },
  {
    slug: "kitchen-islands-layout",
    category: "kitchens",
    name: "Kitchen Islands & Layout Improvements",
    seoTitle: "Kitchen Islands & Layout Updates in Springfield, IL | Andre Preer",
    seoDescription:
      "Thoughtful kitchen islands and practical layout improvements in Springfield and Central Illinois.",
    summary:
      "Improving cooking flow and seating—adding an island only when room clearances genuinely support comfortable movement.",
    h1: "Kitchen Islands & Layout Improvements",
    problem:
      "Forcing an oversized island into a tight kitchen narrows walkways and makes daily cooking harder rather than better.",
    approach:
      "Doorways, appliance clearances, and natural light are measured first so islands, work triangles, and seating fit the actual architecture of your home.",
    benefits: [
      "Workable aisle clearances around dishwashers, ovens, and refrigerators.",
      "Coordinated cabinetry, countertop seating overhangs, and pendant lighting lines.",
      "Better connection to adjacent dining rooms or backyard patio doors.",
    ],
    typicalScopes: [
      "Custom island addition with seating and storage",
      "Reconfiguring cramped L-shaped or peninsula prep zones",
      "Opening sightlines between kitchen and dining areas",
    ],
    image: "/src/assets/images/kitchen_stone_island_1795691086675.jpg",
    imageAlt: "Fluted wood kitchen island with tailored seating and natural light.",
    related: ["full-kitchen-remodels", "cabinets", "lighting-finishing"],
  },
  {
    slug: "full-kitchen-remodels",
    category: "kitchens",
    winterPriority: true,
    name: "Full Kitchen Remodels",
    seoTitle: "Full Kitchen Remodels in Springfield, IL | Andre Preer",
    seoDescription:
      "Cohesive kitchen remodeling in Springfield and Central Illinois: layout, cabinets, countertops, backsplash, and finishing touches in one scope.",
    summary:
      "End-to-end kitchen transformation bringing layout, cabinetry, counters, tile backsplash, and finishing details into one coordinated build.",
    h1: "Full Kitchen Remodels",
    problem:
      "Hiring disconnected trades for cabinets, counters, and tile leads to finger-pointing at seams and months of stalled kitchen downtime.",
    approach:
      "One clear plan and point of contact from initial site walk through final punch list—keeping schedules orderly and finishes aligned.",
    benefits: [
      "Every material that touches—cabinetry, counter, backsplash, hardware—decided together.",
      "Clear written scope confirmed before work begins.",
      "Interior kitchen craftsmanship backed by exterior capability if garden doors or patios connect.",
    ],
    typicalScopes: [
      "Complete kitchen refresh preserving existing footprint",
      "Full surface, cabinet, island, and backsplash transformation",
      "Kitchen upgrades timed for winter completion before spring gatherings",
    ],
    image: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    imageAlt: "Full contemporary kitchen remodel with custom backsplash, island, and natural light.",
    related: ["backsplash-installation", "cabinets", "countertops"],
  },
  {
    slug: "lighting-finishing",
    category: "kitchens",
    name: "Kitchen Lighting & Finishing Details",
    seoTitle: "Kitchen Lighting & Finishing in Springfield, IL | Andre Preer",
    seoDescription:
      "Kitchen fixture updates, cabinet hardware, trim, and finishing details in Springfield and Central Illinois.",
    summary:
      "The final architectural layer—pendants, hardware, trim carpentry, and edge profiles that make a room feel complete.",
    h1: "Kitchen Lighting & Finishing Details",
    problem:
      "New tile and cabinetry lose their visual impact when paired with dated builder-grade pendants, misaligned pulls, or unfinished trim edges.",
    approach:
      "Finish metals, fixture proportions, trim returns, and caulk/grout color transitions are resolved as part of the kitchen scope.",
    benefits: [
      "Consistent bronze, brass, or matte black hardware and fixture tones.",
      "Clean scribing and trim transitions where cabinets meet walls and ceilings.",
      "Focused finish upgrades available independently or as the final phase of a remodel.",
    ],
    typicalScopes: [
      "Island pendant and task fixture updates within existing kitchen scope",
      "Cabinet hardware layout, installation, and crown/base trim",
      "Caulk, grout, and edge-metal detailing around finished backsplashes",
    ],
    image: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    imageAlt: "Bronze kitchen pendants and hardware paired with warm oak cabinetry.",
    related: ["backsplash-installation", "cabinets", "interior-trim-finishing"],
  },
  {
    slug: "bathroom-shower-tile",
    category: "bathrooms",
    winterPriority: true,
    requiresScopeConfirmation: true,
    name: "Shower & Bathroom Tile Installation",
    seoTitle: "Bathroom & Shower Tile Installation in Springfield, IL | Andre Preer",
    seoDescription:
      "Precision shower wall tile, bathroom tile flooring, and stone mosaic installation in Springfield and Central Illinois. Tile and stone craft—no plumbing.",
    summary:
      "Cleanly aligned shower wall tile, recessed niches, pebble or mosaic shower pans, and porcelain or stone bathroom flooring (tile & stone only, no plumbing).",
    h1: "Shower & Bathroom Tile Installation",
    problem:
      "Bathrooms expose rushed tile work immediately—lippage on large-format tiles, uneven grout lines around niches, or poorly terminated wall edges.",
    approach:
      "Andre maps tile courses carefully around niches, benches, and glass lines so cuts are symmetrical and edges finish cleanly. Plumbing rough-ins and valves are handled separately by a licensed plumber.",
    benefits: [
      "Balanced tile layout centered on focal walls, recessed niches, and shower openings.",
      "Tight, uniform grout joints across porcelain, ceramic, and natural stone.",
      "Clear tile-and-stone scope confirmed upfront—no plumbing surprises.",
    ],
    typicalScopes: [
      "Walk-in shower wall tile and tiled shampoo niches",
      "Pebble, river stone, or mosaic shower floor tilework",
      "Porcelain, ceramic, or natural stone bathroom floor tiling",
    ],
    image: "/src/assets/images/bathroom_shower_tile_1795691087587.jpg",
    imageAlt: "Walk-in bathroom shower with limestone tile walls and river stone mosaic floor.",
    related: ["bathroom-vanity-stone", "tile-flooring", "custom-tile-stonework"],
  },
  {
    slug: "bathroom-vanity-stone",
    category: "bathrooms",
    requiresScopeConfirmation: true,
    name: "Bathroom Vanity Backsplashes & Stone Finishes",
    seoTitle: "Bathroom Vanity Tile & Stone Finishes in Springfield, IL | Andre Preer",
    seoDescription:
      "Bathroom vanity tile backsplashes, stone thresholds, and wall tile accents in Springfield and Central Illinois. Tile & stone only, no plumbing.",
    summary:
      "Full-height vanity tile backsplashes, natural stone thresholds and sills, and decorative wall tilework for primary and guest baths (no plumbing).",
    h1: "Bathroom Vanity Backsplashes & Stone Finishes",
    problem:
      "Short builder-grade counter strips leave drywall exposed to splashes and make bathrooms feel dated even when fixtures are sound.",
    approach:
      "Replacing short strips with full-height ceramic, zellige, or natural marble backsplash tile and stone sills protects walls and elevates the room without touching plumbing lines.",
    benefits: [
      "Durable, moisture-resistant tile protection behind vanities and sinks.",
      "Custom-cut natural stone thresholds, curbs, and window sills.",
      "Focused winter interior upgrade completed cleanly around existing plumbing.",
    ],
    typicalScopes: [
      "Full-wall decorative tile or stone vanity backsplash",
      "Natural stone door thresholds, window sills, and shower curb caps",
      "Custom pebble or stone accent inlays in guest bathrooms",
    ],
    image: "/src/assets/images/bathroom_shower_tile_1795691087587.jpg",
    imageAlt: "White oak bathroom vanity with marble backsplash tile and natural stone details.",
    related: ["bathroom-shower-tile", "decorative-stone-backsplashes", "tile-flooring"],
  },
  {
    slug: "tile-flooring",
    category: "tile-stonework",
    winterPriority: true,
    name: "Tile Flooring Installation",
    seoTitle: "Tile Flooring Installation in Springfield, IL | Andre Preer",
    seoDescription:
      "Porcelain, ceramic, and natural stone tile flooring installation in Springfield and Central Illinois for kitchens, bathrooms, mudrooms, and entryways.",
    summary:
      "Flat, durable porcelain, ceramic, and natural stone tile flooring for kitchens, bathrooms, mudrooms, foyers, and sunrooms.",
    h1: "Tile Flooring Installation",
    problem:
      "Skipping subfloor flattening or alignment layout leads to cracked tiles, hollow-sounding spots, and awkward sliver cuts along doorways.",
    approach:
      "Subfloors are evaluated and prepped flat before layout lines are snapped across connecting doorways, keeping grout lines square and flush with adjoining hardwood or carpet transitions.",
    benefits: [
      "Large-format porcelain, patterned ceramic, slate, travertine, and marble floor tile.",
      "Clean, level transitions at hallways, exterior doors, and cabinetry toe-kicks.",
      "Ideal winter upgrade built to handle Midwestern snow, salt, and daily foot traffic.",
    ],
    typicalScopes: [
      "Kitchen and breakfast-room porcelain or natural stone tile flooring",
      "Mudroom, laundry room, and front foyer slate or patterned tile floors",
      "Bathroom floor tile replacement and stone threshold finishing",
    ],
    image: "/src/assets/images/tile_stonework_craft_1795691089671.jpg",
    imageAlt: "Precision-laid natural stone and ceramic tile surfaces with tight uniform grout lines.",
    related: ["custom-tile-stonework", "backsplash-installation", "bathroom-shower-tile"],
  },
  {
    slug: "custom-tile-stonework",
    category: "tile-stonework",
    winterPriority: true,
    name: "Custom Architectural Tile & Natural Stonework",
    seoTitle: "Tile & Stonework Contractor in Springfield, IL | Andre Preer",
    seoDescription:
      "Custom tile installation and natural stonework in Springfield and Central Illinois. Herringbone, travertine, limestone, and interior stone accents.",
    summary:
      "Interior and exterior tile and natural stone installations built around tight joints, honest materials, and enduring structure.",
    h1: "Custom Architectural Tile & Natural Stonework",
    problem:
      "Natural stone and patterned tile require patience—rushing layout or ignoring substrate prep results in cracked grout, uneven edges, and mismatched tones.",
    approach:
      "Andre works directly with stone variation, carefully blending pieces, mitering or bullnosing exposed edges, and keeping joints crisp across every surface.",
    benefits: [
      "Expertise across ceramic, porcelain, zellige, travertine, marble, and Midwestern limestone.",
      "Precision edge finishing at transitions, corners, and step-ups.",
      "One craftsman handling both indoor architectural tile and outdoor structural stone.",
    ],
    typicalScopes: [
      "Feature tile walls, mudroom floors, and entry foyers",
      "Interior natural stone surrounds and architectural accent walls",
      "Outdoor stone steps, piers, and patio transitions",
    ],
    image: "/src/assets/images/tile_stonework_craft_1795691089671.jpg",
    imageAlt: "Precision chiseled limestone and herringbone tile craft close-up.",
    related: ["backsplash-installation", "limestone-walls-stonework", "interior-stone-hearths"],
  },
  {
    slug: "specialty-stone-water",
    category: "tile-stonework",
    name: "Specialty Cobble, Pebble & Waterfall Stonework",
    seoTitle: "Custom Pebble, Cobble & Waterfall Stonework in Springfield, IL | Andre Preer",
    seoDescription:
      "Detailed miniature cobble walks, interior pebble stonework, and natural rock water features in Springfield and Central Illinois.",
    summary:
      "Bespoke pebble paths, miniature cobble floors, and custom rock waterfall stonework—executed indoors or in the garden.",
    h1: "Specialty Cobble, Pebble & Waterfall Stonework",
    problem:
      "Standard catalog pavers and prefabricated fiberglass basins look artificial when a space calls for genuine organic stone craft.",
    approach:
      "Andre creates custom hand-set pebble and cobble runs—such as interior creek-style stone paths leading into guest baths or natural stone waterfalls—alongside traditional masonry.",
    benefits: [
      "Hand-selected stone sizing and natural directional flow.",
      "Seamless indoor-to-outdoor material continuity when desired.",
      "Available as a signature architectural detail within a wider home project.",
    ],
    typicalScopes: [
      "Hand-set pebble or miniature cobble floor inlays and bath entries",
      "Natural stone waterfall features indoors or in landscaped gardens",
      "Bespoke stone focal details integrated into patios or interiors",
    ],
    image: "/src/assets/images/tile_stonework_craft_1795691089671.jpg",
    imageAlt: "Hand-fitted natural stone textures and architectural stone transitions.",
    related: ["custom-tile-stonework", "bathroom-shower-tile", "limestone-walls-stonework"],
  },
  {
    slug: "interior-stone-hearths",
    category: "interior",
    winterPriority: true,
    name: "Interior Stone Hearths & Architectural Upgrades",
    seoTitle: "Interior Stonework & Fireplace Hearths in Springfield, IL | Andre Preer",
    seoDescription:
      "Interior stone fireplace surrounds, hearths, and residential interior finishing in Springfield and Central Illinois.",
    summary:
      "Transforming living rooms and gathering spaces with natural stone fireplace surrounds, custom hearths, and crisp trim carpentry.",
    h1: "Interior Stone Hearths & Architectural Upgrades",
    problem:
      "Dated brick or bare drywall around a fireplace leaves the main living room feeling unfinished during long Illinois winters.",
    approach:
      "Natural stone cladding, solid limestone or quartzite hearths, and tailored wood mantels and built-ins bring warmth and architectural weight to the room.",
    benefits: [
      "Authentic natural stone masonry paired cleanly with existing trim and flooring.",
      "Winter-friendly indoor schedule that elevates the room you gather in most.",
      "Scope confirmed clearly around existing firebox and mantel clearances.",
    ],
    typicalScopes: [
      "Natural stone fireplace surround and solid stone hearth upgrades",
      "Interior stone accent walls and entryways",
      "Coordinated living room trim, mantel, and finish carpentry improvements",
    ],
    image: "/src/assets/images/interior_improvement_space_1795691088141.jpg",
    imageAlt: "Natural stone fireplace surround with timber mantel in a sunlit living room.",
    related: ["custom-tile-stonework", "interior-trim-finishing", "interior-exterior"],
  },
  {
    slug: "interior-trim-finishing",
    category: "interior",
    requiresScopeConfirmation: true,
    name: "Interior Flooring, Trim & Room Improvements",
    seoTitle: "Interior Home Improvements & Flooring in Springfield, IL | Andre Preer",
    seoDescription:
      "Residential interior improvements in Springfield, IL: hard-surface flooring, tile floors, trim finishing, and interior room updates.",
    summary:
      "Hard-surface and tile flooring, finish trim, door transitions, and targeted residential room improvements—scoped honestly to your home.",
    h1: "Interior Flooring, Trim & Room Improvements",
    problem:
      "Uneven floor transitions, battered baseboards, and disjointed room updates make otherwise solid homes feel worn.",
    approach:
      "Andre walks the rooms with you to clarify exact priorities—handling tile/hard-surface flooring, trim, and interior finish improvements directly and confirming any specialized trade boundaries upfront.",
    benefits: [
      "Flush, clean thresholds between wood, tile, and stone rooms.",
      "Straight, tight mitered baseboards, casings, and finish trim.",
      "Clear, transparent project scope written before work begins.",
    ],
    typicalScopes: [
      "Porcelain, stone, and entry mudroom flooring installation",
      "Interior trim, casing, and finish carpentry refreshes",
      "Coordinated multi-room surface and finish improvements",
    ],
    image: "/src/assets/images/interior_improvement_space_1795691088141.jpg",
    imageAlt: "Wide-plank white oak interior flooring and crisp window casing carpentry.",
    related: ["interior-stone-hearths", "cabinets", "interior-exterior"],
  },
  {
    slug: "interior-exterior",
    category: "interior",
    name: "Interior–Exterior Property Coordination",
    seoTitle: "Interior & Exterior Home Design in Springfield, IL | Andre Preer",
    seoDescription:
      "Unified interior and exterior residential improvements in Springfield and Central Illinois—coordinating doors, sightlines, stone, and outdoor living.",
    summary:
      "Planning how your kitchen, living spaces, and entryways meet your patios, stonework, and landscape as one cohesive property.",
    h1: "Interior & Exterior, Planned Together",
    problem:
      "Hiring separate indoor and outdoor crews often produces patios that ignore kitchen sightlines or stone colors that clash at the back door.",
    approach:
      "Because Andre works both inside and outside the home, materials, floor levels, sightlines, and seasonal timing can be planned together under one roof.",
    benefits: [
      "Consistent stone, wood, and color palettes from kitchen to patio.",
      "Phased planning—handle kitchen and bath work in winter, grounds in spring.",
      "Single trusted point of contact from first walkthrough to completion.",
    ],
    typicalScopes: [
      "Connecting kitchen or living room doors directly to new stone patios",
      "Coordinating indoor stone hearths with exterior limestone walls",
      "Multi-season whole-property improvement roadmaps",
    ],
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    imageAlt: "Rear glass doors of a stone-clad residence opening directly onto a custom limestone terrace.",
    related: ["full-kitchen-remodels", "patios-hardscaping-outdoor-living", "limestone-walls-stonework"],
  },
  {
    slug: "limestone-walls-stonework",
    category: "outdoor",
    name: "Limestone Retaining Walls & Exterior Stonework",
    seoTitle: "Limestone Retaining Walls & Stonework in Springfield, IL | Andre Preer",
    seoDescription:
      "Structural and decorative limestone walls and exterior stonework for Springfield and Central Illinois homes.",
    summary:
      "Natural Midwestern limestone walls built to hold grade, edge garden beds, and frame outdoor living terraces.",
    h1: "Limestone Walls & Exterior Stonework",
    problem:
      "Sloped yards that wash out or loose concrete blocks fail structurally and feel disconnected from the architecture of a Midwest home.",
    approach:
      "Limestone is set on proper compacted base and drainage stone so retaining walls, seat walls, and bed borders withstand Illinois freeze-thaw cycles.",
    benefits: [
      "Natural limestone texture that complements brick, siding, and stone homes.",
      "Dual-purpose seat walls that double as retaining structure around patios.",
      "Engineered for proper water drainage behind the wall face.",
    ],
    typicalScopes: [
      "Terraced limestone retaining walls for sloped side or back yards",
      "Curved stone seat walls framing patio and fire pit zones",
      "Natural stone landscape edging and entry piers",
    ],
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    imageAlt: "Curved natural stacked limestone retaining and seat wall around a residential fire terrace.",
    related: ["patios-hardscaping-outdoor-living", "custom-tile-stonework", "fire-features"],
  },
  {
    slug: "patios-hardscaping-outdoor-living",
    category: "outdoor",
    name: "Patios, Walkways & Outdoor Living",
    seoTitle: "Patios, Hardscaping & Outdoor Living in Springfield, IL | Andre Preer",
    seoDescription:
      "Custom stone patios, front walkways, and outdoor living spaces in Springfield and Central Illinois.",
    summary:
      "Stone patios and front walkways proportioned to your house, evening shade, and how family and guests actually move outdoors.",
    h1: "Patios, Walkways & Outdoor Living",
    problem:
      "A small builder-grade concrete pad sits unused because it lacks circulation, comfortable seating depth, and visual framing.",
    approach:
      "Hardscaping is laid out with door thresholds, dining/lounge clearances, and surrounding planting beds designed as a complete outdoor room.",
    benefits: [
      "Natural flagstone, limestone, or architectural paver surfaces set true.",
      "Clear front entry walkways that welcome guests cleanly from driveway to porch.",
      "Integrated lighting, steps, and planting pockets built together.",
    ],
    typicalScopes: [
      "Natural stone backyard entertaining patios and dining terraces",
      "Curved front entry walks and limestone step landings",
      "Multi-zone outdoor living areas connected to the back door",
    ],
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    imageAlt: "Natural flagstone and limestone terrace connecting a residence to a landscaped garden.",
    related: ["limestone-walls-stonework", "fire-features", "landscape-design-installation"],
  },
  {
    slug: "landscape-design-installation",
    category: "outdoor",
    name: "Landscape Design, Trees, Shrubs & Planting",
    seoTitle: "Landscape Design & Planting in Springfield, IL | Andre Preer",
    seoDescription:
      "Residential landscape design and planting in Springfield, IL: trees, shrubs, roses, and layered four-season garden beds.",
    summary:
      "Full-property planting design—trees, shrubs, roses, and perennials arranged for Central Illinois sun, soil, and four-season structure.",
    h1: "Landscape Design & Layered Planting",
    problem:
      "Random nursery purchases crowd walkways within three years and leave front foundations bare from November through April.",
    approach:
      "Planting beds are layered with structural evergreens, ornamental trees, classic roses, and seasonal perennials spaced for mature growth.",
    benefits: [
      "Thoughtful mature spacing so plants frame windows rather than swallowing them.",
      "Four-season bone structure paired with spring-through-autumn bloom.",
      "Designed and installed by the same person who walked the yard with you.",
    ],
    typicalScopes: [
      "Complete front foundation and entryway bed redesigns",
      "Trees, flowering shrubs, roses, and ornamental grasses",
      "Backyard privacy screening and patio perimeter beds",
    ],
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    imageAlt: "Layered ornamental trees, hydrangeas, boxwoods, and perennials framing a limestone patio.",
    related: ["patios-hardscaping-outdoor-living", "limestone-walls-stonework", "interior-exterior"],
  },
  {
    slug: "fire-features",
    category: "outdoor",
    name: "Fire Features & Gathering Spaces",
    seoTitle: "Fire Pits & Fire Decks in Springfield, IL | Andre Preer",
    seoDescription:
      "Custom stone fire pits, fire decks, and outdoor gathering spaces in Springfield and Central Illinois.",
    summary:
      "Built-in stone fire pits and gathering terraces designed around comfortable seating radii and evening conversation.",
    h1: "Fire Features & Gathering Spaces",
    problem:
      "A loose ring of blocks in the middle of damp grass creates an awkward walk in the dark with nowhere comfortable to sit.",
    approach:
      "Fire pits and fire decks are integrated directly into limestone patios with generous chair clearances and low surrounding seat walls.",
    benefits: [
      "Proper seating clearances so chairs sit level on solid stone.",
      "Durable masonry construction built for Central Illinois wood or gas setups.",
      "Extends backyard use cleanly into crisp spring and autumn evenings.",
    ],
    typicalScopes: [
      "Circular recessed stone fire pit terrace with limestone seat wall",
      "Raised fire deck integrated into an existing backyard grade",
      "Walkway connections and perimeter planting around evening seating",
    ],
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    imageAlt: "Custom circular stone fire pit with tailored seating and low limestone wall at dusk.",
    related: ["patios-hardscaping-outdoor-living", "limestone-walls-stonework", "interior-exterior"],
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Kitchens" | "Backsplashes" | "Bathrooms" | "Tile & Stonework" | "Interior" | "Outdoor";
  image: string;
  alt: string;
  caption: string;
  materials: string[];
  status: "Editorial Inspiration" | "Completed Project";
  location?: string;
}

export const editorialGallery: GalleryItem[] = [
  {
    id: "insp-kitchen-zellige",
    title: "Warm Ceramic Backsplash & White Oak Kitchen",
    category: "Backsplashes",
    image: "/src/assets/images/hero_kitchen_backsplash_1795691086121.jpg",
    alt: "Kitchen backsplash editorial inspiration with handmade square ceramic tiles, oak uppers, and honed quartzite.",
    caption:
      "Full-height square ceramic backsplash running cleanly into window casing and beneath open oak shelving.",
    materials: ["Handmade Ceramic Tile", "Honed Quartzite", "White Oak & Charcoal Cabinetry"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-island-range",
    title: "Patterned Range Alcove & Fluted Oak Island",
    category: "Kitchens",
    image: "/src/assets/images/kitchen_stone_island_1795691086675.jpg",
    alt: "Kitchen editorial inspiration with decorative patterned tile behind the range and limestone island counter.",
    caption:
      "Framed decorative tile inset behind a range paired with a honed limestone island work surface.",
    materials: ["Decorative Ceramic Mosaic", "Honed Limestone", "Fluted White Oak"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-bathroom-shower",
    title: "Limestone-Toned Shower & River Stone Mosaic",
    category: "Bathrooms",
    image: "/src/assets/images/bathroom_shower_tile_1795691087587.jpg",
    alt: "Bathroom remodel editorial inspiration with large-format porcelain shower tile and pebble floor mosaic.",
    caption:
      "Walk-in shower clad in warm stone-look tile with recessed niche, river stone mosaic pan, and oak vanity.",
    materials: ["Limestone-Look Porcelain", "Natural Pebble Mosaic", "Marble Vanity Splash"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-tile-stone-detail",
    title: "Herringbone Ceramic & Split-Face Limestone Joint",
    category: "Tile & Stonework",
    image: "/src/assets/images/tile_stonework_craft_1795691089671.jpg",
    alt: "Close-up craftsmanship inspiration showing chiseled limestone meeting precision herringbone tile.",
    caption:
      "Detail study showing tight uniform grout joints where chiseled natural limestone meets honed travertine and herringbone tile.",
    materials: ["Chiseled Limestone", "Honed Travertine", "Herringbone Ceramic"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-interior-hearth",
    title: "Natural Stone Fireplace Hearth & Oak Living Room",
    category: "Interior",
    image: "/src/assets/images/interior_improvement_space_1795691088141.jpg",
    alt: "Interior renovation editorial inspiration featuring stacked stone fireplace surround, timber mantel, and oak flooring.",
    caption:
      "Interior living room anchor combining dry-stacked natural stone masonry, solid hearth, and wide-plank oak flooring.",
    materials: ["Natural Stone Masonry", "Reclaimed Timber Mantel", "Wide-Plank White Oak"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-outdoor-terrace",
    title: "Limestone Patio, Retaining Wall & Fire Terrace",
    category: "Outdoor",
    image: "/src/assets/images/outdoor_patio_stonework_1795691089592.jpg",
    alt: "Outdoor living editorial inspiration with circular stone fire pit, retaining wall, and Midwest perennial beds.",
    caption:
      "Multi-level limestone terrace and fire gathering space integrated with layered Midwest trees, shrubs, and perennials.",
    materials: ["Natural Flagstone", "Stacked Limestone Wall", "Layered Midwest Planting"],
    status: "Editorial Inspiration",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Initial Conversation",
    summary:
      "Call 309-431-1805 or send the project estimate form with your town, room or yard goals, and optional photos.",
  },
  {
    number: "02",
    title: "On-Site Walkthrough",
    summary:
      "Andre walks the kitchen, bathroom, interior room, or yard with you—evaluating dimensions, layout, materials, and existing structure.",
  },
  {
    number: "03",
    title: "Clear Scope & Proposal",
    summary:
      "You receive a straightforward written scope detailing materials, layout decisions, and confirmed trade boundaries to review with zero pressure.",
  },
  {
    number: "04",
    title: "Focused Craftsmanship",
    summary:
      "Work proceeds cleanly and methodically—from substrate prep and precision tile or stone setting to finishing hardware and trim.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    summary:
      "Every edge, grout line, fixture, or stone joint is inspected together before the project closes.",
  },
];

export const craftsmanshipPillars = [
  {
    number: "01",
    title: "Design and Execution Stay Together",
    description:
      "The person walking your kitchen, bathroom, or yard is the same craftsman guiding layout, materials, and installation.",
  },
  {
    number: "02",
    title: "Precision Where Surfaces Meet",
    description:
      "Clean tile terminations, aligned outlets, balanced stone veining, and level thresholds distinguish lasting work from rushed contracting.",
  },
  {
    number: "03",
    title: "Year-Round Interior & Exterior Breadth",
    description:
      "From winter kitchen backsplashes and bathroom tilework to warm-weather limestone patios, one relationship serves the entire home.",
  },
  {
    number: "04",
    title: "Built for Central Illinois Homes",
    description:
      "Practical material advice scaled for real Springfield-area residences—accounting for family use, architectural character, and Midwest seasons.",
  },
];

export function serviceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function categoryById(id: CategoryId): CategoryInfo {
  return categories.find((c) => c.id === id) || categories[0];
}
