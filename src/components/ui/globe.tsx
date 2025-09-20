import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Enhanced continent data using more realistic country shapes and densities
const generateContinentDots = () => {
  const dots = [];
  
  // North America - More detailed shape
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
        brightness: 0.6 + Math.random() * 0.4
      });
    }
  });

  // Europe - More concentrated, realistic shape
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
        brightness: 0.7 + Math.random() * 0.3
      });
    }
  });

  // Asia - Large and varied
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
        brightness: 0.5 + Math.random() * 0.5
      });
    }
  });

  // Africa - Distinctive shape
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
        brightness: 0.6 + Math.random() * 0.4
      });
    }
  });

  // South America
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
        brightness: 0.6 + Math.random() * 0.4
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
      brightness: 0.7 + Math.random() * 0.3
    });
  }

  return dots;
};

// Major cities with brand color (#d4ff00 lime green)
const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.006, color: 0xd4ff00, importance: 1.0 }, // Brand lime green
  { name: 'London', lat: 51.5074, lng: -0.1278, color: 0xd4ff00, importance: 1.0 }, // Brand lime green
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: 0xd4ff00, importance: 0.9 }, // Brand lime green
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, color: 0xd4ff00, importance: 0.8 }, // Brand lime green
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, color: 0xd4ff00, importance: 0.7 }, // Brand lime green
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, color: 0xd4ff00, importance: 0.9 }, // Brand lime green
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, color: 0xd4ff00, importance: 0.8 }, // Brand lime green
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, color: 0xd4ff00, importance: 0.8 }, // Brand lime green
  { name: 'São Paulo', lat: -23.5505, lng: -46.6333, color: 0xd4ff00, importance: 0.7 }, // Brand lime green
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, color: 0xd4ff00, importance: 0.8 } // Brand lime green
];

export function Globe({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mouse interaction state
  const isDragging = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const autoRotateSpeed = useRef(0.002);

  // Generate continent dots
  const continentDots = useRef(generateContinentDots());

  // Convert lat/lng to 3D position on sphere
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
    const width = 1000;
    const height = 1000;

    // Create scene with more sophisticated fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000814, 8, 15);
    sceneRef.current = scene;

    // Create camera with better FOV and positioning for full globe visibility
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;
    cameraRef.current = camera;

    // Create renderer with enhanced settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Stripe found this improves performance significantly
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000814, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create globe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Layer 1: Ocean base (your brand dark blue)
    const oceanGeometry = new THREE.SphereGeometry(2, 64, 64);
    const oceanMaterial = new THREE.MeshLambertMaterial({
      color: 0x062056, // Your specified dark blue
      transparent: true,
      opacity: 1.0
    });
    const oceanSphere = new THREE.Mesh(oceanGeometry, oceanMaterial);
    globeGroup.add(oceanSphere);

    // Layer 2: Atmospheric glow (subtle complement to brand colors)
    const atmosphereGeometry = new THREE.SphereGeometry(2.12, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4a90e2, // Subtle blue complement to lime green
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    // Layer 3: Land dots with exact positioning and colors from your reference image
    const dotGeometry = new THREE.SphereGeometry(0.008, 8, 8); // Slightly larger dots for better visibility
    const dotMeshes: THREE.Mesh[] = [];
    
    continentDots.current.forEach((dot) => {
      const position = latLngToVector3(dot.lat, dot.lng, 2.005);
      
      // White dots for normal map points
      const dotColor = 0xffffff; // Pure white
      
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: dotColor,
        transparent: true,
        opacity: 0.8 * dot.brightness
      });
      
      const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
      dotMesh.position.copy(position);
      dotMesh.userData = { 
        originalOpacity: 0.8 * dot.brightness,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.5
      };
      globeGroup.add(dotMesh);
      dotMeshes.push(dotMesh);
    });

    // City markers with only pulse effect (no glow ring)
    const cityMarkers: { marker: THREE.Mesh; pulse: THREE.Mesh }[] = [];
    cities.forEach((city, index) => {
      const position = latLngToVector3(city.lat, city.lng, 2.02);
      const size = 0.015 + (city.importance * 0.02);
      
      // City marker with size based on importance
      const markerGeometry = new THREE.SphereGeometry(size, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      globeGroup.add(marker);

      // Pulse effect only
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

      cityMarkers.push({ marker, pulse });
    });

    // Enhanced arc connections with more realistic flow
    const arcConnections = [
      [0, 1, 0.9], [1, 2, 0.8], [2, 3, 0.7], [3, 4, 0.6], 
      [0, 5, 0.8], [1, 6, 0.7], [6, 3, 0.6], [7, 3, 0.5],
      [8, 0, 0.6], [9, 2, 0.7], [1, 7, 0.5], [5, 2, 0.8]
    ];

    const arcs: THREE.Line[] = [];
    arcConnections.forEach(([startIdx, endIdx, intensity], index) => {
      const startCity = cities[startIdx];
      const endCity = cities[endIdx];
      
      const startPos = latLngToVector3(startCity.lat, startCity.lng, 2.02);
      const endPos = latLngToVector3(endCity.lat, endCity.lng, 2.02);
      
      // Create more realistic arcs with varied heights
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
      
      // Brand color for arc lines
      const baseColor = new THREE.Color(0xd4ff00); // Your brand lime green color
      
      const arcMaterial = new THREE.LineBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.8 * intensity,
        linewidth: 4 // Increased thickness for better visibility
      });
      
      const arc = new THREE.Line(arcGeometry, arcMaterial);
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

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x1a237e, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x3f51b5, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add subtle rim lighting
    const rimLight = new THREE.DirectionalLight(0x64b5f6, 0.3);
    rimLight.position.set(-5, 0, -2);
    scene.add(rimLight);

    // Mouse event handlers with smoother interaction
    const onMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      mousePos.current = { x: event.clientX, y: event.clientY };
      renderer.domElement.style.cursor = 'grabbing';
      autoRotateSpeed.current = 0; // Stop auto rotation when dragging
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - mousePos.current.x;
      const deltaY = event.clientY - mousePos.current.y;

      targetRotation.current.y += deltaX * 0.008;
      targetRotation.current.x += deltaY * 0.008;

      targetRotation.current.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotation.current.x));
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
      renderer.domElement.style.cursor = 'grab';
      setTimeout(() => {
        if (!isDragging.current) {
          autoRotateSpeed.current = 0.002; // Resume auto rotation after delay
        }
      }, 3000);
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.style.cursor = 'grab';

    // Enhanced animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      // Smooth auto-rotation
      if (!isDragging.current) {
        targetRotation.current.y += autoRotateSpeed.current;
      }

      // Smoother rotation interpolation
      rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.08;
      rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.08;

      if (globeGroup) {
        globeGroup.rotation.x = rotation.current.x;
        globeGroup.rotation.y = rotation.current.y;
      }

      // Animate twinkling dots (like Stripe's)
      dotMeshes.forEach((dot) => {
        const twinkle = Math.sin(time * dot.userData.twinkleSpeed + dot.userData.twinklePhase);
        (dot.material as THREE.MeshBasicMaterial).opacity = dot.userData.originalOpacity * (0.3 + 0.7 * Math.abs(twinkle));
      });

      // City animations - only pulse effect now
      cityMarkers.forEach(({ marker, pulse }, index) => {
        const city = cities[index];
        const pulseTime = time * 2 + index * 0.5;
        
        // Main marker pulse
        const scale = 1 + Math.sin(pulseTime) * 0.15 * city.importance;
        marker.scale.setScalar(scale);
        
        // Pulse effect
        const pulsePhase = (time * 1.5 + index) % 3;
        if (pulsePhase < 1) {
          pulse.scale.setScalar(1 + pulsePhase * 2);
          const pulseMaterial = pulse.material as THREE.MeshBasicMaterial;
          pulseMaterial.opacity = (1 - pulsePhase) * 0.8;
        } else {
          const pulseMaterial = pulse.material as THREE.MeshBasicMaterial;
          pulseMaterial.opacity = 0;
          pulse.scale.setScalar(1);
        }
      });

      // Enhanced arc animations with realistic flow
      arcs.forEach((arc) => {
        const flowTime = time * arc.userData.flowSpeed + arc.userData.phase;
        const flow = Math.sin(flowTime) * 0.5 + 0.5;
        const pulse = Math.sin(flowTime * 0.5) * 0.3 + 0.7;
        
        (arc.material as THREE.LineBasicMaterial).opacity = arc.userData.originalOpacity * flow * pulse;
        
        // Subtle color shifting
        const colorShift = Math.sin(flowTime * 0.3) * 0.1;
        const color = new THREE.Color(arc.userData.baseColor);
        color.multiplyScalar(1 + colorShift);
        (arc.material as THREE.LineBasicMaterial).color.copy(color);
      });

      // Subtle atmosphere pulsing
      (atmosphere.material as THREE.MeshBasicMaterial).opacity = 0.12 + Math.sin(time * 0.5) * 0.03;

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

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Brand-themed atmospheric effects */}
      <div className="absolute inset-0 rounded-full opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-600/15 via-blue-700/8 to-transparent blur-3xl" />
      </div>
      
      <div className="absolute inset-8 rounded-full opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-xl" />
      </div>
      
      <div className={cn(
        "relative w-[700px] h-[700px] transition-all duration-2000 ease-out",
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className
      )}>
        <div ref={mountRef} className="w-full h-full" />
        
        {/* Floating particles matching the white dots theme */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 60 + 20) % 60}%`,
                top: `${30 + (i * 40 + 15) % 40}%`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
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