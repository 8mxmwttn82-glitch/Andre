import {
  categories,
  categoryById,
  editorialGallery,
  processSteps,
  serviceBySlug,
  services,
  site,
  type CategoryId,
} from "./site";

const CENTRAL_IL_AREAS = [
  {
    "@type": "City",
    name: "Springfield",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  {
    "@type": "City",
    name: "Chatham",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  {
    "@type": "City",
    name: "Sherman",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  {
    "@type": "City",
    name: "Rochester",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  {
    "@type": "AdministrativeArea",
    name: "Central Illinois",
  },
];

function buildBusinessNode(origin: string) {
  return {
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${origin}/#business`,
    name: site.name,
    url: `${origin}/`,
    description:
      "Residential tile, kitchen backsplashes, tile flooring, bathroom tilework (no plumbing), custom natural stonework, and outdoor patios & landscaping in Springfield and Central Illinois.",
    telephone: "+1-309-431-1805",
    image: `${origin}/src/assets/images/midwest_kitchen_backsplash_1795693260178.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: "US",
    },
    areaServed: CENTRAL_IL_AREAS,
    knowsAbout: [
      "Kitchen backsplash installation Springfield IL",
      "Tile flooring installation Springfield IL",
      "Decorative tile and natural stone backsplashes",
      "Shower and bathroom tile installation",
      "Custom interior and exterior stonework",
      "Limestone retaining walls",
      "Patios, walkways and hardscaping",
      "Landscape design and planting",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-309-431-1805",
        contactType: "customer service",
        areaServed: "US-IL",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-702-232-6150",
        contactType: "customer service",
        description: "Alternate phone line",
        areaServed: "US-IL",
        availableLanguage: "English",
      },
    ],
  };
}

function buildPersonNode(origin: string) {
  return {
    "@type": "Person",
    "@id": `${origin}/#andre`,
    name: site.person,
    telephone: "+1-309-431-1805",
    url: `${origin}/about`,
    worksFor: { "@id": `${origin}/#business` },
  };
}

function buildBreadcrumbList(
  origin: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${origin}${items[items.length - 1]?.path || "/"}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}

function buildServiceSchemaNode(
  origin: string,
  slug: string,
) {
  const srv = serviceBySlug(slug);
  if (!srv) return null;
  const cat = categoryById(srv.category);

  return {
    "@type": "Service",
    "@id": `${origin}/services/${srv.slug}#service`,
    name: srv.h1,
    serviceType: srv.name,
    category: cat.name,
    description: srv.seoDescription,
    url: `${origin}/services/${srv.slug}`,
    image: `${origin}${srv.image}`,
    provider: { "@id": `${origin}/#business` },
    areaServed: CENTRAL_IL_AREAS,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${srv.name} Scopes`,
      itemListElement: srv.typicalScopes.map((scope) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: scope,
          areaServed: "Springfield, Illinois",
          provider: { "@id": `${origin}/#business` },
        },
      })),
    },
  };
}

function buildCategorySchemaGraph(origin: string, categoryId: CategoryId) {
  const cat = categoryById(categoryId);
  const catServices = services.filter((s) => s.category === categoryId);
  const pageUrl = `${origin}${cat.route}`;

  return [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: `${cat.name} in Springfield, IL | ${site.name}`,
      description: cat.description,
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#business` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${origin}${cat.heroImage}`,
      },
      mainEntity: {
        "@type": "OfferCatalog",
        name: `${cat.name} Services — Springfield & Central Illinois`,
        itemListElement: catServices.map((srv) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: srv.name,
            description: srv.summary,
            url: `${origin}/services/${srv.slug}`,
            areaServed: "Springfield, Illinois",
            provider: { "@id": `${origin}/#business` },
          },
        })),
      },
    },
    buildBreadcrumbList(origin, [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: cat.name, path: cat.route },
    ]),
  ];
}

export function generatePageJsonLd(
  rawPathname: string,
  originInput?: string,
): Record<string, unknown> {
  const origin = (originInput || "https://andrepreer.com").replace(/\/+$/, "");
  const pathname =
    rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : "/";

  const baseGraph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: site.name,
      publisher: { "@id": `${origin}/#business` },
    },
    buildBusinessNode(origin),
    buildPersonNode(origin),
  ];

  // Category routes
  const categoryRouteMap: Record<string, CategoryId> = {
    "/kitchens": "kitchens",
    "/bathrooms": "bathrooms",
    "/tile-stonework": "tile-stonework",
    "/interior-improvements": "interior",
    "/outdoor-landscaping": "outdoor",
  };

  if (pathname in categoryRouteMap) {
    const catNodes = buildCategorySchemaGraph(origin, categoryRouteMap[pathname]);
    return {
      "@context": "https://schema.org",
      "@graph": [...baseGraph, ...catNodes],
    };
  }

  // Individual Service Detail routes
  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "");
    const srv = serviceBySlug(slug);
    const serviceNode = buildServiceSchemaNode(origin, slug);
    if (srv && serviceNode) {
      const cat = categoryById(srv.category);
      return {
        "@context": "https://schema.org",
        "@graph": [
          ...baseGraph,
          {
            "@type": "WebPage",
            "@id": `${origin}/services/${srv.slug}#webpage`,
            url: `${origin}/services/${srv.slug}`,
            name: srv.seoTitle,
            description: srv.seoDescription,
            isPartOf: { "@id": `${origin}/#website` },
            mainEntity: { "@id": `${origin}/services/${srv.slug}#service` },
          },
          serviceNode,
          buildBreadcrumbList(origin, [
            { name: "Home", path: "/" },
            { name: cat.name, path: cat.route },
            { name: srv.name, path: `/services/${srv.slug}` },
          ]),
        ],
      };
    }
  }

  // Services index page
  if (pathname === "/services") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...baseGraph,
        {
          "@type": "CollectionPage",
          "@id": `${origin}/services#webpage`,
          url: `${origin}/services`,
          name: "All Residential Services in Springfield, IL | Andre Preer",
          description:
            "Kitchen backsplashes, tile flooring, bathroom tile (no plumbing), natural stonework, interior upgrades, and outdoor living.",
          mainEntity: {
            "@type": "OfferCatalog",
            name: "Andre Preer Residential Craftsmanship Catalog",
            itemListElement: categories.map((cat) => ({
              "@type": "OfferCatalog",
              name: cat.name,
              url: `${origin}${cat.route}`,
            })),
          },
        },
        buildBreadcrumbList(origin, [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    };
  }

  // Projects / Gallery page
  if (pathname === "/projects" || pathname === "/portfolio") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...baseGraph,
        {
          "@type": "CollectionPage",
          "@id": `${origin}/projects#webpage`,
          url: `${origin}/projects`,
          name: "Projects & Material Inspiration Gallery | Andre Preer",
          description:
            "Kitchen backsplash, tile flooring, bathroom tile, natural stonework, interior, and outdoor living design inspiration.",
          mainEntity: {
            "@type": "ImageGallery",
            name: "Andre Preer Residential Design Inspiration",
            associatedMedia: editorialGallery.map((item) => ({
              "@type": "ImageObject",
              name: item.title,
              caption: item.caption,
              contentUrl: `${origin}${item.image}`,
            })),
          },
        },
        buildBreadcrumbList(origin, [
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]),
      ],
    };
  }

  // Process page
  if (pathname === "/process") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...baseGraph,
        {
          "@type": "HowTo",
          "@id": `${origin}/process#howto`,
          name: "How a Residential Tile, Stonework, or Kitchen Project Works with Andre Preer",
          description:
            "From initial phone consultation and on-site walkthrough to clear written scope and clean installation in Springfield, IL.",
          step: processSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.summary,
          })),
        },
        buildBreadcrumbList(origin, [
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]),
      ],
    };
  }

  // About page
  if (pathname === "/about") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...baseGraph,
        {
          "@type": "AboutPage",
          "@id": `${origin}/about#webpage`,
          url: `${origin}/about`,
          name: `About ${site.person} | Springfield, IL`,
          mainEntity: { "@id": `${origin}/#andre` },
        },
        buildBreadcrumbList(origin, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    };
  }

  // Contact page
  if (pathname === "/contact") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        ...baseGraph,
        {
          "@type": "ContactPage",
          "@id": `${origin}/contact#webpage`,
          url: `${origin}/contact`,
          name: "Request a Tile, Backsplash, Stonework or Landscape Estimate | Andre Preer",
          mainEntity: { "@id": `${origin}/#business` },
        },
        buildBreadcrumbList(origin, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    };
  }

  // Default Homepage schema
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph,
      {
        "@type": "WebPage",
        "@id": `${origin}/#webpage`,
        url: `${origin}/`,
        name: "Andre Preer | Kitchen Backsplashes, Tile Flooring & Stonework — Springfield, IL",
        description: site.supportingStatement,
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${origin}/#business` },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${origin}/#catalog`,
        name: "Springfield & Central Illinois Tile, Stonework, Kitchen & Outdoor Services",
        itemListElement: services.map((srv) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: srv.name,
            url: `${origin}/services/${srv.slug}`,
            areaServed: "Springfield, Illinois",
            provider: { "@id": `${origin}/#business` },
          },
        })),
      },
    ],
  };
}
