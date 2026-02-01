import { Link } from "react-router";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { StatCard } from "@/app/components/ui/StatCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  Flame, 
  Footprints, 
  Clock, 
  Target, 
  TrendingUp,
  Sparkles,
  ChevronRight,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Dashboard() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";
  
  const workoutRecommendations = [
    {
      id: 1,
      title: "HIIT Cardio Blast",
      duration: "25 min",
      calories: 320,
      difficulty: "Intermediate",
      aiReason: "High intensity to match your improved cardio endurance",
      image: "https://images.unsplash.com/photo-1580058572462-98e2c0e0e2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHdvbWFuJTIwZXhlcmNpc2luZ3xlbnwxfHx8fDE3Njk5NTg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Upper Body Strength",
      duration: "35 min",
      calories: 280,
      difficulty: "Intermediate",
      aiReason: "Targeting arms and chest based on your weekly plan",
      image: "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY5OTMyNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Recovery Yoga Flow",
      duration: "20 min",
      calories: 80,
      difficulty: "Beginner",
      aiReason: "Active recovery recommended after yesterday's intensity",
      image: "https://images.unsplash.com/photo-1552196634-24a18d82ac56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3RyZXRjaGluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5ODk5MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">{greeting}, Alex 👋</h1>
          <p className="text-lg text-white/60">Ready to crush your fitness goals today?</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-sm text-white/60">4-day streak</span>
        </div>
      </div>

      {/* Daily Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Calories Burned"
          value={1247}
          unit="kcal"
          icon={Flame}
          glowColor="orange"
          gradient
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Steps Today"
          value="8.2k"
          unit="/ 10k"
          icon={Footprints}
          glowColor="green"
          gradient
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Minutes"
          value={87}
          unit="min"
          icon={Clock}
          glowColor="blue"
          gradient
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Weekly Goal"
          value={78}
          unit="%"
          icon={Target}
          glowColor="purple"
          gradient
        />
      </div>

      {/* AI Insight Card */}
      <GlowCard glowColor="green" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff88]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#00ff88]/20">
            <Sparkles className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">AI Coach Insight</h3>
              <Badge variant="success" size="sm">Today</Badge>
            </div>
            <p className="text-white/80 mb-4">
              Your cardiovascular endurance has improved by 18% over the past 3 weeks! 
              I've optimized today's workout to include more challenging intervals to maintain this momentum.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#00ff88]">
              <TrendingUp className="w-4 h-4" />
              <span>Performance trending upward</span>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* AI Workout Recommendations */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Recommended For You</h2>
            <p className="text-white/60">AI-optimized workouts based on your progress</p>
          </div>
          <Link to="/workouts">
            <NeonButton variant="ghost" size="sm">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </NeonButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutRecommendations.map((workout) => (
            <Link key={workout.id} to={`/workout/${workout.id}`}>
              <GlowCard hover glowColor="green" className="h-full">
                <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
                  <Badge 
                    variant={workout.difficulty === "Beginner" ? "info" : "success"} 
                    className="absolute top-4 right-4"
                  >
                    {workout.difficulty}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{workout.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    <span>{workout.calories} cal</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20">
                  <Zap className="w-4 h-4 text-[#00ff88] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/80">{workout.aiReason}</p>
                </div>

                <NeonButton className="w-full mt-4" size="md">
                  Start Workout
                </NeonButton>
              </GlowCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/nutrition">
          <GlowCard hover glowColor="blue" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-[#00d4ff]" />
            </div>
            <h4 className="font-semibold mb-1">Log Meal</h4>
            <p className="text-sm text-white/60">Track nutrition</p>
          </GlowCard>
        </Link>
        
        <Link to="/progress">
          <GlowCard hover glowColor="purple" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#9933ff]/20 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-[#9933ff]" />
            </div>
            <h4 className="font-semibold mb-1">View Progress</h4>
            <p className="text-sm text-white/60">See your stats</p>
          </GlowCard>
        </Link>

        <Link to="/recovery">
          <GlowCard hover glowColor="green" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#00ff88]/20 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-[#00ff88]" />
            </div>
            <h4 className="font-semibold mb-1">Recovery</h4>
            <p className="text-sm text-white/60">Rest & restore</p>
          </GlowCard>
        </Link>

        <Link to="/community">
          <GlowCard hover glowColor="orange" className="text-center">
            <div className="w-12 h-12 rounded-xl bg-[#ffaa00]/20 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-[#ffaa00]" />
            </div>
            <h4 className="font-semibold mb-1">Challenges</h4>
            <p className="text-sm text-white/60">Join friends</p>
          </GlowCard>
        </Link>
      </div>
    </div>
  );
}
