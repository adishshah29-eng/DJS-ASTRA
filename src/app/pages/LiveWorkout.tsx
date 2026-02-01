import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { 
  Play,
  Pause,
  SkipForward,
  X,
  Heart,
  Flame,
  Zap,
  Volume2,
  ChevronLeft
} from "lucide-react";

export function LiveWorkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(45);
  const [heartRate, setHeartRate] = useState(142);
  const [caloriesBurned, setCaloriesBurned] = useState(87);

  const exercises = [
    { name: "Jumping Jacks", duration: 45, rest: 15 },
    { name: "Push-ups", duration: 40, rest: 20 },
    { name: "Mountain Climbers", duration: 45, rest: 15 },
    { name: "Squats", duration: 50, rest: 15 },
    { name: "Burpees", duration: 40, rest: 20 },
    { name: "Plank Hold", duration: 60, rest: 15 },
  ];

  const currentEx = exercises[currentExercise];
  const progress = ((currentExercise + 1) / exercises.length) * 100;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (currentExercise < exercises.length - 1) {
            setCurrentExercise(currentExercise + 1);
            return exercises[currentExercise + 1].duration;
          } else {
            setIsPlaying(false);
            setTimeout(() => navigate(`/workout/${id}/feedback`), 1000);
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    // Simulate heart rate and calories
    const statsTimer = setInterval(() => {
      setHeartRate((prev) => prev + Math.floor(Math.random() * 3) - 1);
      setCaloriesBurned((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(statsTimer);
    };
  }, [isPlaying, currentExercise, exercises, id, navigate]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setTimeRemaining(exercises[currentExercise + 1].duration);
    }
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit this workout?")) {
      navigate("/workouts");
    }
  };

  const aiCoachMessages = [
    "Keep your core engaged!",
    "You're doing great, maintain this pace!",
    "Focus on your breathing",
    "Push through, you're stronger than you think!",
    "Perfect form! Keep it up!",
  ];

  const [aiMessage, setAiMessage] = useState(aiCoachMessages[0]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setAiMessage(aiCoachMessages[Math.floor(Math.random() * aiCoachMessages.length)]);
    }, 8000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="min-h-screen -m-8 lg:-ml-72 lg:-mr-8 bg-[#0a0a0a] p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/workouts")}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Workouts</span>
          </button>
          <button
            onClick={handleQuit}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Exercise Counter */}
        <div className="text-center">
          <p className="text-white/60 mb-1">
            Exercise {currentExercise + 1} of {exercises.length}
          </p>
        </div>

        {/* Main Timer Card */}
        <GlowCard glowColor="green" className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 via-transparent to-[#00d4ff]/10" />
          <div className="relative z-10 py-12">
            {/* Timer */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                {String(Math.floor(timeRemaining / 60)).padStart(2, "0")}:
                {String(timeRemaining % 60).padStart(2, "0")}
              </div>
              <Badge variant="success" size="lg">
                {currentEx.name}
              </Badge>
            </div>

            {/* Exercise Illustration Placeholder */}
            <div className="w-64 h-64 mx-auto mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-white/40 text-center">
                <Zap className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm">Exercise Animation</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleSkip}
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all"
              >
                <SkipForward className="w-6 h-6" />
              </button>
              
              <button
                onClick={handlePlayPause}
                className="p-6 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-[#0a0a0a]" />
                ) : (
                  <Play className="w-8 h-8 text-[#0a0a0a]" />
                )}
              </button>

              <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </GlowCard>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlowCard glowColor="blue">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#00d4ff]/20">
                <Heart className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <div className="text-3xl font-bold">{heartRate}</div>
                <div className="text-sm text-white/60">Heart Rate (BPM)</div>
              </div>
            </div>
          </GlowCard>

          <GlowCard glowColor="orange">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#ffaa00]/20">
                <Flame className="w-6 h-6 text-[#ffaa00]" />
              </div>
              <div>
                <div className="text-3xl font-bold">{caloriesBurned}</div>
                <div className="text-sm text-white/60">Calories Burned</div>
              </div>
            </div>
          </GlowCard>

          <GlowCard glowColor="green">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#00ff88]/20">
                <Zap className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <div className="text-3xl font-bold">{Math.round(progress)}%</div>
                <div className="text-sm text-white/60">Completed</div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* AI Coach Feedback */}
        <GlowCard glowColor="green" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/20 rounded-full blur-3xl" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00ff88]/20">
              <Zap className="w-6 h-6 text-[#00ff88]" />
            </div>
            <div>
              <div className="text-xs text-[#00ff88] font-semibold mb-1">AI COACH</div>
              <div className="text-lg">{aiMessage}</div>
            </div>
          </div>
        </GlowCard>

        {/* Next Exercise Preview */}
        {currentExercise < exercises.length - 1 && (
          <div className="text-center text-white/60">
            <p className="text-sm mb-1">Next Exercise</p>
            <p className="font-semibold">{exercises[currentExercise + 1].name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
