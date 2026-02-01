import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export function NeonButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  ...props 
}: NeonButtonProps) {
  const variants = {
    primary: "bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90 shadow-[0_0_20px_rgba(0,255,136,0.3)]",
    secondary: "bg-[#00d4ff] text-[#0a0a0a] hover:bg-[#00d4ff]/90 shadow-[0_0_20px_rgba(0,212,255,0.3)]",
    ghost: "bg-transparent text-white hover:bg-white/5 border border-white/10",
    outline: "bg-transparent text-[#00ff88] hover:bg-[#00ff88]/10 border border-[#00ff88]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
