import { useState } from "react";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  User,
  Mail,
  Calendar,
  Ruler,
  Weight,
  Target,
  Watch,
  Smartphone,
  Bell,
  Lock,
  Moon,
  LogOut,
  Edit,
  Check,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const connectedDevices = [
  { id: 1, name: "Apple Watch Series 9", type: "watch", connected: true, lastSync: "2 min ago" },
  { id: 2, name: "iPhone 15 Pro", type: "phone", connected: true, lastSync: "Just now" },
];

export function Profile() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    age: 28,
    height: 175,
    weight: 176,
    goal: "Lose Weight",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-lg text-white/60">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <GlowCard glowColor="green" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff88]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center text-4xl font-bold text-[#0a0a0a]">
                {userData.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#00ff88] flex items-center justify-center shadow-lg">
                <Edit className="w-4 h-4 text-[#0a0a0a]" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">{userData.name}</h2>
                <Badge variant="success">Premium</Badge>
              </div>
              <p className="text-white/60 mb-4">{userData.email}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#00ff88]" />
                  <span className="text-white/70">Member since Jan 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#00d4ff]" />
                  <span className="text-white/70">{userData.goal}</span>
                </div>
              </div>
            </div>

            <NeonButton
              variant={isEditing ? "ghost" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </NeonButton>
          </div>
        </div>
      </GlowCard>

      {/* Personal Information */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00ff88]/20">
                <User className="w-5 h-5 text-[#00ff88]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  />
                ) : (
                  <div className="font-semibold">{userData.name}</div>
                )}
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00d4ff]/20">
                <Mail className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  />
                ) : (
                  <div className="font-semibold">{userData.email}</div>
                )}
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#9933ff]/20">
                <Calendar className="w-5 h-5 text-[#9933ff]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Age</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={userData.age}
                    onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  />
                ) : (
                  <div className="font-semibold">{userData.age} years</div>
                )}
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#ffaa00]/20">
                <Target className="w-5 h-5 text-[#ffaa00]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Fitness Goal</label>
                {isEditing ? (
                  <select
                    value={userData.goal}
                    onChange={(e) => setUserData({ ...userData, goal: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="Lose Weight">Lose Weight</option>
                    <option value="Build Muscle">Build Muscle</option>
                    <option value="Stay Fit">Stay Fit</option>
                    <option value="Improve Endurance">Improve Endurance</option>
                  </select>
                ) : (
                  <div className="font-semibold">{userData.goal}</div>
                )}
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00ff88]/20">
                <Ruler className="w-5 h-5 text-[#00ff88]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Height</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={userData.height}
                    onChange={(e) => setUserData({ ...userData, height: parseInt(e.target.value) })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  />
                ) : (
                  <div className="font-semibold">{userData.height} cm</div>
                )}
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#00d4ff]/20">
                <Weight className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-white/60 block mb-1">Weight</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={userData.weight}
                    onChange={(e) => setUserData({ ...userData, weight: parseInt(e.target.value) })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
                  />
                ) : (
                  <div className="font-semibold">{userData.weight} lbs</div>
                )}
              </div>
            </div>
          </GlowCard>
        </div>

        {isEditing && (
          <div className="mt-6 flex gap-4">
            <NeonButton onClick={handleSave} className="flex-1">
              <Check className="w-4 h-4 mr-2" />
              Save Changes
            </NeonButton>
          </div>
        )}
      </div>

      {/* Connected Devices */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Connected Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {connectedDevices.map((device) => (
            <GlowCard key={device.id} glowColor="green">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00ff88]/20">
                  {device.type === "watch" ? (
                    <Watch className="w-6 h-6 text-[#00ff88]" />
                  ) : (
                    <Smartphone className="w-6 h-6 text-[#00ff88]" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{device.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                    <span className="text-sm text-white/60">Synced {device.lastSync}</span>
                  </div>
                </div>
                <NeonButton variant="ghost" size="sm">
                  Remove
                </NeonButton>
              </div>
            </GlowCard>
          ))}
          
          <GlowCard className="border-dashed border-2 border-white/20 bg-transparent hover:bg-white/5 cursor-pointer transition-all">
            <div className="flex items-center justify-center gap-3 py-6 text-white/60">
              <Plus className="w-5 h-5" />
              <span>Connect New Device</span>
            </div>
          </GlowCard>
        </div>
      </div>

      {/* Preferences */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Preferences</h2>
        <div className="space-y-4">
          <GlowCard>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#9933ff]/20">
                  <Moon className="w-6 h-6 text-[#9933ff]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dark Mode</h4>
                  <p className="text-sm text-white/60">Use dark theme throughout the app</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={cn(
                  "relative w-14 h-8 rounded-full transition-colors",
                  darkMode ? "bg-[#00ff88]" : "bg-white/20"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-6 h-6 rounded-full bg-white transition-transform",
                    darkMode ? "translate-x-7" : "translate-x-1"
                  )}
                />
              </button>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00d4ff]/20">
                  <Bell className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Push Notifications</h4>
                  <p className="text-sm text-white/60">Receive workout reminders and updates</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={cn(
                  "relative w-14 h-8 rounded-full transition-colors",
                  notifications ? "bg-[#00ff88]" : "bg-white/20"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1 w-6 h-6 rounded-full bg-white transition-transform",
                    notifications ? "translate-x-7" : "translate-x-1"
                  )}
                />
              </button>
            </div>
          </GlowCard>

          <GlowCard hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00ff88]/20">
                  <Lock className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Privacy & Security</h4>
                  <p className="text-sm text-white/60">Manage your data and privacy settings</p>
                </div>
              </div>
              <NeonButton variant="ghost" size="sm">
                Manage
              </NeonButton>
            </div>
          </GlowCard>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <NeonButton variant="outline" className="w-full">
          Export My Data
        </NeonButton>
        <NeonButton variant="ghost" className="w-full text-[#ff3366] hover:bg-[#ff3366]/10">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </NeonButton>
      </div>
    </div>
  );
}

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
