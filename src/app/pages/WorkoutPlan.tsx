import { useState } from "react";
import { Link } from "react-router";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  Calendar,
  Clock, 
  Flame, 
  TrendingUp,
  CheckCircle2,
  Circle,
  Heart,
  Dumbbell,
  Wind,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weeklyPlan = [
  {
    day: "Mon",
    date: "Feb 3",
    workouts: [
      {
        id: 1,
        title: "Upper Body Strength",
        duration: "35 min",
        calories: 280,
        difficulty: "Intermediate",
        type: "Strength",
        completed: true,
      },
    ],
    recovery: "Good",
  },
  {
    day: "Tue",
    date: "Feb 4",
    workouts: [
      {
        id: 2,
        title: "HIIT Cardio",
        duration: "25 min",
        calories: 320,
        difficulty: "Advanced",
        type: "Cardio",
        completed: true,
      },
    ],
    recovery: "Moderate",
  },
  {
    day: "Wed",
    date: "Feb 5",
    workouts: [
      {
        id: 3,
        title: "Yoga & Mobility",
        duration: "30 min",
        calories: 120,
        difficulty: "Beginner",
        type: "Recovery",
        completed: false,
      },
    ],
    recovery: "Excellent",
  },
  {
    day: "Thu",
    date: "Feb 6",
    workouts: [
      {
        id: 4,
        title: "Lower Body Power",
        duration: "40 min",
        calories: 350,
        difficulty: "Advanced",
        type: "Strength",
        completed: false,
      },
    ],
    recovery: "Good",
  },
  {
    day: "Fri",
    date: "Feb 7",
    workouts: [
      {
        id: 5,
        title: "Core & Conditioning",
        duration: "30 min",
        calories: 240,
        difficulty: "Intermediate",
        type: "Strength",
        completed: false,
      },
    ],
    recovery: "Good",
  },
  {
    day: "Sat",
    date: "Feb 8",
    workouts: [
      {
        id: 6,
        title: "Active Recovery Run",
        duration: "20 min",
        calories: 180,
        difficulty: "Beginner",
        type: "Cardio",
        completed: false,
      },
    ],
    recovery: "Excellent",
  },
  {
    day: "Sun",
    date: "Feb 9",
    workouts: [],
    recovery: "Excellent",
    restDay: true,
  },
];

export function WorkoutPlan() {
  const [selectedDay, setSelectedDay] = useState(2); // Wednesday

  const currentDay = weeklyPlan[selectedDay];

  const getRecoveryColor = (recovery: string) => {
    switch (recovery) {
      case "Excellent":
        return "success";
      case "Good":
        return "info";
      case "Moderate":
        return "warning";
      default:
        return "default";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Strength":
        return Dumbbell;
      case "Cardio":
        return Wind;
      case "Recovery":
        return Heart;
      default:
        return TrendingUp;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Weekly Workout Plan</h1>
        <p className="text-lg text-white/60">AI-optimized training schedule for maximum results</p>
      </div>

      {/* AI Optimization Banner */}
      <GlowCard glowColor="green">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#00ff88]/20">
            <Sparkles className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Plan Updated 2 hours ago</h3>
            <p className="text-sm text-white/70">
              I've adjusted your intensity based on your recent performance gains. 
              You're ready for more advanced challenges!
            </p>
          </div>
          <NeonButton variant="outline" size="sm">
            Customize
          </NeonButton>
        </div>
      </GlowCard>

      {/* Week Calendar */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-[#00ff88]" />
          <h2 className="text-xl font-semibold">This Week</h2>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {weeklyPlan.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={cn(
                "p-4 rounded-xl border transition-all duration-300",
                selectedDay === index
                  ? "bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 border-[#00ff88]/50 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                  : "bg-[#151515] border-white/10 hover:border-white/20"
              )}
            >
              <div className="text-xs text-white/60 mb-1">{day.day}</div>
              <div className="text-sm font-semibold mb-2">{day.date}</div>
              {day.restDay ? (
                <Heart className="w-5 h-5 mx-auto text-white/40" />
              ) : (
                <div className="flex justify-center">
                  {day.workouts[0]?.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  ) : (
                    <Circle className="w-5 h-5 text-white/40" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Day Details */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              {currentDay.day}, {currentDay.date}
            </h2>
            <div className="flex items-center gap-2">
              <Badge variant={getRecoveryColor(currentDay.recovery)} size="sm">
                {currentDay.recovery} Recovery
              </Badge>
            </div>
          </div>
        </div>

        {currentDay.restDay ? (
          <GlowCard glowColor="purple" className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-4 text-[#9933ff]" />
            <h3 className="text-2xl font-bold mb-2">Rest & Recovery Day</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Your body needs time to rebuild and grow stronger. 
              Consider light stretching or a relaxing walk.
            </p>
            <Link to="/recovery">
              <NeonButton variant="secondary">
                View Recovery Tips
              </NeonButton>
            </Link>
          </GlowCard>
        ) : (
          <div className="space-y-4">
            {currentDay.workouts.map((workout) => {
              const TypeIcon = getTypeIcon(workout.type);
              
              return (
                <GlowCard key={workout.id} glowColor="green" className="relative">
                  {workout.completed && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="success">Completed</Badge>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#00ff88]/20">
                          <TypeIcon className="w-5 h-5 text-[#00ff88]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{workout.title}</h3>
                          <p className="text-sm text-white/60">{workout.type} Training</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-4 h-4" />
                          <span>{workout.calories} cal</span>
                        </div>
                        <Badge 
                          variant={workout.difficulty === "Beginner" ? "info" : workout.difficulty === "Intermediate" ? "warning" : "error"}
                          size="sm"
                        >
                          {workout.difficulty}
                        </Badge>
                      </div>

                      <div className="mt-4 p-3 rounded-xl bg-white/5">
                        <p className="text-sm text-white/80">
                          <span className="text-[#00ff88] font-semibold">AI Tip:</span> {" "}
                          {workout.type === "Recovery" 
                            ? "Focus on breathing and full range of motion for optimal recovery."
                            : workout.type === "Cardio"
                            ? "Maintain 70-80% max heart rate for best fat burning results."
                            : "Progressive overload - try adding 5% more weight than last session."}
                        </p>
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-3">
                      <Link to={`/workout/${workout.id}`} className="flex-1 lg:flex-initial">
                        <NeonButton className="w-full" disabled={workout.completed}>
                          {workout.completed ? "Completed" : "Start Workout"}
                        </NeonButton>
                      </Link>
                      <NeonButton variant="ghost" className="flex-1 lg:flex-initial">
                        Preview
                      </NeonButton>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        )}
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlowCard glowColor="green">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#00ff88]" />
            <div className="text-3xl font-bold mb-1">5/7</div>
            <div className="text-sm text-white/60">Workouts Completed</div>
          </div>
        </GlowCard>
        
        <GlowCard glowColor="orange">
          <div className="text-center">
            <Flame className="w-8 h-8 mx-auto mb-2 text-[#ffaa00]" />
            <div className="text-3xl font-bold mb-1">2,340</div>
            <div className="text-sm text-white/60">Total Calories</div>
          </div>
        </GlowCard>
        
        <GlowCard glowColor="blue">
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-[#00d4ff]" />
            <div className="text-3xl font-bold mb-1">3h 25m</div>
            <div className="text-sm text-white/60">Training Time</div>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
