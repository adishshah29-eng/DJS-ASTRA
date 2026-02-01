import { cn } from "@/lib/utils";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  label?: string;
  className?: string;
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  color = "#00ff88",
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  showPercentage = true,
  label,
  className,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showPercentage && (
          <span className="text-2xl font-bold">{Math.round(progress)}%</span>
        )}
        {label && <span className="text-xs text-white/60 mt-1">{label}</span>}
      </div>
    </div>
  );
}
