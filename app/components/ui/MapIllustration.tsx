"use client";

import React, { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// It's often safer to use the TopoJSON from a reliable CDN
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapIllustration() {
  const phnomPenhCoords: [number, number] = [104.9282, 11.5564];

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-20 px-4 select-none">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [20, 10],
        }}
        // Using a standard aspect ratio for the SVG
        viewBox="0 0 800 450"
        className="w-full h-auto opacity-60 dark:opacity-40"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2D3748" // matches dark-surface/border vibes
                stroke="#1A202C"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#4A5568", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        <Marker coordinates={phnomPenhCoords}>
          <g className="group cursor-pointer">
            {/* The Pulse */}
            <circle
              r={8}
              className="fill-brand-primary animate-ping opacity-40"
            />
            {/* The Dot */}
            <circle
              r={4}
              className="fill-brand-primary"
              stroke="#fff"
              strokeWidth={1}
            />

            {/* Simple CSS Tooltip logic via peer/group isn't as easy in SVG, 
                so we use a simple title tag for native browser tooltips if needed,
                or keep your existing absolute-positioned div logic. */}
            <title>Phnom Penh, Cambodia</title>
          </g>
        </Marker>
      </ComposableMap>
    </div>
  );
}
