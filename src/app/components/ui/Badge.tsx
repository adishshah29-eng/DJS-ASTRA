import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({ children, variant = "default", size = "md", className }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border-white/20",
    success: "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30",
    warning: "bg-[#ffaa00]/20 text-[#ffaa00] border-[#ffaa00]/30",
    error: "bg-[#ff3366]/20 text-[#ff3366] border-[#ff3366]/30",
    info: "bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-semibold",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
