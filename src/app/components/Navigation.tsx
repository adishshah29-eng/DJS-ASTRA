import { Link, useLocation } from "react-router";
import { 
  Home, 
  Dumbbell, 
  TrendingUp, 
  Apple, 
  Heart, 
  Users, 
  User 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Dashboard" },
  { path: "/workouts", icon: Dumbbell, label: "Workouts" },
  { path: "/progress", icon: TrendingUp, label: "Progress" },
  { path: "/nutrition", icon: Apple, label: "Nutrition" },
  { path: "/recovery", icon: Heart, label: "Recovery" },
  { path: "/community", icon: Users, label: "Community" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[#0f0f0f] border-r border-white/10 flex-col p-6 z-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
          AI Fitness
        </h1>
      </div>
      <div className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-white/10 px-4 py-3 z-50">
      <div className="flex items-center justify-around">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300",
                isActive
                  ? "text-[#00ff88]"
                  : "text-white/60"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
