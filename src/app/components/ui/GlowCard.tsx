import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "green" | "blue" | "purple" | "orange";
  hover?: boolean;
}

export function GlowCard({ children, className, glowColor = "green", hover = false }: GlowCardProps) {
  const glowColors = {
    green: "shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_30px_rgba(0,255,136,0.25)]",
    blue: "shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.25)]",
    purple: "shadow-[0_0_20px_rgba(153,51,255,0.15)] hover:shadow-[0_0_30px_rgba(153,51,255,0.25)]",
    orange: "shadow-[0_0_20px_rgba(255,170,0,0.15)] hover:shadow-[0_0_30px_rgba(255,170,0,0.25)]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-[#151515] border border-white/10 p-6 transition-all duration-300",
        hover && "cursor-pointer",
        glowColors[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}
