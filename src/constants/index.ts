import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { GoDeviceDesktop } from "react-icons/go";
import { ITheme } from "~/types";

export const tmdb_constants = [
  {
    title: "Trending movies",
    category: "movie",
    type: "popular",
  },
  {
    title: "Top rated movies",
    category: "movie",
    type: "top_rated",
  },
  {
    title: "Trending series",
    category: "tv",
    type: "popular",
  },
  {
    title: "Top rated series",
    category: "tv",
    type: "top_rated",
  },
];

export const themeOptions: ITheme[] = [
  {
    title: "Dark",
    icon: BsMoonStarsFill,
  },
  {
    title: "Light",
    icon: FiSun,
  },
  {
    title: "System",
    icon: GoDeviceDesktop,
  },
];

export const footerLinks = [
  {
    title: "Column 1",
    links: [
      { name: "Home", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "About Us", href: "#" },
    ],
  },
  {
    title: "Column 2",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Column 3",
    links: [
      { name: "Recent Releases", href: "#" },
      { name: "Top Rated", href: "#" },
    ],
  },
];

export const sections = [
  {
    title: "Trending movies",
    category: "movie",
    type: "popular",
  },
  {
    title: "Top rated movies",
    category: "movie",
    type: "top_rated",
  },
  {
    title: "Trending series",
    category: "tv",
    type: "popular",
  },
  {
    title: "Top rated series",
    category: "tv",
    type: "top_rated",
  },
];