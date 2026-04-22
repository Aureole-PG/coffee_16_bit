import { useMemo } from 'preact/hooks';
import type { Recipe } from '../../types';

interface GrindDot {
  id: number;
  size: number;
  left: number;
  top: number;
}

function generateGrindDots(grindSize: Recipe['grindSize']): GrindDot[] {
  const config = {
    fine: { count: 80, sizeRange: [2, 4] },
    medium: { count: 45, sizeRange: [4, 8] },
    coarse: { count: 22, sizeRange: [8, 14] },
  }[grindSize];

  return Array.from({ length: config.count }, (_, i) => ({
    id: i,
    size: Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0],
    left: Math.random() * 90 + 5,
    top: Math.random() * 90 + 5,
  }));
}

interface Props {
  grindSize: Recipe['grindSize'];
}

export default function GrindVisualizer({ grindSize }: Props) {
  const dots = useMemo(() => generateGrindDots(grindSize), [grindSize]);

  return (
    <div
      class="relative h-32 md:h-40 w-full overflow-hidden bg-deep-earth"
      style={{
        boxShadow:
          'inset -4px -4px 0 rgba(0,0,0,0.35), inset 4px 4px 0 rgba(255,255,255,0.08)',
        clipPath:
          'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          class="absolute rounded-full bg-vivid-rose"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
