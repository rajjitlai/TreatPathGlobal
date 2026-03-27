Build a complete Next.js 14 App Router website for a wood-derived raw materials marketplace called **Treat Path Global**. The tagline is **"Nature's Resources, Delivered to Your Door."**

## Tech Stack

- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- No additional UI libraries

---

## Brand Colours

| Token | Hex | Usage |
|---|---|---|
| Primary dark | `#3D2B1F` | Backgrounds, navbar |
| Accent | `#C17F24` | Buttons, highlights |
| Background | `#FAF7F2` | Page background |
| Text primary | `#1A1208` | Headings, body |
| Text muted | `#7A6652` | Captions, labels |

---

## Typography

- Headings: Google Font `Playfair Display`
- Body: Google Font `Inter`

Import both in `layout.tsx` via `next/font/google`.

---

## File Structure to Create

```
/app
  layout.tsx
  page.tsx
/components
  Navbar.tsx
  HeroSection.tsx
  AboutSection.tsx
  ProductsSection.tsx
  ProcessSection.tsx
  VendorCTA.tsx
  TestimonialsSection.tsx
  Footer.tsx
/public
  /images
    category-timber.jpg
    category-biomass.jpg
    category-logs.jpg
    about-facility.jpg
    cta-background.jpg
    testimonial-1.jpg
    testimonial-2.jpg
    testimonial-3.jpg
    texture-grain.jpg
  /videos
    hero-bg.mp4
    about-bg.mp4
    process-step1.mp4
    process-step2.mp4
    process-step3.mp4
```

> Note: All image and video files will be placed manually by the developer. Use these exact filenames in the code.

---

## Component Specifications

### 1. Navbar.tsx

- Fixed position, full width, `z-index: 50`
- On mount: transparent background with white text
- On scroll past 80px: smooth transition to `#3D2B1F` background with white text
- Logo text left: "Treat Path Global" in Playfair Display
- Nav links right: Home, Products, About, Vendors, Contact
- Mobile: hamburger menu with slide-down drawer animated via Framer Motion height from `0` to `auto`
- Transition: `300ms ease` on `background-color` and `backdrop-filter`
- When solid: add `box-shadow: 0 2px 20px rgba(0,0,0,0.15)`
- Use React `useState` and `useEffect` listening to `window.scrollY`

---

### 2. HeroSection.tsx

- Full viewport height (`h-screen`)
- HTML5 video background: `/public/videos/hero-bg.mp4`
  - Attributes: `autoPlay muted loop playsInline`
  - Static poster image fallback: `/public/images/category-timber.jpg`
- Dark overlay: `bg-black/40` over the video
- Parallax on video: use Framer Motion `useScroll` and `useTransform` to move video `y` from `0%` to `30%` as user scrolls down
- Centered text content over overlay:
  - Small uppercase label: "Northeast India's Timber Marketplace"
  - H1: "Nature's Resources, Delivered to Your Door" — Playfair Display, white, large
  - Subtext: "Connecting timber and biomass vendors with buyers across India"
  - Two buttons:
    - "Browse Products" — solid amber `#C17F24`, dark text
    - "List With Us" — outline white
- Scroll indicator: animated bouncing chevron arrow at bottom center
- All text: fade-up animation on load using Framer Motion, staggered delay between elements

---

### 3. AboutSection.tsx

- Two-column layout on desktop, stacked on mobile
- Left column:
  - HTML5 video: `/public/videos/about-bg.mp4`
  - Attributes: `autoPlay muted loop playsInline`
  - Rounded frame, aspect ratio 4:3, subtle shadow
- Right column:
  - Small label: "Who We Are"
  - H2: "Rooted in the Forests of Northeast India" — Playfair Display
  - Two paragraphs of placeholder body text about the company mission
  - Row of 3 stat boxes: "500+ Vendors", "12 Districts", "10,000+ Buyers" — amber accent numbers, muted label text
- Scroll-triggered animation:
  - Left column: fades in using Framer Motion `whileInView`, `once: true`
  - Right column: slides in from the right using Framer Motion `whileInView`, `once: true`
- Section background: `#FAF7F2`

---

### 4. ProductsSection.tsx

- Centered section heading: "Browse by Category"
- 3-column card grid on desktop, 1-column on mobile
- Cards:

| Image file | Category name | Description |
|---|---|---|
| `category-timber.jpg` | Sawn Timber | Premium grade teak and hardwood planks |
| `category-biomass.jpg` | Wood Chip Biomass | Processed biomass for industrial use |
| `category-logs.jpg` | Raw Logs | Unprocessed timber logs direct from source |

- Each card:
  - `next/image` component, aspect ratio 1:1, `object-cover`
  - Category name in Playfair Display
  - Short one-line description
  - "View Listings" link with amber underline
  - Hover effects via Tailwind `group-hover`:
    - Image scales to `1.05`
    - Warm amber overlay fades in: `bg-amber-900/20`
    - Card lifts with subtle shadow
    - All transitions: `duration-300 ease-in-out`
- Scroll-triggered staggered entrance: each card fades and slides up with `delay: index * 0.15s` using Framer Motion

---

### 5. ProcessSection.tsx

- Background: `#3D2B1F` (dark wood brown)
- All text: light colours
- Centered section heading: "From Forest to Your Doorstep" — Playfair Display, white
- 3-step horizontal layout on desktop, vertical stack on mobile
- Steps:

| Video file | Step number | Title | Description |
|---|---|---|---|
| `process-step1.mp4` | 01 | Sourced from the Forest | Timber and biomass ethically harvested from managed forests across Northeast India |
| `process-step2.mp4` | 02 | Processed and Graded | Materials are cut, sorted, and quality-graded at certified facilities |
| `process-step3.mp4` | 03 | Listed and Delivered | Verified vendors list products on our platform for buyers to discover and order |

- Each step:
  - Looping video clip in rounded container, `autoPlay muted loop playsInline`, height 200px, `object-cover`
  - Step number in large amber `#C17F24`
  - Step title in Playfair Display, white
  - Description in muted warm grey `#7A6652`
- Thin amber connector line between steps on desktop (hidden on mobile)
- Scroll-triggered animation: steps appear left to right with stagger using Framer Motion

---

### 6. VendorCTA.tsx

- Full width section, minimum height 500px
- Background: `next/image` with `fill` and `object-cover` using `/public/images/cta-background.jpg`
- Parallax on background image: Framer Motion `useScroll` + `useTransform`, image `y` moves from `-10%` to `10%` on scroll
- Dark overlay: `bg-black/50`
- Centered content over overlay:
  - H2: "Grow Your Timber Business With Us" — Playfair Display, white
  - Subtext: "List your timber and biomass products and reach thousands of buyers across Northeast India"
  - CTA button: "Start Listing Today" — solid amber `#C17F24`, dark text `#1A1208`, large padding (`px-10 py-4`), rounded
- Scroll-triggered fade-in on all text content

---

### 7. TestimonialsSection.tsx

- Background: `#FAF7F2`
- Centered section heading: "Trusted by Vendors Across the Region"
- 3-column card grid on desktop, single column on mobile
- Each card:
  - White background, subtle shadow, rounded corners (`rounded-2xl`)
  - Avatar: `next/image`, circular, 64×64px
  - Name and location below avatar
  - 5 amber stars (render as SVG or Unicode ★)
  - Quote in italic body text
- Card data:

| Avatar | Name | Location | Quote |
|---|---|---|---|
| `testimonial-1.jpg` | Rajan Singh | Imphal, Manipur | "Treat Path Global helped me reach buyers I never could have found on my own. My timber sales have doubled in 6 months." |
| `testimonial-2.jpg` | Mohan Das | Dimapur, Nagaland | "The listing process was simple and the platform team was very supportive throughout." |
| `testimonial-3.jpg` | Bikash Sharma | Guwahati, Assam | "Best platform for timber and biomass in the Northeast. Highly recommended for any wood supplier." |

- Scroll-triggered staggered card entrance using Framer Motion

---

### 8. Footer.tsx

- Background: `#1A1208`
- 4-column layout on desktop, stacked on mobile
- Columns:

| Column | Content |
|---|---|
| 1 — Brand | "Treat Path Global" logo text + short brand description |
| 2 — Quick Links | Home, Products, About, Vendors, Contact |
| 3 — Contact | Email: info@treatpathglobal.com · Phone: +91-XXXXXXXXXX · Address: Imphal, Manipur, India |
| 4 — Follow Us | Social icon placeholders for Facebook, Instagram, WhatsApp |

- Bottom bar: copyright line `© 2025 Treat Path Global. All rights reserved.` and link to Privacy Policy
- All text: warm grey `#7A6652` with white for headings

---

## Global Requirements

- **Responsive:** Mobile first. Breakpoints at `md` (768px) and `lg` (1024px)
- **Reduced motion:** All Framer Motion animations must check `prefers-reduced-motion`. Wrap all animation variants with a check and disable motion if the user has reduced motion enabled
- **Video fallbacks:** All video elements must have a static `poster` image fallback
- **Image alt text:** All `next/image` components must have descriptive `alt` text
- **No video parallax on mobile:** Disable parallax on screens below 768px. Replace with static poster image
- **Performance:** Lazy load all images below the fold. Target Lighthouse score above 90
- **Smooth scroll:** Enable globally in `layout.tsx` via `html { scroll-behavior: smooth; }`
- **Exports:** Each component must use `export default`
- **Assembly:** `page.tsx` imports and renders all components in this order:
  1. Navbar
  2. HeroSection
  3. AboutSection
  4. ProductsSection
  5. ProcessSection
  6. VendorCTA
  7. TestimonialsSection
  8. Footer

---

## Follow-Up Prompts

Use these after the base is generated to refine individual sections.

### Add search and filter to Products section:
```
Add a search and filter bar above the product grid in ProductsSection. Include a text
input with a search icon and three filter pill buttons for "All", "Timber", "Biomass".
Filter pills use amber accent colour #C17F24 when active. Filtering is client-side only,
no API call needed.
```

### Add a Contact page:
```
Create a new file /app/contact/page.tsx. Build a contact page with a two-column layout.
Left side: company contact details and an embedded Google Maps placeholder iframe for
Imphal, Manipur. Right side: a form with fields — Name, Email, Phone, Product Interest
(dropdown: Timber, Biomass, Raw Logs), Message, and a Submit button in amber #C17F24.
Add basic client-side validation. No backend needed. On submit, show an inline success
message. Use the same Navbar and Footer as the homepage.
```

### Fix navbar mobile drawer animation:
```
Refine the Navbar mobile drawer. The drawer should animate open using Framer Motion
AnimatePresence with height animating from 0 to auto and opacity from 0 to 1, duration
0.3s ease. Each nav link inside the drawer should stagger in with a 0.05s delay between
items. Closing the drawer should reverse the animation.
```

### Add a Vendors listing page:
```
Create /app/vendors/page.tsx. Build a vendor listing page with a hero banner using
cta-background.jpg, a grid of vendor cards (placeholder data, 6 cards), and a
"Become a Vendor" CTA section at the bottom. Each vendor card shows: vendor name,
location, product category badge in amber, and a "View Products" button.
```
