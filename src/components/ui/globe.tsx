import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

// World map data as dots (simplified continent outlines)
const continentDots = [
  // North America
  ...Array.from({length: 200}, (_, i) => ({
    lat: 45 + Math.random() * 30,
    lng: -120 + Math.random() * 40,
    continent: 'na'
  })),
  ...Array.from({length: 150}, (_, i) => ({
    lat: 30 + Math.random() * 20,
    lng: -100 + Math.random() * 30,
    continent: 'na'
  })),
  
  // South America
  ...Array.from({length: 120}, (_, i) => ({
    lat: -10 + Math.random() * -30,
    lng: -70 + Math.random() * 20,
    continent: 'sa'
  })),
  
  // Europe
  ...Array.from({length: 100}, (_, i) => ({
    lat: 50 + Math.random() * 20,
    lng: -10 + Math.random() * 40,
    continent: 'eu'
  })),
  
  // Africa
  ...Array.from({length: 150}, (_, i) => ({
    lat: 10 + Math.random() * -40,
    lng: 0 + Math.random() * 40,
    continent: 'af'
  })),
  
  // Asia
  ...Array.from({length: 250}, (_, i) => ({
    lat: 30 + Math.random() * 40,
    lng: 60 + Math.random() * 80,
    continent: 'as'
  })),
  
  // Australia
  ...Array.from({length: 80}, (_, i) => ({
    lat: -25 + Math.random() * -10,
    lng: 130 + Math.random() * 25,
    continent: 'au'
  })),
];

// Major cities for arc connections
const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.006, color: 0xff6b6b },
  { name: 'London', lat: 51.5074, lng: -0.1278, color: 0x4ecdc4 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: 0x45b7d1 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, color: 0xf9ca24 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, color: 0xf0932b },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, color: 0xeb4d4b },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, color: 0x6c5ce7 },
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
    const width = 600;
    const height = 600;

    // Create scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 8, 12);
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create globe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Create main sphere (ocean)
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a2332,
      transparent: true,
      opacity: 0.95
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphere);

    // Create dotted continents
    const dotGeometry = new THREE.SphereGeometry(0.008, 6, 6);
    continentDots.forEach((dot) => {
      const position = latLngToVector3(dot.lat, dot.lng, 2.01);
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: 0x64b5f6,
        transparent: true,
        opacity: 0.8
      });
      const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
      dotMesh.position.copy(position);
      globeGroup.add(dotMesh);
    });

    // Add city markers
    const cityMarkers: THREE.Mesh[] = [];
    cities.forEach((city, index) => {
      const position = latLngToVector3(city.lat, city.lng, 2.02);
      
      // City marker
      const markerGeometry = new THREE.SphereGeometry(0.025, 12, 12);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      globeGroup.add(marker);
      cityMarkers.push(marker);

      // Glow ring
      const ringGeometry = new THREE.RingGeometry(0.04, 0.06, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: city.color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);
    });

    // Create animated arcs between cities
    const arcConnections = [
      [0, 1], // NY to London
      [1, 2], // London to Tokyo  
      [2, 3], // Tokyo to Singapore
      [3, 4], // Singapore to Sydney
      [0, 5], // NY to SF
      [1, 6], // London to Dubai
      [6, 3], // Dubai to Singapore
    ];

    const arcs: THREE.Line[] = [];
    arcConnections.forEach(([startIdx, endIdx], index) => {
      const startCity = cities[startIdx];
      const endCity = cities[endIdx];
      
      const startPos = latLngToVector3(startCity.lat, startCity.lng, 2.02);
      const endPos = latLngToVector3(endCity.lat, endCity.lng, 2.02);
      
      // Create high arc
      const distance = startPos.distanceTo(endPos);
      const midPoint = new THREE.Vector3()
        .addVectors(startPos, endPos)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(2 + distance * 0.3);

      const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
      const points = curve.getPoints(64);
      
      const arcGeometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // Gradient-like colors
      const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0x6c5ce7];
      const arcMaterial = new THREE.LineBasicMaterial({
        color: colors[index % colors.length],
        transparent: true,
        opacity: 0.8,
        linewidth: 2
      });
      
      const arc = new THREE.Line(arcGeometry, arcMaterial);
      arc.userData = { 
        originalOpacity: 0.8, 
        phase: index * 0.5,
        color: colors[index % colors.length]
      };
      globeGroup.add(arc);
      arcs.push(arc);
    });

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Mouse event handlers
    const onMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      mousePos.current = { x: event.clientX, y: event.clientY };
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = event.clientX - mousePos.current.x;
      const deltaY = event.clientY - mousePos.current.y;

      targetRotation.current.y += deltaX * 0.01;
      targetRotation.current.x += deltaY * 0.01;

      // Clamp vertical rotation
      targetRotation.current.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotation.current.x));

      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
      renderer.domElement.style.cursor = 'grab';
    };

    // Add event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.style.cursor = 'grab';

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Auto-rotate when not dragging
      if (!isDragging.current) {
        targetRotation.current.y += 0.003;
      }

      // Smooth rotation interpolation
      rotation.current.x += (targetRotation.current.x - rotation.current.x) * 0.1;
      rotation.current.y += (targetRotation.current.y - rotation.current.y) * 0.1;

      if (globeGroup) {
        globeGroup.rotation.x = rotation.current.x;
        globeGroup.rotation.y = rotation.current.y;
      }

      // Animate city markers
      cityMarkers.forEach((marker, index) => {
        const pulse = 1 + Math.sin(time * 3 + index) * 0.2;
        marker.scale.setScalar(pulse);
      });

      // Animate arcs with flowing effect
      arcs.forEach((arc, index) => {
        const phase = arc.userData.phase;
        const flowingOpacity = 0.3 + Math.sin(time * 2 + phase) * 0.5;
        arc.material.opacity = Math.max(0.1, flowingOpacity);
      });

      renderer.render(scene, camera);
    };

    // Start animation
    animate();
    
    // Show after brief delay
    setTimeout(() => setIsLoaded(true), 200);

    // Cleanup function
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

      // Dispose of Three.js objects
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
      {/* Subtle outer glow */}
      <div className="absolute inset-0 rounded-full opacity-60">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-600/10 via-blue-500/5 to-transparent blur-2xl" />
      </div>
      
      {/* Globe container */}
      <div className={cn(
        "relative w-[600px] h-[600px] transition-opacity duration-1500",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}>
        <div ref={mountRef} className="w-full h-full" />
        
        {/* Orbital rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" 
               style={{
                 animation: 'spin 60s linear infinite'
               }} />
          <div 
            className="absolute top-1/2 left-1/2 w-[125%] h-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15"
            style={{
              animation: 'spin 90s linear infinite reverse'
            }}
          />
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="mt-6 flex items-center justify-center space-x-8 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>Global Network</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-red-400" />
            <div className="w-1 h-1 rounded-full bg-green-400" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="w-1 h-1 rounded-full bg-yellow-400" />
          </div>
          <span>Active Connections</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}