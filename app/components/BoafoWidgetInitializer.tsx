"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    } else {
      console.warn("Boafo API key not found. Please set NEXT_PUBLIC_BOAFO_API_KEY in your .env file.");
    }
  }, []);

  return null; // nothing to render
}
