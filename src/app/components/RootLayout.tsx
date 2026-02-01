import { Outlet } from "react-router";
import { DesktopNav, MobileNav } from "@/app/components/Navigation";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white dark">
      <DesktopNav />
      <main className="lg:ml-64 pb-20 lg:pb-0">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Outlet />
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
