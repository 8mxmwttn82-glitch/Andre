export const projectTypes = [
  { value: "backsplash-installation", label: "Kitchen backsplash installation" },
  { value: "tile-flooring", label: "Tile flooring (kitchen, bath, entry, living areas)" },
  { value: "decorative-stone-backsplash", label: "Decorative tile or natural stone backsplash" },
  { value: "bathroom-tile-shower", label: "Bathroom or shower tile (tile & stone only, no plumbing)" },
  { value: "custom-tile-stonework", label: "Custom interior tile or natural stonework" },
  { value: "interior-stone-hearths", label: "Interior stone fireplace hearth or accent wall" },
  { value: "full-kitchen-remodels", label: "Kitchen surface refresh (backsplash, cabinets, counters)" },
  { value: "cabinets", label: "Kitchen cabinets — new or refacing" },
  { value: "countertops", label: "Kitchen countertops" },
  { value: "limestone-walls-stonework", label: "Exterior limestone walls & stonework" },
  { value: "patios-hardscaping-outdoor-living", label: "Stone patios, walkways & hardscaping" },
  { value: "landscape-design-installation", label: "Landscape design, trees & planting" },
  { value: "fire-features", label: "Fire pit, fire deck or gathering space" },
  { value: "specialty-stone-water", label: "Specialty cobble, pebble or water stonework" },
  { value: "interior-exterior", label: "Multiple tile, stone & outdoor projects" },
] as const;

export const budgets = [
  { value: "under-5000", label: "Under $5,000" },
  { value: "5000-15000", label: "$5,000 – $15,000" },
  { value: "15000-40000", label: "$15,000 – $40,000" },
  { value: "40000-plus", label: "$40,000 or more" },
  { value: "discuss", label: "Prefer to discuss on site" },
] as const;

export const contactMethods = [
  { value: "phone", label: "Phone call" },
  { value: "text", label: "Text message" },
  { value: "either", label: "Call or text" },
] as const;

export type ProjectTypeValue = (typeof projectTypes)[number]["value"];
export type BudgetValue = (typeof budgets)[number]["value"];
export type ContactMethodValue = (typeof contactMethods)[number]["value"];

export function projectTypeLabel(value: string): string {
  return projectTypes.find((item) => item.value === value)?.label ?? value;
}

export function budgetLabel(value: string): string {
  return budgets.find((item) => item.value === value)?.label ?? value;
}

export function contactMethodLabel(value: string): string {
  return contactMethods.find((item) => item.value === value)?.label ?? value;
}
