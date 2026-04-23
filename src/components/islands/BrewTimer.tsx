import { useState, useEffect } from 'preact/hooks';
import type { BrewStage } from '../../types';

interface Props {
  stages: BrewStage[];
}

const subtitleClass =
  'font-sans font-black uppercase tracking-wide leading-tight text-soft-petal';
const infoClass =
  'font-pixel font-black tracking-wide leading-snug text-vivid-rose';

function PixelButton({
  children,
  onClick,
  variant = 'primary',
  class: className = '',
}: {
  children: preact.ComponentChildren;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  class?: string;
}) {
  const palette = {
    primary: {
      bg: '#FCB5B7',
      fg: '#311E1E',
      shadow: '#8B6465',
      border: '#311E1E',
    },
    secondary: {
      bg: '#546581',
      fg: '#FCB5B7',
      shadow: '#2A374D',
      border: '#8B6465',
    },
    danger: {
      bg: '#8B6465',
      fg: '#FFECEC',
      shadow: '#532F31',
      border: '#311E1E',
    },
  }[variant];

  const clip =
    'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';

  return (
    <button
      onClick={onClick}
      class={`relative block p-[6px] transition-transform ${className}`}
      style={{
        background: palette.border,
        clipPath: clip,
      }}
    >
      <span
        class="block px-4 py-2 font-pixel uppercase tracking-widest text-sm md:text-md"
        style={{
          background: palette.bg,
          color: palette.fg,
          clipPath:
            'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
          boxShadow: `inset -4px -4px 0 ${palette.shadow}, inset 4px 4px 0 rgba(255,255,255,0.25)`,
        }}
      >
        {children}
      </span>
    </button>
  );
}

export default function BrewTimer({ stages }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(stages[0]?.duration || 0);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev: any) => {
          if (prev <= 1) {
            if (currentStage < stages.length - 1) {
              setCurrentStage((stage) => stage + 1);
              return stages[currentStage + 1].duration;
            } else {
              setIsRunning(false);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, currentStage, stages]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStage(0);
    setTimeLeft(stages[0]?.duration || 0);
  };

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
    setTimeLeft(stages[index].duration);
    setIsRunning(false);
  };

  const currentStageData = stages[currentStage];
  const progress = currentStageData
    ? ((currentStageData.duration - timeLeft) / currentStageData.duration) * 100
    : 0;

  return (
    <div class="w-full space-y-5">
      <div class="text-center space-y-2">
        <p
          class={`${infoClass} text-5xl md:text-6xl tabular-nums`}
          style={{
            WebkitTextStroke: '3px #546581',
            paintOrder: 'stroke fill',
          }}
        >
          {formatTime(timeLeft)}
        </p>
        <p class={`${subtitleClass} text-md md:text-lg`}>
          {currentStageData?.name || 'Ready'}
        </p>
      </div>

      <div
        class="relative h-4 w-full overflow-hidden bg-deep-earth"
        style={{
          boxShadow:
            'inset -3px -3px 0 rgba(0,0,0,0.35), inset 3px 3px 0 rgba(255,255,255,0.08)',
          clipPath:
            'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)',
        }}
      >
        <div
          class="h-full bg-vivid-rose transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div class="flex gap-3 justify-center">
        <PixelButton
          onClick={() => setIsRunning(!isRunning)}
          variant="primary"
          class="flex-1 max-w-[240px]"
        >
          {isRunning ? 'Pause' : 'Start'}
        </PixelButton>
        <PixelButton onClick={handleReset} variant="secondary">
          Reset
        </PixelButton>
      </div>

      <ol class="space-y-2">
        {stages.map((stage, index) => {
          const active = index === currentStage;
          return (
            <li key={stage.name}>
              <button
                onClick={() => handleStageClick(index)}
                class={`w-full flex items-center justify-between gap-3 px-4 py-3 border-2 transition-colors text-left ${
                  active
                    ? 'bg-vivid-rose border-vivid-rose text-deep-earth'
                    : 'bg-deep-earth border-dusty-rose text-soft-petal hover:border-vivid-rose'
                }`}
                style={{
                  clipPath:
                    'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
                }}
              >
                <span class="flex items-center gap-3 min-w-0">
                  <span
                    class={`font-pixel text-md shrink-0 ${
                      active ? 'text-deep-earth' : 'text-vivid-rose'
                    }`}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span
                    class={`${subtitleClass} text-md truncate`}
                    style={active ? { color: '#311E1E' } : undefined}
                  >
                    {stage.name}
                  </span>
                </span>
                <span
                  class={`font-pixel text-md shrink-0 tabular-nums ${
                    active ? 'text-deep-earth' : 'text-dusty-rose'
                  }`}
                >
                  {formatTime(stage.duration)}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
