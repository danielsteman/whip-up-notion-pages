"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-inter)",
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-b, orange.200, purple.300)",
        color: "slate.900",
      },
    },
  },
  components: {
    Button: {
      variants: {
        borderDrop: {
          variant: "outline",
          color: "slate.900",
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
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
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
