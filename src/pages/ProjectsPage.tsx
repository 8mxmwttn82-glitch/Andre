import {
  ChevronLeft,
  ChevronRight,
  Download,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { editorialGallery, type GalleryItem } from "../data/site";

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

const STORAGE_KEY = "andrepreer_custom_projects_v1";

const galleryCategories: ("All" | GalleryItem["category"])[] = [
  "All",
  "Kitchens",
  "Backsplashes",
  "Bathrooms",
  "Tile & Stonework",
  "Interior",
  "Outdoor",
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState<"All" | GalleryItem["category"]>("All");
  const [customItems, setCustomItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as GalleryItem[]) : [];
    } catch {
      return [];
    }
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [managerOpen, setManagerOpen] = useState(false);

  // Form state for adding authentic completed project photos
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<GalleryItem["category"]>("Backsplashes");
  const [newLocation, setNewLocation] = useState("Springfield, IL");
  const [newMaterials, setNewMaterials] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [newImageData, setNewImageData] = useState("");
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customItems));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [customItems]);

  const allItems = [...customItems, ...editorialGallery];
  const visibleItems =
    filter === "All" ? allItems : allItems.filter((item) => item.category === filter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleItems.length) % visibleItems.length,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, visibleItems.length]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadError("Please select an image file (JPEG, PNG, or WebP).");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setUploadError("Please choose an image under 4 MB.");
      return;
    }
    setUploadError("");
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setNewImageData(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newImageData) {
      setUploadError("Provide a project title and upload a photograph.");
      return;
    }
    const item: GalleryItem = {
      id: `proj-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      image: newImageData,
      alt: `${newTitle.trim()} — completed residential craftsmanship by Andre Preer in ${newLocation.trim() || "Central Illinois"}.`,
      caption: newCaption.trim() || "Completed residential project photograph.",
      materials: newMaterials
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean),
      status: "Completed Project",
      location: newLocation.trim() || "Central Illinois",
    };
    setCustomItems((prev) => [item, ...prev]);
    setNewTitle("");
    setNewMaterials("");
    setNewCaption("");
    setNewImageData("");
    setUploadError("");
    setManagerOpen(false);
    setFilter("All");
  };

  const removeCustomItem = (id: string) => {
    setCustomItems((prev) => prev.filter((item) => item.id !== id));
    setLightboxIndex(null);
  };

  const exportManifest = () => {
    const blob = new Blob([JSON.stringify(customItems, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "andrepreer-completed-projects.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const activeLightboxItem =
    lightboxIndex !== null ? visibleItems[lightboxIndex] : undefined;

  return (
    <div>
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                Portfolio & Design Inspiration
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#1A1B19] sm:text-5xl">
                Material studies across kitchens, baths, stonework, and grounds.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#57534C]">
                Editorial inspiration imagery below illustrates the level of finish and material
                pairing across Andre’s categories and is never presented as completed client work.
                Add authentic job photographs below as projects are documented.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setManagerOpen((prev) => !prev)}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-[#1F3A2E] bg-white px-4 py-2 text-xs font-semibold text-[#1F3A2E] transition-colors hover:bg-[#1F3A2E] hover:text-white whitespace-nowrap shrink-0"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                {managerOpen ? "Close Photo Manager" : "Add Completed Project Photo"}
              </button>
              {customItems.length > 0 && (
                <button
                  type="button"
                  onClick={exportManifest}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-md border border-[#D4CEC3] bg-white px-3.5 py-2 text-xs font-medium text-[#1A1B19] hover:border-[#1A1B19] whitespace-nowrap shrink-0"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  Export Added Photos ({customItems.length})
                </button>
              )}
            </div>
          </div>

          {/* Expandable Portfolio Photo Uploader & Organizer */}
          {managerOpen && (
            <form
              onSubmit={handleAddProject}
              className="mt-8 rounded-xl border border-[#D4CEC3] bg-white p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#EFECE6] pb-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-[#1A1B19]">
                    Upload & Organize Completed Project Photography
                  </h2>
                  <p className="mt-1 text-xs text-[#57534C]">
                    Photos added here display immediately in the portfolio under “Completed Project”
                    and can be exported to update the live site catalog.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setManagerOpen(false)}
                  aria-label="Close photo manager"
                  className="text-[#57534C] hover:text-[#1A1B19]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {uploadError && (
                <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-xs text-red-800">
                  {uploadError}
                </p>
              )}

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., Zellige Kitchen Backsplash"
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC3] px-3 py-2 text-base sm:text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as GalleryItem["category"])}
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC3] px-3 py-2 text-base sm:text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:outline-none"
                  >
                    {galleryCategories
                      .filter((c) => c !== "All")
                      .map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    City / Town
                  </label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="Springfield, IL"
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC3] px-3 py-2 text-base sm:text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    Materials (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newMaterials}
                    onChange={(e) => setNewMaterials(e.target.value)}
                    placeholder="Glazed ceramic tile, warm white grout, honed quartzite"
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC3] px-3 py-2 text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    Photograph File *
                  </label>
                  <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-[#B8B2A7] bg-[#F8F6F2] px-3 py-2 text-xs font-medium text-[#1A1B19] hover:border-[#1F3A2E]">
                    <Upload className="h-4 w-4 text-[#1F3A2E]" aria-hidden="true" />
                    {newImageData ? "Photo Ready — Click to Replace" : "Choose Image"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="sr-only"
                    />
                  </label>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-[#1A1B19]">
                    Craftsmanship Caption
                  </label>
                  <input
                    type="text"
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                    placeholder="Short note describing the layout, stone jointing, or scope completed."
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC3] px-3 py-2 text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-[#1F3A2E] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#162B22]"
                >
                  Save to Gallery
                </button>
              </div>
            </form>
          )}

          {/* Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter gallery by project category"
            className="mt-8 flex flex-wrap gap-2"
          >
            {galleryCategories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? "bg-[#1F3A2E] text-white"
                      : "border border-[#D4CEC3] bg-white text-[#57534C] hover:border-[#1A1B19] hover:text-[#1A1B19]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10 lg:py-16">
          {visibleItems.length === 0 ? (
            <div className="rounded-xl border border-[#E2DDD4] bg-white p-12 text-center">
              <p className="text-sm text-[#57534C]">
                No photos currently listed in {filter}. Try another category or add a completed
                project photo.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item, idx) => {
                const isCustom = item.status === "Completed Project";
                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-[#E2DDD4] bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="text-left focus-visible:outline-2 focus-visible:outline-[#1F3A2E]"
                    >
                      <EditorialImage
                        src={item.image}
                        alt={item.alt}
                        aspectClass="aspect-[4/3]"
                        label={
                          isCustom && item.location
                            ? `${item.status} · ${item.location}`
                            : item.status
                        }
                      />
                    </button>

                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <p className="text-xs text-[#57534C]">
                          {item.category}
                          {item.materials.length > 0 && ` · ${item.materials.join(" · ")}`}
                        </p>
                        <h2 className="mt-1.5 font-display text-2xl font-semibold text-[#1A1B19]">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-[#57534C]">
                          {item.caption}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-[#EFECE6] pt-3">
                        <button
                          type="button"
                          onClick={() => setLightboxIndex(idx)}
                          className="text-xs font-semibold text-[#1F3A2E] hover:underline"
                        >
                          Inspect Full Frame
                        </button>
                        {isCustom && (
                          <button
                            type="button"
                            onClick={() => removeCustomItem(item.id)}
                            aria-label={`Remove ${item.title}`}
                            className="inline-flex items-center gap-1 text-xs text-[#57534C] hover:text-red-700"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Accessible Fullscreen Lightbox */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#111210]/95 p-4 text-white sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs text-[#C9C3B8] tabular-nums">
              {lightboxIndex + 1} / {visibleItems.length} · {activeLightboxItem.status}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#343631] bg-[#1A1B19] text-white hover:bg-[#2E302C]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mx-auto flex max-h-[72vh] w-full max-w-5xl items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + visibleItems.length) % visibleItems.length,
                )
              }
              aria-label="Previous image"
              className="absolute left-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={activeLightboxItem.image}
              alt={activeLightboxItem.alt}
              className="max-h-[70vh] w-auto rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % visibleItems.length)}
              aria-label="Next image"
              className="absolute right-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-2xl font-semibold text-white">
              {activeLightboxItem.title}
            </h3>
            <p className="mt-1 text-xs text-[#C9C3B8]">{activeLightboxItem.caption}</p>
          </div>
        </div>
      )}

      <CtaBand
        heading="Ask to walk a completed local job in person."
        body="Design inspiration is a starting point. Call 309-431-1805 or request a consultation to discuss materials and see craftsmanship firsthand."
        onNavigate={onNavigate}
      />
    </div>
  );
}
