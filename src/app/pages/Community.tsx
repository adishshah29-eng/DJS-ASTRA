import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  Trophy,
  Users,
  TrendingUp,
  Flame,
  Target,
  Medal,
  Clock,
  Heart
} from "lucide-react";

const activeChallenges = [
  {
    id: 1,
    name: "February Fitness Challenge",
    description: "Complete 20 workouts this month",
    participants: 1247,
    progress: 65,
    current: 13,
    goal: 20,
    daysLeft: 15,
    reward: "Exclusive Badge + 500 XP",
  },
  {
    id: 2,
    name: "Cardio King",
    description: "Burn 5000 calories this week",
    participants: 823,
    progress: 78,
    current: 3890,
    goal: 5000,
    daysLeft: 3,
    reward: "Gold Medal",
  },
  {
    id: 3,
    name: "Early Bird Sprint",
    description: "Complete 5 morning workouts",
    participants: 456,
    progress: 40,
    current: 2,
    goal: 5,
    daysLeft: 7,
    reward: "Morning Warrior Badge",
  },
];

const leaderboard = [
  { rank: 1, name: "Sarah M.", points: 8420, avatar: "🏆", trend: "up" },
  { rank: 2, name: "Mike Chen", points: 8105, avatar: "🥈", trend: "same" },
  { rank: 3, name: "Emma L.", points: 7890, avatar: "🥉", trend: "up" },
  { rank: 4, name: "You (Alex)", points: 7654, avatar: "💪", trend: "up", isYou: true },
  { rank: 5, name: "David K.", points: 7432, avatar: "⚡", trend: "down" },
  { rank: 6, name: "Lisa Park", points: 7201, avatar: "🔥", trend: "up" },
  { rank: 7, name: "Tom Wilson", points: 6987, avatar: "🎯", trend: "same" },
];

const friendsActivity = [
  {
    id: 1,
    name: "Sarah M.",
    action: "completed",
    workout: "HIIT Cardio Blast",
    time: "2 hours ago",
    calories: 340,
  },
  {
    id: 2,
    name: "Mike Chen",
    action: "achieved",
    workout: "New Personal Record: Bench Press 225 lbs",
    time: "5 hours ago",
    calories: null,
  },
  {
    id: 3,
    name: "Emma L.",
    action: "joined",
    workout: "February Fitness Challenge",
    time: "8 hours ago",
    calories: null,
  },
  {
    id: 4,
    name: "David K.",
    action: "completed",
    workout: "Morning Yoga Flow",
    time: "12 hours ago",
    calories: 120,
  },
];

export function Community() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Community & Challenges</h1>
        <p className="text-lg text-white/60">Connect, compete, and achieve together</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlowCard glowColor="orange">
          <div className="text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-[#ffaa00]" />
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-white/60">Challenges Won</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="blue">
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-[#00d4ff]" />
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-sm text-white/60">Friends</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="green">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#00ff88]" />
            <div className="text-3xl font-bold mb-1">#4</div>
            <div className="text-sm text-white/60">Leaderboard Rank</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="purple">
          <div className="text-center">
            <Medal className="w-8 h-8 mx-auto mb-2 text-[#9933ff]" />
            <div className="text-3xl font-bold mb-1">7,654</div>
            <div className="text-sm text-white/60">Total Points</div>
          </div>
        </GlowCard>
      </div>

      {/* Active Challenges */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Active Challenges</h2>
            <p className="text-white/60">Push your limits and earn rewards</p>
          </div>
          <NeonButton variant="outline" size="sm">
            Browse All
          </NeonButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeChallenges.map((challenge) => (
            <GlowCard key={challenge.id} glowColor="green" hover>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{challenge.name}</h3>
                  <p className="text-sm text-white/60">{challenge.description}</p>
                </div>
                <Badge variant="info" size="sm">
                  {challenge.daysLeft}d left
                </Badge>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Progress</span>
                  <span className="font-semibold">
                    {challenge.current} / {challenge.goal}
                  </span>
                </div>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full"
                    style={{ width: `${challenge.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-white/60">{challenge.progress}% Complete</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
                <Users className="w-4 h-4" />
                <span>{challenge.participants.toLocaleString()} participants</span>
              </div>

              <div className="p-3 rounded-xl bg-[#ffaa00]/10 border border-[#ffaa00]/20 mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#ffaa00]" />
                  <span className="text-sm font-semibold text-[#ffaa00]">Reward:</span>
                  <span className="text-sm text-white/80">{challenge.reward}</span>
                </div>
              </div>

              <NeonButton className="w-full" size="sm">
                View Details
              </NeonButton>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-6 h-6 text-[#ffaa00]" />
          <h2 className="text-2xl font-bold">This Week's Leaderboard</h2>
        </div>

        <GlowCard>
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  user.isYou
                    ? "bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="text-2xl font-bold text-white/40 w-8">
                  #{user.rank}
                </div>
                <div className="text-3xl">{user.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-white/60">{user.points.toLocaleString()} points</div>
                </div>
                <div>
                  {user.trend === "up" && (
                    <div className="flex items-center gap-1 text-[#00ff88]">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">↑</span>
                    </div>
                  )}
                  {user.trend === "down" && (
                    <div className="flex items-center gap-1 text-[#ff3366]">
                      <TrendingUp className="w-4 h-4 rotate-180" />
                      <span className="text-xs">↓</span>
                    </div>
                  )}
                  {user.trend === "same" && (
                    <div className="text-white/40 text-xs">—</div>
                  )}
                </div>
                {user.rank <= 3 && (
                  <Badge 
                    variant={user.rank === 1 ? "warning" : user.rank === 2 ? "info" : "default"}
                    size="sm"
                  >
                    {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </GlowCard>
      </div>

      {/* Friends Activity Feed */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Friends Activity</h2>
            <p className="text-white/60">See what your friends are up to</p>
          </div>
          <NeonButton variant="ghost" size="sm">
            <Users className="w-4 h-4 mr-2" />
            Find Friends
          </NeonButton>
        </div>

        <div className="space-y-3">
          {friendsActivity.map((activity) => (
            <GlowCard key={activity.id}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center font-bold text-lg">
                  {activity.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="mb-1">
                    <span className="font-semibold">{activity.name}</span>{" "}
                    <span className="text-white/60">{activity.action}</span>{" "}
                    <span className="text-[#00ff88]">{activity.workout}</span>
                  </p>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                    {activity.calories && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          <span>{activity.calories} cal</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Heart className="w-5 h-5 text-white/40 hover:text-[#ff3366]" />
                </button>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
