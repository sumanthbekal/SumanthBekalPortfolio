# Audit Report: Live Portfolio (sumanth-bekal.vercel.app) vs Current Development Workspace

**Date of Audit:** October 9, 2026  
**Live Website URL:** [https://sumanth-bekal.vercel.app/](https://sumanth-bekal.vercel.app/)  
**Repository:** [https://github.com/sumanthbekal/SumanthBekalPortfolio.git](https://github.com/sumanthbekal/SumanthBekalPortfolio.git)  
**Workspace Path:** `C:\Users\ASUS\Documents\sumanthbekalporfolio`  
**Mode:** AUDIT & ANALYSIS ONLY — No website code or styles were changed during this audit.

---

## A. Audit Summary

### 1. What the Live Portfolio Currently Contains
The live website at `sumanth-bekal.vercel.app` is built with a **dark glassmorphic space theme** (Gold/Champagne accents `#D4AF37` / `#F7E7A1` on `#050505` black background with WebGL Three.js interactive galaxy particles):
- **Header:** Glass pill floating navbar with `sumanth.dev` text, navigation links (`Home`, `About`, `Skills`, `Projects`, `Clients`, `Experience`, `Certifications`, `Contact`), `Hire Me` sparkle CTA button, and `Resume` button.
- **Hero Section:** Emblem logo badge (`/logo.png`), status badge (`AI Automation • Computer Vision • Shopify`), headline `"Hello, I'm Sumanth Bekal"` (gold gradient), subtitle `"Shopify Developer | AI Engineer"`, bio paragraph, 3 CTA buttons (`View Projects`, `Download Resume`, `Contact Me`), social connect icons (GitHub, LinkedIn, Email, WhatsApp), and 3 SaaS feature bento cards on the right (`AI & Automation`, `Shopify Solutions`, `Full-Stack Engineering`).
- **About Me Section:** Bento grid layout with 4 glass cards:
  1. *Who I Am & Professional Focus* (Klientship Tech Shopify Developer & B.E. Degree)
  2. *Education & Academic Score* (Sahyadri College of Engineering & Management, CGPA: 7.5)
  3. *Core Expertise* (Shopify Liquid, YOLOv8, Python Flask)
  4. *My Philosophy* (Visual aesthetics + rock-solid performance)
- **Skills & Technologies Section:** 6 categories with custom icons/images (`Shopify Development`, `AI & Machine Learning`, `Programming Languages`, `Web Development`, `Databases & Storage`, `Developer Tools`). Desktop displays a 3x2 grid; Mobile displays an auto-sliding touch-friendly carousel.
- **Featured Projects Section:** 5 projects (`SMART Robot`, `Arecanut Sortbot`, `ANPR`, `Artificial Vision Using YOLO`, `Enterprise Leave Management System`). Includes interactive video demo modals, tags, metrics, and modal details.
- **Client Websites Section (`#client-projects`):** 14 brand storefronts displayed in a glass bento grid with live status badges (`Luv2Eat`, `Karigar's Knot`, `Scentual Perfumes`, `LASUB`, `Bonita Edit`, `QUIDLAB`, `Lovey Dovey Store`, `Baking Lounge Supply Store`, `Robotics Kits`, `Care Natural`, `Aroveda Life`, `Mevaldi`, `Manya Threads`, `NDCC Agro SeedX`). Mobile shows 4 cards with an expandable `"View All Client Stores (14)"` button.
- **Work & Internship Experience Section (`#experience`):** Vertical timeline with 3 career stages:
  1. *Shopify Developer* at Klientship Technologies Pvt. Ltd (May 2025 – Present)
  2. *Machine Learning Intern* at AIRAT SYSTEMS LLP (Jan 2025 – May 2025)
  3. *Android Developer Intern* at Coding Key LLP (Oct 2023 – Nov 2023)
- **Certifications & Courses Section (`#certifications`):** 4 verified industry credentials with shield badges:
  1. *Database and SQL* (Infosys Springboard)
  2. *Introduction to Natural Language Processing* (Great Learning Academy)
  3. *JobReady Employability Skills* (Wadhwani Foundation)
  4. *Explore Machine Learning using Python* (Infosys Springboard)
- **Direct Contact & Message Form Section (`#contact`):** Two columns:
  - Left column: Direct contact cards (Email, Phone `+91 7338211884`, WhatsApp link) and social profiles.
  - Right column: Full interactive message form (Name, Email, Subject, Message, Send Message button).
- **Footer:** Brand logo badge, copyright `© 2026 Sumanth Bekal`, navigation links, and floating scroll-to-top button.

---

### 2. What the Current Local Development Contains
The local workspace currently contains the **Editorial Brutalist redesign** that was being crafted to match the reference screenshot (`#F5F3EE` warm paper background, `#111111` dark text, `#C7F000` lime-green accents, thin `#C9C7C0` borders):
- **Header:** Monogram `SB/` with subtitle `SUMANTH BEKAL / AI ENGINEER & DEVELOPER`, links, and `LET'S TALK ↗` button.
- **Hero:** Solid `SUMANTH` + Outlined `BEKAL`, intro statement, high-res profile cutout (`/images/sumanth-hero.png`) facing right with transparent background, handwritten note, and right-hand availability panel.
- **Featured Projects:** 4-card horizontal video row with local MP4 videos (`SMART Robot`, `Arecanut Sortbot`, `ANPR`, `Artificial Vision`).
- **Client Websites:** Dark section (`#111111`) with single horizontal carousel displaying all 18 client brands with crisp official brand logos and working `<` and `>` arrow navigation.
- **About Me & Skills:** Editorial 2-column section with portrait, 4 experience metrics, and 20 bordered skill tags.
- **Contact & Footer:** High-contrast dark footer with headline `"LET'S BUILD SOMETHING AMAZING."`, resume link, email, and social icons.

---

### 3. The Most Important Differences
1. **Sections on Live Site that are completely absent in the local development view:**
   - **Work & Internship Experience Timeline (`#experience`)** with detailed role bullet points (Klientship, AIRAT, Coding Key) is missing from the local homepage.
   - **Certifications & Courses Section (`#certifications`)** (Infosys, Great Learning, Wadhwani Foundation) is missing from the local homepage.
   - **Interactive Contact Form** (Name, Email, Subject, Message form) is missing locally (local only has email link).
   - **Direct Phone & WhatsApp** contact details (`+91 7338211884`) are on the live site but absent locally.
   - **Project 05 (Enterprise Leave Management System)** exists on the live site but was omitted from the 4-card brutalist row.
   - **Project Video Demo Modal Popup** (detailed modal with tech stack and metrics) exists on the live site but is absent locally.
2. **Design Language Divergence:**
   - The live site is **Dark Glassmorphic Gold / Space** (`#050505` + `#D4AF37` + Galaxy particles).
   - The local site is **Editorial Brutalist Light / Dark** (`#F5F3EE` + `#111111` + `#C7F000` lime).
3. **Client Projects presentation:**
   - Live site displays a 3x2 glass bento grid with 14 cards and an expandable mobile list.
   - Local site displays a horizontal single carousel with 18 client logos, auto-scroll capability, and working previous/next controls.

---

## B. Comparison Table: Live Website vs Current Local Project

| Section / Feature | Live Website (`sumanth-bekal.vercel.app`) | Current Local Project (`sumanthbekalporfolio`) | Required Action | Status Category |
| :--- | :--- | :--- | :--- | :--- |
| **Global Theme & Styling** | Dark Space Glassmorphism (`#050505`, gold `#D4AF37`, 3D galaxy particles) | Editorial Brutalism (`#F5F3EE`, `#111111`, lime `#C7F000`, thin `#C9C7C0` borders) | Decide whether to keep Editorial Brutalism or bring back the glassmorphic dark theme, or harmonize both | Present but needs improvement |
| **Header & Navbar** | Floating glass pill, logo badge, `sumanth.dev`, 8 nav links, `Hire Me` button | Fixed top border bar, `SB/` monogram, uppercase text, `LET'S TALK` button | Harmonize navigation links (add Experience & Certifications to nav) | Present but needs improvement |
| **Hero Section (Bio & Heading)** | `"Hello, I'm Sumanth Bekal"`, subtitle, bio, 3 CTA buttons | Solid `SUMANTH` / Outlined `BEKAL`, technical tags, intro statement, 2 buttons | Preserved in brutalist style; bio content matches | Present and working |
| **Hero Profile Portrait** | None (used 3 SaaS feature bento cards instead of a personal photo) | High-res black & white cutout portrait (`/images/sumanth-hero.png`), facing right with transparent background | Keep local portrait; it successfully gives personal identity | Present and working |
| **Hero Feature Cards / Panel** | 3 SaaS glass cards (AI & Automation, Shopify Solutions, Full-Stack Engineering) | Availability panel with services list, desk setup, and signature | Preserved as editorial sidebar | Present and working |
| **Featured Projects Section** | 5 projects (`SMART`, `Arecanut Sortbot`, `ANPR`, `Artificial Vision`, `Enterprise Leave System`) | 4 projects (`SMART`, `Arecanut`, `ANPR`, `Artificial Vision`) with local MP4s | Add 5th project (Enterprise Leave System) or modal details | Present but needs improvement |
| **Project Video Playback** | Video tag with `poster`, custom hover play button, and full modal trigger | Video tag with `poster`, autoplay on intersection, custom play indicator | Add Project Details modal like live site | Present but needs improvement |
| **Client Websites Section** | 14 client stores in 3x2 glass grid with live indicator and mobile expand | 18 client stores in horizontal carousel with crisp brand logos and working controls | Keep single carousel with logos; ensure all 18 store links work | Present and working |
| **Work & Internship Experience** | Detailed vertical timeline with 3 companies (Klientship, AIRAT, Coding Key) and bullet points | **Missing** from local homepage view | Re-introduce Experience section into local project | **Missing** |
| **Certifications Section** | 4 verified credentials (Infosys Database/SQL, Great Learning NLP, Wadhwani, Infosys ML) | **Missing** from local homepage view | Re-introduce Certifications section into local project | **Missing** |
| **Skills & Technologies** | 6 categories (Shopify, AI/ML, Languages, Web, Databases, Tools) with icons and mobile carousel | 20 bordered skill tags in right column of About section | Expand tags to cover all 6 categories or add category badges | Present but needs improvement |
| **About Me Section** | 4 Bento glass cards (Who I Am, Education/CGPA 7.5, Core Expertise, Philosophy) | 2-column layout with photo, bio, and 4 stat metrics | Merge education (CGPA 7.5, Sahyadri College) and philosophy | Present but needs improvement |
| **Contact Section** | Direct contacts (Email, Phone, WhatsApp) + Interactive Message Form | Direct contacts (Email, Social links) without interactive message form | Add Contact form (Name, Email, Message) and Phone/WhatsApp | Present but needs improvement |
| **Footer** | Glass footer with logo, copyright, back-to-top button | Dark footer with bold headline, social links, location metadata | Add back-to-top button | Present and working |
| **Resume Download** | Functional link to `/resume.pdf` | Functional link to `/resume.pdf` | Verified working in both | Present and working |

---

## C. Missing Sections and Features

1. **Work & Internship Experience Section (`#experience`)**
   - **What needs to be added:** A dedicated timeline section detailing Sumanth's 3 real career positions:
     - *Shopify Developer* — Klientship Technologies Pvt. Ltd (May 2025 – Present, Mangalore)
     - *Machine Learning Intern* — AIRAT SYSTEMS LLP (Jan 2025 – May 2025, Mangalore)
     - *Android Developer Intern* — Coding Key LLP (Oct 2023 – Nov 2023, Remote)
   - **Content:** The exact bullet points describing theme development, Liquid customization, edge ML deployment with YOLOv8, and Android development.

2. **Certifications & Courses Section (`#certifications`)**
   - **What needs to be added:** The 4 verified credentials:
     - *Database and SQL* — Infosys Springboard
     - *Introduction to Natural Language Processing* — Great Learning Academy
     - *JobReady Employability Skills* — Wadhwani Foundation
     - *Explore Machine Learning using Python* — Infosys Springboard

3. **Interactive Contact Form & Direct Phone/WhatsApp**
   - **What needs to be added:** An interactive contact form (Name, Email, Subject, Message) plus direct WhatsApp link (`https://wa.me/917338211884`) and phone number (`+91 7338211884`).

4. **Project 05 & Project Detail Modal**
   - **What needs to be added:** The 5th project (*Enterprise Leave Management System* — Python, Flask, MySQL, Bootstrap) and an interactive modal when clicking "View Project" or "Watch Demo" that displays full architecture, tech stack, and GitHub links.

5. **Navigation Links in Header & Drawer**
   - **What needs to be added:** Add `#experience` and `#certifications` to the navbar so visitors can jump directly to these sections.

---

## D. Improvements Required in Existing Sections

1. **Hero Section:**
   - Already has the new profile portrait (`/images/sumanth-hero.png`) and clean brutalist typography. Ensure that on smaller mobile screens (< 380px), the oversized heading scales cleanly without line break artifacts.
2. **Featured Projects:**
   - Add a detail view/modal when clicking on a card so the user can see full metrics and tech stacks without navigating away.
3. **About Me:**
   - Ensure academic details (Sahyadri College of Engineering & Management, CGPA: 7.5) and professional background (Klientship Technologies) are highlighted alongside the 4 stat counters.
4. **Client Websites:**
   - Maintain the single clean carousel with official brand logos and ensure smooth touch-swipe and arrow button navigation remain responsive.

---

## E. Existing Assets Inventory

All real assets are preserved locally in the workspace:
- **Profile Portrait:** `public/images/sumanth-hero.png` (High-resolution transparent cutout, facing right)
- **Original Reference Portrait:** `public/sumanth-hero-clean.png`, `public/sumanth-about.png`
- **Signature & Workspace:** `public/sumanth-signature.png`, `public/workspace-setup.png`
- **Project Videos:**
  - `public/Video/smart-robot.mp4`
  - `public/Video/arecanut-sortbot.mp4`
  - `public/Video/anpr.mp4`
  - `public/Video/artificial-vision.mp4`
- **Project Images & Posters:**
  - `public/projects/smart.png` / `public/projects/smart-ref.png`
  - `public/projects/sortbot.png` / `public/projects/sortbot-ref.png`
  - `public/projects/anpr.png` / `public/projects/anpr-ref.png`
  - `public/projects/aivision.png` / `public/projects/aivision-ref.png`
  - `public/projects/automation.png` (Leave Management System)
- **Client Logos:**
  - `public/clients/luv2eat.png`
  - `public/clients/karigarsknot.png` / `public/clients/karigarsknot-dark.png`
  - `public/clients/scentual.png` / `public/clients/scentual-dark.png`
  - `public/clients/lasub.png`
  - `public/clients/bonitaedit.png`
  - `public/clients/quidlab.png`
  - `public/clients/loveydovey.png`
  - `public/clients/bakinglounge.png`
  - `public/clients/roboticskits.png`
  - `public/clients/carenatural.png`
  - `public/clients/arovedalife.png`
  - `public/clients/mevaldi.png`
  - `public/clients/manyathreads.png`
  - `public/clients/ndccagroseedx.png`
- **Resume:** `public/resume.pdf`

---

## F. Functionality & Responsive Findings

1. **Compilation / Server Error Notice:**
   - Next.js development server threw a fast-refresh cache error: `[TypeError: __webpack_modules__[moduleId] is not a function]`. Running `next build` verified that the production build compiles with **0 errors**. The dev server simply required a clean `.next` cache restart.
2. **Carousel Navigation:**
   - The single carousel with previous (`<`) and next (`>`) arrow controls is functional, with boundary disabled states, keyboard arrow support, and touch gesture scrolling.
3. **Video Playback:**
   - Local MP4 videos lazy-load on IntersectionObserver and auto-pause when out of viewport.
4. **Responsive Layouts:**
   - Desktop: Multi-column grid with clean borders.
   - Tablet/Mobile: Responsive flex column layout with touch carousel for client cards.

---

## G. Implementation Checklist (For Future Implementation Prompt)

### Priority 1 — Critical Missing Sections & Content
- [ ] **Experience Timeline Component:** Build an editorial brutalist `Experience.tsx` featuring the 3 roles from Klientship Technologies, AIRAT Systems, and Coding Key with date badges and bullet points.
- [ ] **Certifications Component:** Build a `Certifications.tsx` featuring the 4 verified credentials from Infosys Springboard, Great Learning Academy, and Wadhwani Foundation.
- [ ] **Contact Form & Communication Links:** Add the interactive form (Name, Email, Subject, Message) and direct WhatsApp/Phone contact cards to `ContactFooter.tsx`.

### Priority 2 — Essential Content & Navigation
- [ ] **Update Navbar Links:** Add `EXPERIENCE` and `CERTIFICATIONS` to `Navbar.tsx` and the mobile navigation drawer.
- [ ] **Include 5th Project:** Add `Enterprise Leave Management System` (Python/Flask/MySQL) to projects.
- [ ] **Add Education & Academic Credentials:** Incorporate Sahyadri College of Engineering (B.E. in AI & ML, CGPA: 7.5) into the About section.

### Priority 3 — Design & Interaction Enhancements
- [ ] **Project Detail Modal:** Add an accessible modal when clicking a project to view architecture, metrics, and GitHub links.
- [ ] **Scroll-to-top button:** Add smooth scroll-to-top button in footer.

---

## H. Instructions for the Next Implementation Prompt

When ready to implement, follow these step-by-step instructions:
1. **Preserve What is Working:**
   - Do NOT touch or replace `public/images/sumanth-hero.png` or the Hero layout.
   - Do NOT replace or alter the 18 client logos or the single client carousel in `ClientWebsites.tsx`.
   - Maintain the editorial brutalist styling (`#F5F3EE`, `#111111`, `#C7F000`, thin `#C9C7C0` borders).
2. **Files to Create / Modify in the next prompt:**
   - Create `src/components/Experience.tsx` matching the editorial grid styling.
   - Create `src/components/Certifications.tsx` with credential badges.
   - Update `src/components/ContactFooter.tsx` to include the message form and WhatsApp/phone links.
   - Update `src/components/Navbar.tsx` with the new navigation items.
   - Update `src/components/Portfolio.tsx` to mount `<Experience />` and `<Certifications />`.
3. **Restart Clean Dev Cache:** Run `rm -rf .next` and `npm run dev` to ensure clean fast-refresh state.
