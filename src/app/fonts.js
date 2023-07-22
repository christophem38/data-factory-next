import {
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Sans,
  Playfair_Display
} from "next/font/google";

export const ibm_plex_sans_c = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const ibm_plex_s = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})
