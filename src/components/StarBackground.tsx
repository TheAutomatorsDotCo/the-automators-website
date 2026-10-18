import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { PointsProps } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, Component, useEffect, lazy } from "react";
import type { ReactNode } from "react";
import type { Points as PointsType } from "three";

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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (prefersReducedMotion()) return;
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
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
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

function StarCanvasInner() {
  return (
    <div className="w-full h-auto fixed inset-0 -z-10 motion-reduce:hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop={prefersReducedMotion() ? "demand" : "always"}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}

export const StarsCanvas = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(() => setShouldRender(true), { timeout: 2000 });
      return () => (window as any).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShouldRender(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <CanvasErrorBoundary>
      <StarCanvasInner />
    </CanvasErrorBoundary>
  );
};

