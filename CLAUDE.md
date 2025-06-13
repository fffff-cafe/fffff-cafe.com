# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `yarn dev` - Start development server on port 3333
- `yarn build` - Build for production (generates static export)
- `yarn lint` - Run ESLint on TypeScript and TSX files

### Build Process
This is a Next.js project configured for static export (`output: "export"` in next.config.js). The build process generates a static site in the `out/` directory and includes sitemap generation.

## Architecture

This is a single-page website for FFFFF Cafe built with:
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Styled Components** for styling
- **Static site generation** for deployment

### Project Structure
- `app/` - Next.js App Router files (layout.tsx, page.tsx)
- `components/` - React components organized by sections
- `components/elements/` - Reusable UI elements (Section, SectionTitle, Icon, Link)
- `utils/constant.ts` - Color constants and global values
- `assets/styles.css` - Global styles
- `public/images/` - Static images

### Component Architecture
The main page (`app/page.tsx`) is composed of section components that render in this order:
1. CoverImageSection
2. ConceptSection
3. SystemSection
4. MoodSection
5. CalendarSection
6. MemberSection
7. NowSection
8. AccessSection
9. ContactSection
10. FooterSection
11. Header (positioned absolutely)

Each section uses the `Section` styled component from `components/elements` for consistent styling with the dark theme (`sectionBackgroundColorHex = "#201810"`).

### Styling
- Uses Styled Components with TypeScript
- Color scheme: primary color `#a22041`, section background `#201810`
- Responsive design with mobile-first approach
- Japanese typography with Noto Sans JP font

### Key Features
- Static site optimized for performance
- Google Analytics integration
- SEO optimization with meta tags and sitemap
- Responsive image handling
- External integrations (Google Maps, calendars, social media embeds)

### Development Notes
- Uses absolute imports from project root (configured in tsconfig.json)
- ESLint configuration includes React, TypeScript, and accessibility rules
- Husky pre-commit hooks with lint-staged for code quality
- TypeScript with strict null checks enabled but general strict mode disabled