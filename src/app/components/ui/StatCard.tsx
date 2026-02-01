import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  glowColor?: "green" | "blue" | "purple" | "orange";
  gradient?: boolean;
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  trend, 
  glowColor = "green",
  gradient = false,
  className 
}: StatCardProps) {
  const glowColors = {
    green: "from-[#00ff88]/20 to-transparent",
    blue: "from-[#00d4ff]/20 to-transparent",
    purple: "from-[#9933ff]/20 to-transparent",
    orange: "from-[#ffaa00]/20 to-transparent",
  };

  const iconColors = {
    green: "text-[#00ff88]",
    blue: "text-[#00d4ff]",
    purple: "text-[#9933ff]",
    orange: "text-[#ffaa00]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-[#151515] border border-white/10 p-6 relative overflow-hidden",
        className
      )}
    >
      {gradient && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-50",
            glowColors[glowColor]
          )}
        />
      )}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm text-white/60">{title}</p>
          {Icon && <Icon className={cn("w-5 h-5", iconColors[glowColor])} />}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{value}</span>
          {unit && <span className="text-lg text-white/60">{unit}</span>}
        </div>
        {trend && (
          <div className="mt-2 flex items-center gap-1">
            <span
              className={cn(
                "text-sm font-semibold",
                trend.isPositive ? "text-[#00ff88]" : "text-[#ff3366]"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}%
            </span>
            <span className="text-sm text-white/40">vs last week</span>
          </div>
        )}
      </div>
    </div>
  );
}
