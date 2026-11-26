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
    heroImage: "/src/assets/images/midwest_full_kitchen_remodel_1795693537559.jpg",
    heroAlt:
      "Springfield Illinois two-tone kitchen remodel inspiration featuring white Shaker uppers, slate-blue island cabinetry, stacked tile backsplash, and oak floors.",
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
      "Precision shower surround tile, hex or river stone floor mosaics, porcelain and stone bathroom flooring, and vanity tile backsplashes.",
    heroImage: "/src/assets/images/midwest_bathroom_shower_tile_1795693284261.jpg",
    heroAlt:
      "Midwest primary bathroom inspiration showing a frameless glass walk-in shower with 12x24 veined porcelain tile, recessed niche, hex marble pan, and white oak vanity.",
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
    heroImage: "/src/assets/images/midwest_tile_flooring_1795693263982.jpg",
    heroAlt:
      "Midwest home mudroom and hallway inspiration featuring large-format charcoal slate-look porcelain floor tile and a honed limestone threshold.",
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
    heroImage: "/src/assets/images/midwest_living_stone_hearth_1795693265433.jpg",
    heroAlt:
      "Midwest living room inspiration featuring a floor-to-ceiling natural fieldstone fireplace surround, oak timber mantel, white built-in bookcases, and oak floors.",
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
    heroImage: "/src/assets/images/midwest_patio_limestone_yard_1795693266344.jpg",
    heroAlt:
      "Central Illinois brick-and-siding home backyard inspiration with a natural Indiana limestone flagstone patio, curved stone seat wall, circular fire pit, and hydrangeas.",
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
    image: "/src/assets/images/midwest_kitchen_backsplash_1795693260178.jpg",
    imageAlt: "Warm-cream glazed ceramic subway tile backsplash framed around outlets in a Midwest kitchen.",
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
    image: "/src/assets/images/midwest_decorative_backsplash_1795693261893.jpg",
    imageAlt: "Framed herringbone marble and ceramic backsplash behind a stainless gas range with sage-gray Shaker cabinets.",
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
    image: "/src/assets/images/midwest_shaker_cabinets_1795693535778.jpg",
    imageAlt: "Off-white painted Shaker kitchen cabinets with crown molding, glass display doors, and satin nickel pulls.",
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
    image: "/src/assets/images/midwest_quartz_countertops_1795693536797.jpg",
    imageAlt: "Carrara-veined white quartz kitchen countertop with stainless undermount sink and subway tile backsplash.",
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
    image: "/src/assets/images/midwest_kitchen_island_layout_1795693536962.jpg",
    imageAlt: "Midwest ranch kitchen center island in stained walnut Shaker cabinetry with wide walkways into dining area.",
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
    image: "/src/assets/images/midwest_full_kitchen_remodel_1795693537559.jpg",
    imageAlt: "Full Midwest two-tone kitchen remodel featuring white Shaker cabinets, slate island, and hardwood floors.",
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
    image: "/src/assets/images/midwest_kitchen_pendants_trim_1795693538739.jpg",
    imageAlt: "Aged-brass schoolhouse kitchen pendants, ceiling crown molding, and metal tile edge trim.",
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
    image: "/src/assets/images/midwest_bathroom_shower_tile_1795693284261.jpg",
    imageAlt: "Midwest walk-in shower with 12x24 porcelain wall tile, recessed niche, and hexagonal marble mosaic pan.",
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
    image: "/src/assets/images/midwest_bathroom_vanity_tile_1795693539852.jpg",
    imageAlt: "Muted slate-green double Shaker bathroom vanity with stacked glazed tile wall backsplash and marble sill.",
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
    image: "/src/assets/images/midwest_tile_flooring_1795693263982.jpg",
    imageAlt: "Large-format matte charcoal porcelain floor tiles installed in a Midwest mudroom with limestone threshold.",
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
    image: "/src/assets/images/midwest_stonework_detail_1795693265019.jpg",
    imageAlt: "Split-face Indiana limestone masonry meeting a honed limestone ledge and herringbone ceramic floor tile.",
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
    image: "/src/assets/images/midwest_pebble_cobble_stone_1795693540453.jpg",
    imageAlt: "Hand-set natural river pebble mosaic floor inlay bordering matte porcelain tiles and split-face stone wall.",
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
    image: "/src/assets/images/midwest_living_stone_hearth_1795693265433.jpg",
    imageAlt: "Natural stacked fieldstone and limestone fireplace surround with solid oak mantel and white Shaker built-ins.",
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
    image: "/src/assets/images/midwest_interior_flooring_trim_1795693540758.jpg",
    imageAlt: "Midwest home foyer porcelain tile meeting white-oak hardwood at a flush threshold with painted craftsman wainscoting.",
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
    image: "/src/assets/images/midwest_patio_door_transition_1795693542590.jpg",
    imageAlt: "Midwest breakfast nook porcelain tile floor opening through French patio doors onto a matching limestone patio.",
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
    image: "/src/assets/images/midwest_limestone_retaining_wall_1795693568080.jpg",
    imageAlt: "Tiered natural Indiana limestone retaining wall and solid stone garden steps built into a sloped Illinois lawn.",
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
    image: "/src/assets/images/midwest_patio_limestone_yard_1795693266344.jpg",
    imageAlt: "Hand-laid natural Indiana limestone flagstone patio connecting a brick Midwest residence to the lawn.",
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
    image: "/src/assets/images/midwest_front_yard_landscaping_1795693567077.jpg",
    imageAlt: "Springfield Illinois brick home front yard with flagstone walk, stone bed edging, boxwoods, hydrangeas, and Knockout roses.",
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
    image: "/src/assets/images/midwest_backyard_fire_pit_1795693567355.jpg",
    imageAlt: "Circular tumbled Midwest fieldstone fire pit with honed limestone cap and cedar Adirondack chairs at sunset.",
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
    id: "insp-kitchen-winter-stack",
    title: "Vertical-Stacked Sage Tile & Oak Kitchen",
    category: "Backsplashes",
    image: "/src/assets/images/midwest_backsplash_showcase_1795693566752.jpg",
    alt: "Sunny Midwest kitchen editorial inspiration with vertical-stacked matte ceramic backsplash, oak drawers, and winter oaks outside.",
    caption:
      "Vertical-stacked glazed ceramic tile fitted cleanly around window trim, brushed steel range hood, and outlet plates.",
    materials: ["Vertical Ceramic Tile", "White Quartz", "Natural White Oak"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-subway",
    title: "Warm Glazed Subway Backsplash & Shaker Kitchen",
    category: "Backsplashes",
    image: "/src/assets/images/midwest_kitchen_backsplash_1795693260178.jpg",
    alt: "Midwest kitchen editorial inspiration with cream glazed subway tile backsplash, Shaker cabinets, and Carrara quartz counters.",
    caption:
      "Full-height glazed ceramic subway tile mapped cleanly around outlets, oak window casing, and stainless chimney hood.",
    materials: ["Glazed Ceramic Subway Tile", "Carrara Quartz", "Warm Shaker Cabinetry"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-herringbone",
    title: "Framed Herringbone Range Backsplash & Sage Island",
    category: "Backsplashes",
    image: "/src/assets/images/midwest_decorative_backsplash_1795693261893.jpg",
    alt: "Midwest transitional kitchen inspiration with framed herringbone tile behind the range and sage-gray Shaker island.",
    caption:
      "Bordered marble-and-ceramic herringbone focal panel behind a gas range paired with custom white oak hood and quartz island.",
    materials: ["Herringbone Marble & Ceramic", "White Quartz", "Sage-Gray Shaker Cabinetry"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-two-tone",
    title: "Two-Tone White & Slate Shaker Remodel",
    category: "Kitchens",
    image: "/src/assets/images/midwest_full_kitchen_remodel_1795693537559.jpg",
    alt: "Two-tone Midwest kitchen remodel inspiration with white Shaker perimeter, slate-blue island, and patio doors.",
    caption:
      "Coordinated full-kitchen scope uniting Shaker cabinets, light veined quartz, stacked tile backsplash, and backyard sightlines.",
    materials: ["Two-Tone Shaker Cabinetry", "Stacked Ceramic Tile", "White Oak Flooring"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-walnut-island",
    title: "Walnut Center Island & Open Dining Flow",
    category: "Kitchens",
    image: "/src/assets/images/midwest_kitchen_island_layout_1795693536962.jpg",
    alt: "Midwest ranch kitchen editorial inspiration showing a warm walnut Shaker island and generous aisle clearances.",
    caption:
      "Proportioned walnut center island with comfortable bar overhang opening cleanly into the adjacent family dining area.",
    materials: ["Stained Walnut Cabinetry", "Honed White Quartz", "Hardwood Flooring"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-kitchen-cabinets-quartz",
    title: "Pantry Cabinetry & Carrara Quartz Countertops",
    category: "Kitchens",
    image: "/src/assets/images/midwest_shaker_cabinets_1795693535778.jpg",
    alt: "Off-white Shaker kitchen pantry and glass-front display cabinets trimmed with crown molding.",
    caption:
      "Full-height pantry cabinetry and glass-front upper doors scribed to the ceiling beside clean subway backsplash tile.",
    materials: ["Painted Shaker Cabinets", "Glass Display Uppers", "Satin Nickel Hardware"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-bathroom-shower",
    title: "12x24 Porcelain Walk-In Shower & Hex Mosaic Pan",
    category: "Bathrooms",
    image: "/src/assets/images/midwest_bathroom_shower_tile_1795693284261.jpg",
    alt: "Midwest bathroom remodel editorial inspiration with veined 12x24 porcelain shower tile, recessed niche, and oak vanity.",
    caption:
      "Walk-in frameless glass shower with 12x24 porcelain wall tile, brushed metal niche trim, hex mosaic pan, and matte tile floor.",
    materials: ["12x24 Porcelain Wall Tile", "Hex Marble Mosaic Pan", "Matte Porcelain Floor"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-bathroom-vanity",
    title: "Slate-Green Double Vanity & Stacked Tile Wall",
    category: "Bathrooms",
    image: "/src/assets/images/midwest_bathroom_vanity_tile_1795693539852.jpg",
    alt: "Midwest guest bath editorial inspiration showing a double slate-green Shaker vanity and full-height stacked ceramic backsplash.",
    caption:
      "Full-wall glazed stacked tile vanity backsplash trimmed neatly around sconces, oval wood mirrors, and marble windowsill.",
    materials: ["Glazed Wall Tile", "Honed Marble Window Sill", "Slate Shaker Vanity"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-mudroom-flooring",
    title: "Charcoal Porcelain Mudroom Tile & Limestone Threshold",
    category: "Tile & Stonework",
    image: "/src/assets/images/midwest_tile_flooring_1795693263982.jpg",
    alt: "Midwest mudroom tile flooring editorial inspiration with staggered charcoal slate-look porcelain tile and limestone threshold.",
    caption:
      "Salt- and snow-ready matte porcelain floor tile laid in a 1/3 offset with crisp narrow joints meeting a honed limestone threshold.",
    materials: ["Charcoal Porcelain Tile", "Honed Limestone Threshold", "Shaker Trim"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-tile-stone-detail",
    title: "Indiana Limestone Corner & Herringbone Tile Transition",
    category: "Tile & Stonework",
    image: "/src/assets/images/midwest_stonework_detail_1795693265019.jpg",
    alt: "Close-up craftsmanship inspiration showing split-face Indiana limestone meeting a honed sill and herringbone floor tile.",
    caption:
      "Material detail study showing chiseled Indiana limestone masonry meeting a solid honed stone ledge and precision herringbone tile.",
    materials: ["Split-Face Indiana Limestone", "Honed Limestone Ledge", "Herringbone Ceramic"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-pebble-cobble",
    title: "Hand-Set River Pebble Mosaic & Split-Face Stone",
    category: "Tile & Stonework",
    image: "/src/assets/images/midwest_pebble_cobble_stone_1795693540453.jpg",
    alt: "Custom hand-set river pebble mosaic inlay bordering large-format matte porcelain tile and stone accent wall.",
    caption:
      "Bespoke river pebble floor inlay meeting a custom honed stone curb transition and dry-stacked interior wall cladding.",
    materials: ["River Pebble Mosaic", "Honed Stone Curb", "Matte Porcelain Tile"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-interior-hearth",
    title: "Floor-to-Ceiling Fieldstone Fireplace & Oak Mantel",
    category: "Interior",
    image: "/src/assets/images/midwest_living_stone_hearth_1795693265433.jpg",
    alt: "Midwest family room editorial inspiration featuring a stacked stone fireplace surround, oak beam mantel, and Shaker built-ins.",
    caption:
      "Living room hearth anchor combining natural stacked fieldstone and limestone masonry, honed slab hearth, and custom built-ins.",
    materials: ["Natural Stacked Stone", "Honed Limestone Hearth", "Solid White Oak Mantel"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-interior-foyer",
    title: "Porcelain Entry Tile, Oak Threshold & Wainscoting",
    category: "Interior",
    image: "/src/assets/images/midwest_interior_flooring_trim_1795693540758.jpg",
    alt: "Midwest home foyer editorial inspiration with warm travertine-toned porcelain floor tile meeting oak hardwood and white wainscoting.",
    caption:
      "Front entryway durable porcelain tile recessed cleanly flush with adjacent oak hardwood and fluted craftsman door casing.",
    materials: ["Matte Porcelain Floor", "Flush White Oak Threshold", "Craftsman Trim"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-outdoor-terrace",
    title: "Indiana Limestone Flagstone Patio & Seat Wall",
    category: "Outdoor",
    image: "/src/assets/images/midwest_patio_limestone_yard_1795693266344.jpg",
    alt: "Central Illinois brick home backyard inspiration with irregular limestone patio, curved stone seat wall, fire pit, and hydrangeas.",
    caption:
      "Natural Indiana limestone flagstone terrace and circular stone fire pit framed by a curved seat wall and Midwest perennials.",
    materials: ["Indiana Limestone Flagstone", "Stacked Limestone Wall", "Hydrangeas & Hostas"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-outdoor-retaining-wall",
    title: "Tiered Indiana Limestone Retaining Wall & Steps",
    category: "Outdoor",
    image: "/src/assets/images/midwest_limestone_retaining_wall_1795693568080.jpg",
    alt: "Tiered Indiana limestone retaining wall and wide stone steps cutting across a sloped Midwest lawn.",
    caption:
      "Two-tier structural limestone retaining wall with thick capstones, wide stone garden steps, and hosta/boxwood bed borders.",
    materials: ["Indiana Limestone Block", "Solid Limestone Steps", "Hostas & Boxwoods"],
    status: "Editorial Inspiration",
  },
  {
    id: "insp-outdoor-firepit",
    title: "Midwest Fieldstone Fire Pit & Adirondack Terrace",
    category: "Outdoor",
    image: "/src/assets/images/midwest_backyard_fire_pit_1795693567355.jpg",
    alt: "Circular fieldstone fire pit with honed limestone cap, flagstone courtyard, and Adirondack seating at sunset.",
    caption:
      "Built-in natural fieldstone fire pit surrounded by level paver/flagstone seating clearances and late-summer perennials.",
    materials: ["Natural Fieldstone", "Honed Limestone Cap", "Flagstone Courtyard"],
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
