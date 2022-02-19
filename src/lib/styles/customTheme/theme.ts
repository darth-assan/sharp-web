import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import fonts from "./fonts";

const breakpoints = createBreakpoints({
  sm: "40rem", // 640px
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "85.375em", // 1366
  "3xl": "90em", // 1440
  "4xl": "96em", // 1536
  "5xl": "108rem", // 1728
  "6xl": "120em", // 1920
});

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontSize: "md",
        // eslint-disable-next-line sonarjs/no-duplicate-string
        fontFamily: '"Poppins", sans-serif',
        lineHeight: "tall",
      },
    }),
  },
  breakpoints,
  fonts,
  fontSizes: {
    xx: ".55rem",
    tiny: ".68rem",
    "7xl": "5rem",
    "8xl": "6rem",
  },
  colors: {
    brand: {
      primary: "#FCC201",
      background: "#E5E5E5",
      sidebar: "#060B26",
      blue: "#0075FF",
      purpleDark: "#855CF8",
      purpleLight: "#ACB9FF",
      green: "#01B574",
      red: "#E31A1A",
      accent: "#FFEFB9",
    },
    primary: {
      500: "#E3A828",
      600: "#E3A828",
    },
    primaryButton: {
      500: "#FCC201",
      600: "#FCC201",
    },
    brandBlue: {
      500: "#0075FF",
      600: "#0075FF",
    },
    brandGreen: {
      500: "#01B574",
      600: "#01B574",
    },
    dangerColorScheme: {
      500: "#E31A1A",
      600: "#E31A1A",
    },
  },
  space: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "28rem",
    110: "30rem",
    115: "32rem",
    120: "35rem",
    122: "37rem",
    123: "40rem",
    125: "45rem",
    127: "48rem",
    130: "55rem",
    132: "57rem",
    135: "60rem",
    137: "65rem",
    139: "67rem",
    140: "70rem",
    145: "76rem",
    160: "97.5rem",
  },
  sizes: {
    14: "3.5rem",
    60: "15rem",
    66: "17.5rem",
    70: "18rem",
    80: "20rem",
    82: "21rem",
    85: "23rem",
    90: "25rem",
    95: "26rem",
    108: "27rem",
    109: "28rem",
    110: "30rem",
    115: "32rem",
    117: "33rem",
    120: "35rem",
    122: "37rem",
    123: "42rem",
    125: "45rem",
    127: "48rem",
    130: "55rem",
    132: "57rem",
    135: "60rem",
    137: "65rem",
    139: "67rem",
    140: "70rem",
    145: "76rem",
    160: "97.5rem",
  },
  shadows: {
    1000: "0 10px 20px 0 rgba(97, 111, 57, 0.5)",
    2000: "10px 10px 20px 0 rgba(0, 0, 0, 0.1);",
  },
});
