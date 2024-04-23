"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-inter)",
  },
  styles: {
    global: {
      body: {
        bg: "slate.900",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      variants: {
        borderDrop: {
          variant: "outline",
          color: "gray.100",
          borderWidth: 0.5,
          borderColor: "gray.600",
          _hover: { borderColor: "black" },
        },
      },
    },
  },
  config: {
    initialColorMode: "dark",
  },
  colors: {
    purple: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b",
    },
    black: "#0c1017",
    primary: {
      "50": "#f3f8fe",
      "100": "#d0e1fd",
      "200": "#a7c7fb",
      "300": "#74a6f9",
      "400": "#5693f7",
      "500": "#377ae7",
      "600": "#2f67c3",
      "700": "#26539c",
      "800": "#204684",
      "900": "#173360",
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
