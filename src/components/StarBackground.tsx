import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { PointsProps } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, Component } from "react";
import type { ReactNode } from "react";
import type { Points as PointsType } from "three";

/**
 * Error boundary that catches WebGL/Three.js failures gracefully.
 * When WebGL is unavailable (e.g., headless browsers, old devices),
 * renders nothing instead of crashing the entire React app.
 */
class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // WebGL context creation failed -- silently degrade
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Respect the user's OS-level reduced-motion preference (guarded for prerender)
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (prefersReducedMotion()) return;
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <CanvasErrorBoundary>
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop={prefersReducedMotion() ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  </CanvasErrorBoundary>
);

