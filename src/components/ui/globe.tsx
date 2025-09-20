import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

/**
 * ---- Type helpers so TypeScript knows the material & userData shapes ----
 */
type Dot = { lat: number; lng: number; continent: string; brightness: number };

type DotMesh = THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> & {
  userData: {
    originalOpacity: number;
    twinklePhase: number;
    twinkleSpeed: number;
  };
};

type ArcLine = THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial> & {
  userData: {
    originalOpacity: number;
    phase: number;
    flowSpeed: number;
    intensity: number;
    baseColor: number;
  };
};

type CityMarkerItem = {
  marker: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  ring: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  pulse: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
};

/**
 * ---- Continent dot generator (kept intact from your original code) ----
 */
const generateContinentDots = (): Dot[] => {
  const dots: Dot[] = [];

  const northAmericaRegions = [
    { centerLat: 45, centerLng: -100, radiusLat: 15, radiusLng: 25, density: 0.8 }, // Central US/Canada
    { centerLat: 35, centerLng: -95, radiusLat: 8, radiusLng: 15, density: 0.9 }, // Southern US
    { centerLat: 60, centerLng: -105, radiusLat: 12, radiusLng: 20, density: 0.4 }, // Northern Canada
    { centerLat: 19, centerLng: -99, radiusLat: 6, radiusLng: 8, density: 0.7 }, // Mexico
  ];

  northAmericaRegions.forEach(region => {
    const count = Math.floor(120 * region.density);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random());
      dots.push({
        lat: region.centerLat + Math.cos(angle) * distance * region.radiusLat,
        lng: region.centerLng + Math.sin(angle) * distance * region.radiusLng,
        continent: 'na',
        brightness: 0.6 + Math.random() * 0.4,
      });
    }
  });

  const europeRegions = [
    { centerLat: 54, centerLng: 15, radiusLat: 8, radiusLng: 15, density: 0.9 }, // Central Europe
    { centerLat: 60, centerLng: 10, radiusLat: 6, radiusLng: 12, density: 0.7 }, // Scandinavia
    { centerLat: 40, centerLng: 15, radiusLat: 5, radiusLng: 10, density: 0.8 }, // Southern Europe
  ];

  europeRegions.forEach(region => {
    const count = Math.floor(80 * region.density);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random());
      dots.push({
        lat: region.centerLat + Math.cos(angle) * distance * region.radiusLat,
        lng: region.centerLng + Math.sin(angle) * distance * region.radiusLng,
        continent: 'eu',
        brightness: 0.7 + Math.random() * 0.3,
      });
    }
  });

  const asiaRegions = [
    { centerLat: 35, centerLng: 105, radiusLat: 15, radiusLng: 20, density: 0.8 }, // China
    { centerLat: 20, centerLng: 77, radiusLat: 12, radiusLng: 15, density: 0.9 }, // India
    { centerLat: 60, centerLng: 100, radiusLat: 20, radiusLng: 40, density: 0.3 }, // Siberia
    { centerLat: 36, centerLng: 138, radiusLat: 8, radiusLng: 10, density: 0.8 }, // Japan
  ];

  asiaRegions.forEach(region => {
    const count = Math.floor(150 * region.density);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random());
      dots.push({
        lat: region.centerLat + Math.cos(angle) * distance * region.radiusLat,
        lng: region.centerLng + Math.sin(angle) * distance * region.radiusLng,
        continent: 'as',
        brightness: 0.5 + Math.random() * 0.5,
      });
    }
  });

  const africaRegions = [
    { centerLat: 0, centerLng: 20, radiusLat: 12, radiusLng: 12, density: 0.7 }, // Central Africa
    { centerLat: -20, centerLng: 25, radiusLat: 10, radiusLng: 15, density: 0.6 }, // Southern Africa
    { centerLat: 15, centerLng: 15, radiusLat: 8, radiusLng: 12, density: 0.5 }, // Northern Africa
  ];

  africaRegions.forEach(region => {
    const count = Math.floor(100 * region.density);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random());
      dots.push({
        lat: region.centerLat + Math.cos(angle) * distance * region.radiusLat,
        lng: region.centerLng + Math.sin(angle) * distance * region.radiusLng,
        continent: 'af',
        brightness: 0.6 + Math.random() * 0.4,
      });
    }
  });

  const southAmericaRegions = [
    { centerLat: -15, centerLng: -60, radiusLat: 15, radiusLng: 8, density: 0.8 }, // Brazil
    { centerLat: -35, centerLng: -65, radiusLat: 8, radiusLng: 10, density: 0.6 }, // Argentina
  ];

  southAmericaRegions.forEach(region => {
    const count = Math.floor(90 * region.density);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.sqrt(Math.random());
      dots.push({
        lat: region.centerLat + Math.cos(angle) * distance * region.radiusLat,
        lng: region.centerLng + Math.sin(angle) * distance * region.radiusLng,
        continent: 'sa',
        brightness: 0.6 + Math.random() * 0.4,
      });
    }
  });

  // Australia
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.sqrt(Math.random());
    dots.push({
      lat: -25 + Math.cos(angle) * distance * 8,
      lng: 135 + Math.sin(angle) * distance * 12,
      continent: 'au',
      brightness: 0.7 + Math.random() * 0.3,
    });
  }

  return dots;
};

/**
 * ---- Cities (unchanged) ----
 */
const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.006, color: 0x64b5f6, importance: 1.0 },
  { name: 'London', lat: 51.5074, lng: -0.1278, color: 0x81c784, importance: 1.0 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: 0xffb74d, importance: 0.9 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, color: 0xe57373, importance: 0.8 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, color: 0xba68c8, importance: 0.7 },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, color: 0x4db6ac, importance: 0.9 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, color: 0xffd54f, importance: 0.8 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, color: 0xa1c181, importance: 0.8 },
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333, color: 0x90caf9, importance: 0.7 },
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, color: 0xf8bbd9, importance: 0.8 }
];

/**
 * ---- Globe component (same functionality; typed and safe casts added) ----
 */
export function Globe({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Interaction state
  const isDragging = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const autoRotateSpeed = useRef(0.002);

  // Continent dots (kept as ref so they're stable across renders)
  const continentDots = useRef<ReturnType<typeof generateContinentDots>>(generateContinentDots());

  // lat/lng to 3D vector
  const latLngToVector3 = (lat: number, lng: number, radius: number = 2) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = 600;
    const height = 600;

    // Scene + fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000814, 8, 15);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000814, 0);
    // in some three versions this may be renderer.outputEncoding - keep original intent
    // @ts-ignore
    if ('outputColorSpace' in renderer) (renderer as any).outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Globe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Ocean base
    const oceanGeometry = new THREE.SphereGeometry(2, 64, 64);
    const oceanMaterial = new THREE.MeshLambertMaterial({
      color: 0x0a1428,
      transparent: true,
      opacity: 0.95
    });
    const oceanSphere = new THREE.Mesh(oceanGeometry, oceanMaterial);
    globeGroup.add(oceanSphere);

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    // Land dots
    const dotGeometry = new THREE.SphereGeometry(0.006, 8, 8);
    const dotMeshes: DotMesh[] = [];

    continentDots.current.forEach((dot) => {
      const position = latLngToVector3(dot.lat, dot.lng, 2.005);

      const landColors = [0x2563eb, 0x3b82f6, 0x60a5fa, 0x93c5fd];
      const colorIndex = Math.floor(Math.random() * landColors.length);

      const dotMaterial = new THREE.MeshBasicMaterial({
        color: landColors[colorIndex],
        transparent: true,
        opacity: 0.7 * dot.brightness
      });

      const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial) as DotMesh;
      dotMesh.position.copy(position);
      dotMesh.userData = {
        originalOpacity: 0.7 * dot.brightness,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.5
      };
      globeGroup.add(dotMesh);
      dotMeshes.push(dotMesh);
    });

    // City markers (with rings + pulse)
    const cityMarkers: CityMarkerItem[] = [];
    cities.forEach((city) => {
      const position = latLngToVector3(city.lat, city.lng, 2.02);
      const size = 0.015 + (city.importance * 0.02);

      const markerGeometry = new THREE.SphereGeometry(size, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      globeGroup.add(marker);

      const ringSize = size * 2.5;
      const ringGeometry = new THREE.RingGeometry(ringSize * 0.8, ringSize * 1.2, 24);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);

      const pulseGeometry = new THREE.SphereGeometry(size * 1.5, 12, 12);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
        transparent: true,
        opacity: 0,
        wireframe: true
      });
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.copy(position);
      globeGroup.add(pulse);

      cityMarkers.push({ marker, ring, pulse });
    });

    // Arc connections
    const arcConnections: [number, number, number][] = [
      [0, 1, 0.9], [1, 2, 0.8], [2, 3, 0.7], [3, 4, 0.6],
      [0, 5, 0.8], [1, 6, 0.7], [6, 3, 0.6], [7, 3, 0.5],
      [8, 0, 0.6], [9, 2, 0.7], [1, 7, 0.5], [5, 2, 0.8]
    ];

    const arcs: ArcLine[] = [];
    arcConnections.forEach(([startIdx, endIdx, intensity], index) => {
      const startCity = cities[startIdx];
      const endCity = cities[endIdx];

      const startPos = latLngToVector3(startCity.lat, startCity.lng, 2.02);
      const endPos = latLngToVector3(endCity.lat, endCity.lng, 2.02);

      const distance = startPos.distanceTo(endPos);
      const arcHeight = 2 + distance * 0.4 + Math.random() * 0.2;
      const midPoint = new THREE.Vector3()
        .addVectors(startPos, endPos)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(arcHeight);

      const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
      const points = curve.getPoints(100);
      const arcGeometry = new THREE.BufferGeometry().setFromPoints(points);

      const baseColor = new THREE.Color().lerpColors(
        new THREE.Color(0x3b82f6),
        new THREE.Color(0xef4444),
        intensity
      );

      const arcMaterial = new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.6 * intensity,
        linewidth: 1
      });

      const arc = new THREE.Line(arcGeometry, arcMaterial) as ArcLine;
      arc.userData = {
        originalOpacity: 0.6 * intensity,
        phase: index * 0.7,
        flowSpeed: 1 + Math.random() * 2,
        intensity,
        baseColor: baseColor.getHex()
      };
      globeGroup.add(arc);
      arcs.push(arc);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a237e, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x3f51b5, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x64b5f6, 0.3);
    rimLight.position.set(-5, 0, -2);
    scene.add(rimLight);

    // Mouse handlers
    const onMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      mousePos.current = { x: event.clientX, y: event.clientY };
      renderer.domElement.style.cursor = 'grabbing';
      autoRotateSpeed.current = 0;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - mousePos.current.x;
      const deltaY = event.clientY - mousePos.current.y;

      targetRotation.current.y += deltaX * 0.008;
      targetRotation.current.x += deltaY * 0.008;

      targetRotation.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotation.current.x));
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
      renderer.domElement.style.cursor = 'grab';
      setTimeout(() => {
        if (!isDragging.current) {
          autoRotateSpeed.current = 0.002;
        }
      }, 3000);
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.style.cursor = 'grab';

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Auto-rotation
      if (!isDragging.current) {
        targetRotation.current.y += autoRotateSpeed.current;
      }

      // Smooth interpolation
      rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.08;
      rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.08;

      // apply to group (use the local reference)
      globeGroup.rotation.x = rotation.current.x;
      globeGroup.rotation.y = rotation.current.y;

      // Dots twinkling
      dotMeshes.forEach((dot) => {
        // dot is DotMesh so dot.userData and dot.material are typed
        const twinkle = Math.sin(time * dot.userData.twinkleSpeed + dot.userData.twinklePhase);
        dot.material.opacity = dot.userData.originalOpacity * (0.3 + 0.7 * Math.abs(twinkle));
      });

      // City animations
      cityMarkers.forEach(({ marker, ring, pulse }, index) => {
        const city = cities[index];
        const pulseTime = time * 2 + index * 0.5;

        const scale = 1 + Math.sin(pulseTime) * 0.15 * city.importance;
        marker.scale.setScalar(scale);

        ring.rotation.z += 0.01 * city.importance;

        const pulsePhase = (time * 1.5 + index) % 3;
        if (pulsePhase < 1) {
          pulse.scale.setScalar(1 + pulsePhase * 2);
          (pulse.material as THREE.MeshBasicMaterial).opacity = (1 - pulsePhase) * 0.8;
        } else {
          (pulse.material as THREE.MeshBasicMaterial).opacity = 0;
          pulse.scale.setScalar(1);
        }
      });

      // Arcs animation
      arcs.forEach((arc) => {
        const flowTime = time * arc.userData.flowSpeed + arc.userData.phase;
        const flow = Math.sin(flowTime) * 0.5 + 0.5;
        const pulse = Math.sin(flowTime * 0.5) * 0.3 + 0.7;

        (arc.material as THREE.LineBasicMaterial).opacity = arc.userData.originalOpacity * flow * pulse;

        const colorShift = Math.sin(flowTime * 0.3) * 0.1;
        const color = new THREE.Color(arc.userData.baseColor);
        color.multiplyScalar(1 + colorShift);
        (arc.material as THREE.LineBasicMaterial).color.copy(color);
      });

      // Atmosphere pulse
      (atmosphere.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(time * 0.5) * 0.05;

      renderer.render(scene, camera);
    };

    animate();
    setTimeout(() => setIsLoaded(true), 300);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose scene geometries & materials
      scene.traverse((object) => {
        // dispose geometries
        // @ts-expect-ignore
        if (object.geometry) {
          try {
            // geometry can be BufferGeometry or other
            (object.geometry as THREE.BufferGeometry).dispose();
          } catch (e) {
            // ignore
          }
        }

        // dispose materials
        // @ts-expact-ignore
        const mat = object.material;
        if (Array.isArray(mat)) {
          mat.forEach(m => {
            try { (m as THREE.Material).dispose(); } catch (e) {}
          });
        } else if (mat) {
          try { (mat as THREE.Material).dispose(); } catch (e) {}
        }
      });

      try { renderer.dispose(); } catch (e) {}
    };
  }, []);

  // JSX (kept identical to your original layout)
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute inset-0 rounded-full opacity-40">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-500/20 via-blue-600/10 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <div className="absolute inset-8 rounded-full opacity-60">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-400/15 via-transparent to-transparent blur-xl" />
      </div>

      <div className={cn(
        "relative w-[600px] h-[600px] transition-all duration-2000 ease-out",
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
      )}>
        <div ref={mountRef} className="w-full h-full" />

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
            style={{
              animation: 'spin 120s linear infinite',
              transform: 'translate(-50%, -50%) rotate(0deg)'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/8"
            style={{
              animation: 'spin-reverse 180s linear infinite',
              transform: 'translate(-50%, -50%) rotate(0deg)'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/6"
            style={{
              animation: 'spin 240s linear infinite',
              transform: 'translate(-50%, -50%) rotate(0deg)'
            }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 60 + 20) % 60}%`,
                top: `${30 + (i * 40 + 15) % 40}%`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-12 text-xs">
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-20" />
          </div>
          <span className="font-medium">Global Network</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400">
          <div className="flex space-x-1">
            {['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b'].map((color, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{
                  backgroundColor: color,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
          <span className="font-medium">Live Connections</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-400">
          <div className="text-blue-400 font-mono text-sm">60fps</div>
          <span className="font-medium">Performance</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
