'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // =========================================================================
    // ACCURATE WORLD MAP & MAJOR COUNTRIES GEOGRAPHIC CLASSIFICATION
    // =========================================================================
    interface GlobeDot {
      lat: number;
      lon: number;
      isLand: boolean;
      twinkle: number;
      isBeacon: boolean;
      beaconSpeed: number;
    }

    const isContinent = (latRad: number, lonRad: number): boolean => {
      const lat = (latRad * 180) / Math.PI;
      let lon = (lonRad * 180) / Math.PI;
      while (lon > 180) lon -= 360;
      while (lon < -180) lon += 360;

      // --- NORTH AMERICA ---
      // Alaska
      if (lat >= 54 && lat <= 72 && lon >= -168 && lon <= -130) return true;
      // Canada & Northern US
      if (lat >= 48 && lat <= 72 && lon >= -130 && lon <= -55) {
        if (lat >= 52 && lat <= 64 && lon >= -95 && lon <= -78) return false; // Hudson Bay
        return true;
      }
      // Greenland
      if (lat >= 60 && lat <= 83 && lon >= -55 && lon <= -18) return true;
      // Contiguous USA
      if (lat >= 25 && lat < 48 && lon >= -125 && lon <= -67) {
        if (lat <= 30 && lon >= -97 && lon <= -82) {
          // Florida peninsula
          if (lat >= 25 && lat <= 31 && lon >= -83 && lon <= -80) return true;
          return false; // Gulf of Mexico
        }
        return true;
      }
      // Mexico & Baja California
      if (lat >= 15 && lat < 32 && lon >= -117 && lon <= -86) {
        if (lon >= -117 && lon <= -109 && lat >= 23 && lat <= 32) return true;
        if (lon > -106 && lat >= 15 && lat <= 32) return true;
      }
      // Central America
      if (lat >= 7 && lat < 18 && lon >= -92 && lon <= -77) return true;
      // Caribbean
      if (lat >= 18 && lat <= 24 && lon >= -85 && lon <= -68) return true;

      // --- SOUTH AMERICA ---
      // Colombia, Venezuela, Guianas
      if (lat >= 0 && lat <= 13 && lon >= -80 && lon <= -50) return true;
      // Brazil & Amazon basin
      if (lat >= -20 && lat < 0 && lon >= -76 && lon <= -35) return true;
      // Central South America (Bolivia, Peru, Paraguay)
      if (lat >= -35 && lat < -20 && lon >= -74 && lon <= -48) return true;
      // Southern Argentina & Chile (Patagonia tapering south)
      if (lat >= -56 && lat < -35 && lon >= -75 && lon <= -58) {
        const widthAtLat = (lat + 56) / 21;
        return Math.abs(lon - (-68)) <= 4 + widthAtLat * 6;
      }

      // --- EUROPE ---
      // UK & Ireland
      if (lat >= 51 && lat <= 56 && lon >= -11 && lon <= -5.5) return true;
      if (lat >= 50 && lat <= 59 && lon >= -6 && lon <= 2) return true;
      // Scandinavia
      if (lat >= 55 && lat <= 71 && lon >= 4 && lon <= 32) {
        if (lat < 60 && lon > 12 && lon < 22) return false; // Baltic Sea
        return true;
      }
      // Western Europe (Iberia, France, Germany, Italy, Balkans)
      if (lat >= 36 && lat <= 44 && lon >= -10 && lon <= 4) return true; // Spain/Portugal
      if (lat >= 42 && lat <= 51 && lon >= -5 && lon <= 8) return true; // France
      if (lat >= 47 && lat <= 56 && lon >= 6 && lon <= 15) return true; // Germany/Benelux
      if (lat >= 37 && lat <= 46 && lon >= 8 && lon <= 19) return true; // Italy & Adriatic
      if (lat >= 44 && lat <= 58 && lon >= 15 && lon <= 32) return true; // Central/Eastern Europe
      if (lat >= 48 && lat <= 70 && lon >= 32 && lon <= 60) return true; // European Russia

      // --- AFRICA ---
      // North Africa (Sahara, Egypt, Maghreb)
      if (lat >= 16 && lat <= 37 && lon >= -17 && lon <= 35) return true;
      // West Africa bulge
      if (lat >= 4 && lat < 16 && lon >= -18 && lon <= 15) return true;
      // Central & East Africa
      if (lat >= -10 && lat < 16 && lon >= 10 && lon <= 51) {
        if (lat >= 13 && lat <= 28 && lon >= 33 && lon <= 43) return false; // Red Sea
        return true;
      }
      // Southern Africa (tapering to Cape of Good Hope)
      if (lat >= -35 && lat < -10 && lon >= 12 && lon <= 36) {
        const t = (lat + 35) / 25;
        return lon >= 16 - t * 4 && lon <= 32 + t * 4;
      }
      // Madagascar
      if (lat >= -26 && lat <= -12 && lon >= 43 && lon <= 51) return true;

      // --- MIDDLE EAST ---
      if (lat >= 12 && lat <= 32 && lon >= 35 && lon <= 60) {
        if (lat >= 24 && lat <= 30 && lon >= 48 && lon <= 56) return false; // Persian Gulf
        return true;
      }
      if (lat >= 30 && lat <= 42 && lon >= 35 && lon <= 63) {
        if (lat >= 36 && lat <= 47 && lon >= 47 && lon <= 54) return false; // Caspian Sea
        return true;
      }

      // --- ASIA ---
      // India & South Asia (Triangular peninsula tapering south to Kanyakumari)
      if (lat >= 8 && lat < 22 && lon >= 68 && lon <= 88) {
        const t = (lat - 8) / 14;
        const halfWidth = 3 + t * 7;
        if (Math.abs(lon - 78) <= halfWidth) return true;
      }
      // Northern India, Pakistan, Bangladesh, Himalayas
      if (lat >= 22 && lat <= 35 && lon >= 65 && lon <= 92) return true;
      // Sri Lanka
      if (lat >= 6 && lat <= 10 && lon >= 79.5 && lon <= 82) return true;
      // Russia & Siberia
      if (lat >= 50 && lat <= 75 && lon >= 60 && lon <= 180) return true;
      // Central Asia
      if (lat >= 36 && lat <= 52 && lon >= 50 && lon <= 88) return true;
      // China & Mongolia
      if (lat >= 20 && lat <= 50 && lon >= 88 && lon <= 124) return true;
      // Korea
      if (lat >= 34 && lat <= 42 && lon >= 125 && lon <= 130) return true;
      // Japan archipelago
      if (lat >= 31 && lat <= 45 && lon >= 130 && lon <= 145) return true;
      // Southeast Asia (Indochina, Indonesia, Philippines)
      if (lat >= 9 && lat <= 24 && lon >= 94 && lon <= 110) return true;
      if (lat >= -9 && lat <= 6 && lon >= 95 && lon <= 130) return true;
      if (lat >= 6 && lat <= 19 && lon >= 119 && lon <= 126) return true;

      // --- OCEANIA ---
      // Australia
      if (lat >= -39 && lat <= -11 && lon >= 113 && lon <= 154) {
        if (lat >= -38 && lat <= -32 && lon >= 126 && lon <= 138) return false; // Great Australian Bight
        return true;
      }
      // Tasmania & New Zealand
      if (lat >= -44 && lat <= -40 && lon >= 144 && lon <= 149) return true;
      if (lat >= -47 && lat <= -34 && lon >= 166 && lon <= 178) return true;

      return false;
    };

    const dots: GlobeDot[] = [];
    const latBands = 48; // High resolution bands for crisp country shapes

    for (let b = 1; b < latBands; b++) {
      const lat = ((b / latBands) - 0.5) * Math.PI * 0.95;
      const cosLat = Math.cos(lat);
      const pointsInBand = Math.floor(96 * cosLat);

      for (let p = 0; p < pointsInBand; p++) {
        const lon = (p / pointsInBand) * Math.PI * 2;
        const land = isContinent(lat, lon);
        // Distribute blinking beacon dots on major countries (like live telemetry nodes)
        const isBeacon = land && Math.sin(lat * 14.3 + lon * 21.7) > 0.62;
        dots.push({
          lat,
          lon,
          isLand: land,
          twinkle: Math.random() * Math.PI * 2,
          isBeacon,
          beaconSpeed: 1.6 + Math.random() * 2.4,
        });
      }
    }

    // Outer Sweeping Orbital Arcs
    const leftArcPoints: { t: number; speed: number; pulse: number }[] = [];
    for (let i = 0; i < 44; i++) {
      leftArcPoints.push({
        t: i / 44,
        speed: 0.0016,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const rightArcPoints: { t: number; speed: number; pulse: number }[] = [];
    for (let i = 0; i < 48; i++) {
      rightArcPoints.push({
        t: i / 48,
        speed: 0.0016,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Floating Stardust Particles in Lower Luminous Atmosphere
    const horizonParticles: { x: number; y: number; size: number; speed: number; phase: number }[] = [];
    for (let i = 0; i < 30; i++) {
      horizonParticles.push({
        x: Math.random(),
        y: Math.random(),
        size: 0.8 + Math.random() * 1.3,
        speed: 0.0003 + Math.random() * 0.0005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let rotationLon = 0.85;
    let time = 0;
    const tilt = 0.28; // Downward curved latitude rings like in screenshot

    const render = () => {
      time += 0.016;
      rotationLon += 0.0022; // Smooth 60fps globe rotation

      ctx.clearRect(0, 0, width, height);

      // =======================================================================
      // EXACT VERTICAL POSITIONING:
      // Globe top edge starts right at the bottom of the "Book a demo" button!
      // This leaves the headline & subtitle completely clear on deep blue space!
      // =======================================================================
      const centerX = width / 2;
      const globeRadius = Math.min(width * 0.32, 285);
      
      // Calculate centerY so the top of the globe sits right under the button
      let buttonBottomY = 360;
      if (buttonRef.current && containerRef.current) {
        const btnRect = buttonRef.current.getBoundingClientRect();
        const contRect = containerRef.current.getBoundingClientRect();
        buttonBottomY = btnRect.bottom - contRect.top + 8;
      }
      const centerY = buttonBottomY + globeRadius;

      const sinTilt = Math.sin(tilt);
      const cosTilt = Math.cos(tilt);

      // =======================================================================
      // 1. CELESTIAL HORIZON GLOW (Centered behind the lower globe - Bright & Radiant)
      // =======================================================================
      const atmGlow = ctx.createRadialGradient(
        centerX,
        centerY + globeRadius * 0.25,
        globeRadius * 0.15,
        centerX,
        centerY + globeRadius * 0.25,
        globeRadius * 1.65
      );
      atmGlow.addColorStop(0, 'rgba(0, 185, 255, 0.65)');
      atmGlow.addColorStop(0.35, 'rgba(2, 132, 199, 0.42)');
      atmGlow.addColorStop(0.7, 'rgba(14, 165, 233, 0.18)');
      atmGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = atmGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY + globeRadius * 0.25, globeRadius * 1.65, 0, Math.PI * 2);
      ctx.fill();

      // =======================================================================
      // 2. RENDER THE 3D DOTTED GLOBE (Circular dots with dynamic blinking nodes)
      // =======================================================================
      interface RenderDot {
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        isLand: boolean;
        isBeacon: boolean;
        beaconPulse: number;
      }

      const renderList: RenderDot[] = [];

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const curLon = dot.lon + rotationLon;

        const cosLat = Math.cos(dot.lat);
        const sinLat = Math.sin(dot.lat);

        const x0 = globeRadius * cosLat * Math.sin(curLon);
        const y0 = -globeRadius * sinLat;
        const z0 = globeRadius * cosLat * Math.cos(curLon);

        // Apply Axial Tilt
        const y1 = y0 * cosTilt - z0 * sinTilt;
        const z1 = y0 * sinTilt + z0 * cosTilt;
        const x1 = x0;

        // Front-facing points check
        if (z1 > -globeRadius * 0.15) {
          const depthNorm = (z1 + globeRadius * 0.15) / (globeRadius * 1.15);
          const twinkle = Math.sin(time * 3 + dot.lat * 5 + dot.lon * 3) * 0.08;
          const beaconPulse = dot.isBeacon 
            ? Math.sin(time * dot.beaconSpeed + dot.twinkle)
            : 0;

          let size: number;
          let alpha: number;

          if (dot.isLand) {
            // Bright, dense glowing white continent dots (as in screenshot)
            const baseSize = (depthNorm > 0.4 ? 2.2 : 1.7) * (depthNorm * 0.4 + 0.6);
            size = dot.isBeacon ? baseSize + Math.max(0, beaconPulse) * 0.75 : baseSize;
            alpha = Math.max(0.45, Math.min(1.0, depthNorm * 0.75 + (dot.isBeacon ? beaconPulse * 0.35 : twinkle) + 0.28));
          } else {
            // Subtle, elegant light latitude grid dots
            size = 1.35 * (depthNorm * 0.35 + 0.65);
            alpha = Math.max(0.12, Math.min(0.42, depthNorm * 0.32 + 0.1));
          }

          // ===================================================================
          // ATMOSPHERIC BOTTOM FADE (Matching media_1794671833539_f332d44a.png)
          // Lower hemisphere dots dissolve softly into the bright sky horizon
          // ===================================================================
          const dotY = centerY + y1;
          const fadeStartY = centerY + globeRadius * 0.15;
          const fadeEndY = centerY + globeRadius * 0.95;
          if (dotY > fadeStartY) {
            const factor = Math.max(0, 1 - (dotY - fadeStartY) / (fadeEndY - fadeStartY));
            const smoothFade = factor * factor * (3 - 2 * factor); // smoothstep
            alpha *= smoothFade;
            size *= 0.6 + smoothFade * 0.4;
          }

          if (alpha > 0.02) {
            renderList.push({
              x: centerX + x1,
              y: dotY,
              z: z1,
              size,
              alpha,
              isLand: dot.isLand,
              isBeacon: dot.isBeacon,
              beaconPulse,
            });
          }
        }
      }

      // Depth sort back to front
      renderList.sort((a, b) => a.z - b.z);

      // Render dots as smooth circular points
      for (let i = 0; i < renderList.length; i++) {
        const p = renderList[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (p.isLand) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          if (p.isBeacon && p.beaconPulse > 0.15) {
            // High-tech blinking beacon node on continents
            ctx.shadowColor = 'rgba(255, 255, 255, 0.95)';
            ctx.shadowBlur = 5 + p.beaconPulse * 5;
          } else if (p.z > globeRadius * 0.25) {
            ctx.shadowColor = 'rgba(56, 189, 248, 0.75)';
            ctx.shadowBlur = 4;
          } else {
            ctx.shadowBlur = 0;
          }
        } else {
          ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // =======================================================================
      // 3. CONCENTRIC ORBITAL ARCS & SURROUNDING DETAILING (With matching blink)
      // =======================================================================
      
      // LEFT SIDE SWEEPING ORBITAL ARCS
      const leftArcRadiusX = globeRadius * 1.55;
      const leftArcRadiusY = globeRadius * 1.25;

      for (let i = 0; i < leftArcPoints.length; i++) {
        const pt = leftArcPoints[i];
        pt.pulse += 0.03;

        // Angle span framing the left side from top-left to bottom-left
        const angle = Math.PI * 0.65 + pt.t * Math.PI * 0.7;
        const x = centerX + Math.cos(angle) * leftArcRadiusX;
        const y = centerY + Math.sin(angle) * leftArcRadiusY;

        const wave = Math.sin(time * 3 - pt.t * 8) * 0.3 + 0.7;
        const isBlinker = (i % 5 === 0);
        const blinkPulse = isBlinker ? Math.sin(time * 3.5 + pt.pulse) * 0.4 + 0.6 : 1;
        let dotAlpha = (0.35 + Math.sin(pt.pulse) * 0.15) * wave * blinkPulse;

        // Soft bottom fade for orbital arc
        if (y > centerY + globeRadius * 0.25) {
          const f = Math.max(0, 1 - (y - (centerY + globeRadius * 0.25)) / (globeRadius * 0.9));
          dotAlpha *= f * f * (3 - 2 * f);
        }

        if (dotAlpha > 0.02) {
          ctx.beginPath();
          const r = isBlinker && blinkPulse > 0.8 ? 2.2 : 1.8;
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
          if (isBlinker && blinkPulse > 0.8) {
            ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
            ctx.shadowBlur = 6;
          } else if (wave > 0.8) {
            ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
            ctx.shadowBlur = 3;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      // Inner Left Arc
      for (let i = 0; i < 26; i++) {
        const t = i / 26;
        const angle = Math.PI * 0.72 + t * Math.PI * 0.55;
        const x = centerX + Math.cos(angle) * (globeRadius * 1.22);
        const y = centerY + Math.sin(angle) * (globeRadius * 0.98);

        let blink = Math.sin(time * 2.5 + i * 0.8) * 0.15 + 0.28;
        if (y > centerY + globeRadius * 0.25) {
          const f = Math.max(0, 1 - (y - (centerY + globeRadius * 0.25)) / (globeRadius * 0.9));
          blink *= f * f * (3 - 2 * f);
        }
        if (blink > 0.02) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${blink})`;
          ctx.shadowBlur = 0;
          ctx.fill();
        }
      }

      // RIGHT SIDE SWEEPING ORBITAL ARCS
      const rightArcRadiusX = globeRadius * 1.58;
      const rightArcRadiusY = globeRadius * 1.28;

      for (let i = 0; i < rightArcPoints.length; i++) {
        const pt = rightArcPoints[i];
        pt.pulse += 0.03;

        const angle = -Math.PI * 0.35 + pt.t * Math.PI * 0.7;
        const x = centerX + Math.cos(angle) * rightArcRadiusX;
        const y = centerY + Math.sin(angle) * rightArcRadiusY;

        const wave = Math.sin(time * 3 - pt.t * 8) * 0.3 + 0.7;
        const isBlinker = (i % 5 === 2);
        const blinkPulse = isBlinker ? Math.sin(time * 3.5 + pt.pulse) * 0.4 + 0.6 : 1;
        let dotAlpha = (0.35 + Math.sin(pt.pulse) * 0.15) * wave * blinkPulse;

        // Soft bottom fade for orbital arc
        if (y > centerY + globeRadius * 0.25) {
          const f = Math.max(0, 1 - (y - (centerY + globeRadius * 0.25)) / (globeRadius * 0.9));
          dotAlpha *= f * f * (3 - 2 * f);
        }

        if (dotAlpha > 0.02) {
          ctx.beginPath();
          const r = isBlinker && blinkPulse > 0.8 ? 2.2 : 1.8;
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
          if (isBlinker && blinkPulse > 0.8) {
            ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
            ctx.shadowBlur = 6;
          } else if (wave > 0.8) {
            ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
            ctx.shadowBlur = 3;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      // Inner Right Arc
      for (let i = 0; i < 26; i++) {
        const t = i / 26;
        const angle = -Math.PI * 0.3 + t * Math.PI * 0.55;
        const x = centerX + Math.cos(angle) * (globeRadius * 1.24);
        const y = centerY + Math.sin(angle) * (globeRadius * 0.98);

        let blink = Math.sin(time * 2.5 + i * 0.8) * 0.15 + 0.28;
        if (y > centerY + globeRadius * 0.25) {
          const f = Math.max(0, 1 - (y - (centerY + globeRadius * 0.25)) / (globeRadius * 0.9));
          blink *= f * f * (3 - 2 * f);
        }
        if (blink > 0.02) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${blink})`;
          ctx.shadowBlur = 0;
          ctx.fill();
        }
      }

      // Right Side Telemetry Matrix (blinking data cluster as in screenshot)
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 5; c++) {
          const fx = centerX + globeRadius * (0.86 + c * 0.08);
          const fy = centerY - globeRadius * (0.44 - r * 0.11);
          const distFromCenter = Math.hypot(fx - centerX, fy - centerY);

          if (distFromCenter < rightArcRadiusX) {
            const flicker = Math.sin(time * 2.8 + r * 2.1 + c * 3.4) * 0.22 + 0.35;
            ctx.beginPath();
            ctx.arc(fx, fy, flicker > 0.45 ? 1.4 : 1.1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flicker})`;
            if (flicker > 0.48) {
              ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
              ctx.shadowBlur = 3;
            } else {
              ctx.shadowBlur = 0;
            }
            ctx.fill();
          }
        }
      }

      // Left Side Telemetry Matrix (balanced subtle detailing)
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 4; c++) {
          const fx = centerX - globeRadius * (0.92 + c * 0.08);
          const fy = centerY - globeRadius * (0.32 - r * 0.11);
          const distFromCenter = Math.hypot(fx - centerX, fy - centerY);

          if (distFromCenter < leftArcRadiusX) {
            const flicker = Math.sin(time * 2.6 + r * 1.8 + c * 2.9) * 0.2 + 0.32;
            ctx.beginPath();
            ctx.arc(fx, fy, 1.1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flicker})`;
            ctx.shadowBlur = 0;
            ctx.fill();
          }
        }
      }

      // TOP-RIGHT CELESTIAL BEACON STAR (Pulsing Star Flare from screenshot)
      const beaconX = centerX + globeRadius * 1.46;
      const beaconY = centerY - globeRadius * 0.86;
      const starPulse = Math.sin(time * 2.2) * 0.3 + 0.7;

      // Multi-layer Glowing Aura
      const flareGrad = ctx.createRadialGradient(beaconX, beaconY, 0.5, beaconX, beaconY, 18);
      flareGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * starPulse})`);
      flareGrad.addColorStop(0.25, `rgba(56, 189, 248, ${0.65 * starPulse})`);
      flareGrad.addColorStop(0.65, `rgba(2, 132, 199, ${0.2 * starPulse})`);
      flareGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 18, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Core Star
      ctx.beginPath();
      ctx.arc(beaconX, beaconY, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Soft Floating Stardust in Lower Horizon Atmosphere
      for (let i = 0; i < horizonParticles.length; i++) {
        const hp = horizonParticles[i];
        hp.x += hp.speed;
        if (hp.x > 1) hp.x = 0;
        const px = hp.x * width;
        const py = centerY + globeRadius * 0.4 + hp.y * (globeRadius * 0.8);
        const pPulse = Math.sin(time * 2 + hp.phase) * 0.25 + 0.35;
        ctx.beginPath();
        ctx.arc(px, py, hp.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pPulse * 0.7})`;
        ctx.shadowBlur = 0;
        ctx.fill();
      }

      // Satellite removed as requested by user

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[96vh] sm:min-h-[105vh] overflow-hidden bg-[#020617] text-white selection:bg-cyan-500 selection:text-black flex flex-col justify-between"
    >
      {/* =========================================================================
          ATMOSPHERIC COLOR GRADIENTS (VIBRANT ELECTRIC BLUE & BRIGHT HORIZON)
          ========================================================================= */}

      {/* 1. Deep Space Cosmic Navy at Top */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 110% 75% at 50% 36%, #004cb8 0%, #012b82 28%, #011448 60%, #01061b 100%)',
        }}
      />

      {/* 2. Vibrant Electric Blue Radiance Core behind Globe */}
      <div 
        className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] pointer-events-none opacity-95 blur-[85px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 155, 255, 0.95) 0%, rgba(2, 132, 199, 0.65) 42%, rgba(3, 105, 161, 0.3) 68%, transparent 85%)',
          transform: `translate3d(calc(-50% + ${mousePos.x * 0.4}px), ${mousePos.y * 0.4}px, 0)`,
        }}
      />

      {/* 3. Luminous Cyan-Blue Horizon Arc across lower half */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[190%] h-[62%] pointer-events-none opacity-100 blur-[45px]"
        style={{
          background: 'radial-gradient(ellipse 78% 52% at 50% 88%, #00b4d8 0%, #0284c7 42%, rgba(2, 132, 199, 0.3) 78%, transparent 100%)',
        }}
      />

      {/* 4. Atmospheric Sky-to-White Horizon Transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 160, 255, 0.14) 22%, rgba(56, 189, 248, 0.45) 50%, rgba(125, 211, 252, 0.78) 72%, rgba(224, 242, 254, 0.96) 88%, #ffffff 100%)',
        }}
      />

      {/* =========================================================================
          THE FULLSCREEN 3D DOTTED GLOBE CANVAS (Starts right under the button)
          ========================================================================= */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>

      {/* =========================================================================
          HERO HEADLINE, SUBTITLE & CTA BUTTON (Pure dark space with 100% visibility)
          ========================================================================= */}
      <div className="relative z-20 w-full pt-32 sm:pt-36 flex flex-col items-center text-center px-4 sm:px-6">
        
        {/* Top "New" Announcement Pill */}
        <Link
          href="#features"
          className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md text-xs sm:text-[13px] text-slate-200 transition-all duration-200 mb-6 sm:mb-8 shadow-sm cursor-pointer"
        >
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#1c2854] border border-white/20 text-white tracking-wide">
            New
          </span>
          <span className="text-slate-200 group-hover:text-white transition-colors">
            Introducing Antimetal for Coding Agents
          </span>
          <span className="text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 text-sm leading-none">
            ›
          </span>
        </Link>

        {/* Large Elegant Serif Headline (100% Unobstructed Readability) */}
        <h1 className="max-w-4xl  text-4xl sm:text-6xl md:text-[68px] lg:text-[72px] font-normal tracking-[-0.015em] text-white leading-[1.1] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
          Handle everything that <br />
          <span>happens after you deploy</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
          AI that investigates, fixes, and prevents issues by connecting your cloud platforms, observability tools, and code.
        </p>

        {/* Chartreuse/Lime "Book a demo" Button (Crown of the globe) */}
        <Link
          ref={buttonRef}
          href="#demo"
          className="px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-black bg-[#d4ff32] hover:bg-[#c4f224] transition-all duration-200 shadow-xl shadow-lime-400/25 active:scale-95 z-30"
        >
          Book a demo
        </Link>

      </div>

      {/* Spacer to give breathing room for the lower globe & horizon */}
      <div className="relative z-20 w-full h-48 sm:h-64 pointer-events-none" />

    </div>
  );
}
