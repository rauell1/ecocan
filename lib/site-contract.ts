export const CORE_ROUTES = {
  home: "/",
  solutions: "/solutions",
  about: "/about-us",
  news: "/news",
  contact: "/contact",
  market: "/ecocan-market",
  ecoFriendlyCans: "/eco-friendly-cans",
  download: "/download",
} as const;

export const NAV_ROUTES = [
  { href: CORE_ROUTES.home, label: "Home" },
  { href: CORE_ROUTES.solutions, label: "Solutions" },
  { href: CORE_ROUTES.about, label: "About us" },
  { href: CORE_ROUTES.news, label: "News" },
] as const;

export const HOME_TABS = [
  "ECOnsumer",
  "ECO-Station",
  "ECO-Producer",
  "ECO-Events",
] as const;

export type HomeTab = (typeof HOME_TABS)[number];

export const DEFAULT_HOME_TAB: HomeTab = "ECOnsumer";

export const SOLUTION_SECTIONS = [
  "brand-protection",
  "brand-promotion",
  "packaging-recycling",
] as const;

export type SolutionSection = (typeof SOLUTION_SECTIONS)[number];

export const isValidHomeTab = (tab: string): tab is HomeTab =>
  HOME_TABS.includes(tab as HomeTab);

export const isValidSolutionSection = (
  section: string
): section is SolutionSection =>
  SOLUTION_SECTIONS.includes(section as SolutionSection);
