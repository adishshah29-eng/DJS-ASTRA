import { useState } from "react";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { Badge } from "@/app/components/ui/Badge";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { 
  TrendingUp, 
  Award,
  Calendar,
  Zap,
  Target,
  Dumbbell
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const weightData = [
  { week: "Week 1", weight: 185, goal: 175 },
  { week: "Week 2", weight: 183, goal: 175 },
  { week: "Week 3", weight: 182, goal: 175 },
  { week: "Week 4", weight: 180, goal: 175 },
  { week: "Week 5", weight: 179, goal: 175 },
  { week: "Week 6", weight: 177, goal: 175 },
  { week: "Week 7", weight: 176, goal: 175 },
];

const strengthData = [
  { exercise: "Bench Press", current: 185, previous: 165, improvement: 12 },
  { exercise: "Squats", current: 225, previous: 205, improvement: 10 },
  { exercise: "Deadlift", current: 275, previous: 245, improvement: 12 },
  { exercise: "Pull-ups", current: 15, previous: 10, improvement: 50 },
];

const enduranceData = [
  { month: "Oct", vo2max: 42, runDistance: 12 },
  { month: "Nov", vo2max: 44, runDistance: 15 },
  { month: "Dec", vo2max: 46, runDistance: 18 },
  { month: "Jan", vo2max: 48, runDistance: 22 },
  { month: "Feb", vo2max: 50, runDistance: 25 },
];

const achievements = [
  { id: 1, title: "7-Day Streak", icon: "🔥", unlocked: true, date: "Feb 1, 2026" },
  { id: 2, title: "First 5K", icon: "🏃", unlocked: true, date: "Jan 28, 2026" },
  { id: 3, title: "100 Workouts", icon: "💯", unlocked: true, date: "Jan 15, 2026" },
  { id: 4, title: "Early Bird", icon: "🌅", unlocked: false, date: null },
  { id: 5, title: "Beast Mode", icon: "🦁", unlocked: false, date: null },
  { id: 6, title: "Marathon Ready", icon: "🏅", unlocked: false, date: null },
];

export function Progress() {
  const [timeRange, setTimeRange] = useState<"week" | "month">("month");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Progress & Analytics</h1>
          <p className="text-lg text-white/60">Track your fitness journey with AI insights</p>
        </div>
        <div className="flex gap-2">
          <NeonButton
            variant={timeRange === "week" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setTimeRange("week")}
          >
            Weekly
          </NeonButton>
          <NeonButton
            variant={timeRange === "month" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setTimeRange("month")}
          >
            Monthly
          </NeonButton>
        </div>
      </div>

      {/* AI Performance Insight */}
      <GlowCard glowColor="green">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#00ff88]/20">
            <Zap className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">AI Performance Analysis</h3>
              <Badge variant="success" size="sm">+18% This Month</Badge>
            </div>
            <p className="text-white/80 mb-4">
              Exceptional progress! Your consistency and progressive overload strategy are paying off.
              You've increased strength by an average of 11% across all exercises while maintaining proper form.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00ff88]" />
                <span className="text-white/70">Strength: +11%</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#00d4ff]" />
                <span className="text-white/70">Endurance: +19%</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#ffaa00]" />
                <span className="text-white/70">Consistency: 94%</span>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Weight Progress Chart */}
      <GlowCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Weight Progress</h2>
            <p className="text-sm text-white/60">Tracking towards your goal</p>
          </div>
          <Badge variant="success">-9 lbs</Badge>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weightData}>
            <defs>
              <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="week" 
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
              domain={[170, 190]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#151515",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="weight"
              stroke="#00ff88"
              strokeWidth={3}
              fill="url(#weightGradient)"
            />
            <Line
              type="monotone"
              dataKey="goal"
              stroke="#00d4ff"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </GlowCard>

      {/* Strength Progress */}
      <GlowCard>
        <div className="flex items-center gap-2 mb-6">
          <Dumbbell className="w-6 h-6 text-[#00ff88]" />
          <h2 className="text-xl font-semibold">Strength Gains</h2>
        </div>
        <div className="space-y-4">
          {strengthData.map((exercise) => (
            <div key={exercise.exercise}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{exercise.exercise}</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/60 text-sm">{exercise.previous} lbs → </span>
                  <span className="text-[#00ff88] font-bold">{exercise.current} lbs</span>
                  <Badge variant="success" size="sm">+{exercise.improvement}%</Badge>
                </div>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full"
                  style={{ width: `${Math.min((exercise.improvement / 50) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </GlowCard>

      {/* Endurance Chart */}
      <GlowCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Endurance Performance</h2>
            <p className="text-sm text-white/60">VO2 Max & Running Distance</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={enduranceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#151515",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Legend 
              wrapperStyle={{ color: "#fff" }}
            />
            <Bar dataKey="vo2max" fill="#00d4ff" name="VO2 Max" radius={[8, 8, 0, 0]} />
            <Bar dataKey="runDistance" fill="#00ff88" name="Distance (km)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </GlowCard>

      {/* Achievements */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-[#ffaa00]" />
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement) => (
            <GlowCard
              key={achievement.id}
              glowColor={achievement.unlocked ? "orange" : "green"}
              className="text-center"
            >
              <div
                className={`text-4xl mb-2 ${
                  !achievement.unlocked && "opacity-30 grayscale"
                }`}
              >
                {achievement.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
              {achievement.unlocked ? (
                <p className="text-xs text-[#00ff88]">{achievement.date}</p>
              ) : (
                <p className="text-xs text-white/40">Locked</p>
              )}
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <GlowCard glowColor="green" className="text-center">
          <div className="text-3xl font-bold mb-1">127</div>
          <div className="text-sm text-white/60">Total Workouts</div>
        </GlowCard>
        
        <GlowCard glowColor="blue" className="text-center">
          <div className="text-3xl font-bold mb-1">63</div>
          <div className="text-sm text-white/60">Active Days</div>
        </GlowCard>
        
        <GlowCard glowColor="orange" className="text-center">
          <div className="text-3xl font-bold mb-1">45.2</div>
          <div className="text-sm text-white/60">Hours Trained</div>
        </GlowCard>
        
        <GlowCard glowColor="purple" className="text-center">
          <div className="text-3xl font-bold mb-1">23k</div>
          <div className="text-sm text-white/60">Calories Burned</div>
        </GlowCard>
      </div>
    </div>
  );
}
