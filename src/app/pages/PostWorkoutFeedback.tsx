import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  TrendingUp,
  Flame,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const difficultyLevels = [
  { value: 1, label: "Too Easy", emoji: "😴" },
  { value: 2, label: "Easy", emoji: "😊" },
  { value: 3, label: "Just Right", emoji: "💪" },
  { value: 4, label: "Challenging", emoji: "😅" },
  { value: 5, label: "Too Hard", emoji: "😰" },
];

const muscleGroups = [
  { id: "chest", label: "Chest" },
  { id: "back", label: "Back" },
  { id: "shoulders", label: "Shoulders" },
  { id: "arms", label: "Arms" },
  { id: "core", label: "Core" },
  { id: "legs", label: "Legs" },
  { id: "glutes", label: "Glutes" },
];

export function PostWorkoutFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const [soreMuscles, setSoreMuscles] = useState<string[]>([]);
  const [enjoyment, setEnjoyment] = useState<"liked" | "disliked" | null>(null);

  const handleSubmit = () => {
    // In a real app, this would send feedback to the backend
    console.log({ difficulty, soreMuscles, enjoyment });
    navigate("/");
  };

  const toggleMuscle = (muscleId: string) => {
    setSoreMuscles((prev) =>
      prev.includes(muscleId)
        ? prev.filter((id) => id !== muscleId)
        : [...prev, muscleId]
    );
  };

  const workoutStats = {
    title: "HIIT Cardio Blast",
    duration: "25 min",
    caloriesBurned: 287,
    avgHeartRate: 152,
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Completion Banner */}
      <GlowCard glowColor="green" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 via-transparent to-[#00d4ff]/20" />
        <div className="relative z-10 py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-[#0a0a0a]" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Workout Complete! 🎉</h1>
          <p className="text-lg text-white/70">Great job on completing {workoutStats.title}</p>
        </div>
      </GlowCard>

      {/* Workout Summary */}
      <div className="grid grid-cols-3 gap-4">
        <GlowCard glowColor="blue">
          <div className="text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-[#00d4ff]" />
            <div className="text-2xl font-bold mb-1">{workoutStats.duration}</div>
            <div className="text-xs text-white/60">Duration</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="orange">
          <div className="text-center">
            <Flame className="w-6 h-6 mx-auto mb-2 text-[#ffaa00]" />
            <div className="text-2xl font-bold mb-1">{workoutStats.caloriesBurned}</div>
            <div className="text-xs text-white/60">Calories</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="purple">
          <div className="text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-[#9933ff]" />
            <div className="text-2xl font-bold mb-1">{workoutStats.avgHeartRate}</div>
            <div className="text-xs text-white/60">Avg BPM</div>
          </div>
        </GlowCard>
      </div>

      {/* Feedback Form */}
      <GlowCard>
        <h2 className="text-2xl font-bold mb-6">Help AI Coach Improve Your Plan</h2>

        {/* Difficulty Rating */}
        <div className="mb-8">
          <label className="block mb-4">
            How difficult was this workout?
          </label>
          <div className="grid grid-cols-5 gap-3">
            {difficultyLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setDifficulty(level.value)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all duration-300 text-center",
                  difficulty === level.value
                    ? "border-[#00ff88] bg-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                )}
              >
                <div className="text-3xl mb-2">{level.emoji}</div>
                <div className="text-xs font-semibold">{level.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Muscle Soreness */}
        <div className="mb-8">
          <label className="block mb-4">
            Which muscle groups feel most worked?
          </label>
          <div className="flex flex-wrap gap-3">
            {muscleGroups.map((muscle) => (
              <button
                key={muscle.id}
                onClick={() => toggleMuscle(muscle.id)}
                className={cn(
                  "px-4 py-2 rounded-xl border transition-all duration-300",
                  soreMuscles.includes(muscle.id)
                    ? "border-[#00d4ff] bg-[#00d4ff]/20 text-[#00d4ff]"
                    : "border-white/20 bg-white/5 hover:border-white/30"
                )}
              >
                {muscle.label}
              </button>
            ))}
          </div>
        </div>

        {/* Enjoyment */}
        <div className="mb-8">
          <label className="block mb-4">
            Did you enjoy this workout?
          </label>
          <div className="flex gap-4">
            <button
              onClick={() => setEnjoyment("liked")}
              className={cn(
                "flex-1 p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-3",
                enjoyment === "liked"
                  ? "border-[#00ff88] bg-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              )}
            >
              <ThumbsUp className={cn(
                "w-6 h-6",
                enjoyment === "liked" ? "text-[#00ff88]" : "text-white/60"
              )} />
              <span className="font-semibold">Yes, I liked it!</span>
            </button>

            <button
              onClick={() => setEnjoyment("disliked")}
              className={cn(
                "flex-1 p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-3",
                enjoyment === "disliked"
                  ? "border-[#ff3366] bg-[#ff3366]/20 shadow-[0_0_20px_rgba(255,51,102,0.3)]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              )}
            >
              <ThumbsDown className={cn(
                "w-6 h-6",
                enjoyment === "disliked" ? "text-[#ff3366]" : "text-white/60"
              )} />
              <span className="font-semibold">Not really</span>
            </button>
          </div>
        </div>
      </GlowCard>

      {/* AI Insights */}
      <GlowCard glowColor="green">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#00ff88]/20">
            <Sparkles className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">AI Coach Analysis</h3>
            <p className="text-white/80 text-sm">
              Your feedback helps me personalize your future workouts. Based on your selections,
              I'll adjust the intensity, exercise selection, and recovery periods to better match your goals.
            </p>
          </div>
        </div>
      </GlowCard>

      {/* Submit Button */}
      <div className="flex gap-4">
        <NeonButton
          variant="ghost"
          className="flex-1"
          onClick={() => navigate("/")}
        >
          Skip for Now
        </NeonButton>
        <NeonButton
          className="flex-1"
          onClick={handleSubmit}
          disabled={!difficulty || !enjoyment}
        >
          Submit Feedback
        </NeonButton>
      </div>
    </div>
  );
}
