import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { ProgressRing } from "@/app/components/ui/ProgressRing";
import { 
  Heart,
  Moon,
  Sparkles,
  Clock,
  TrendingUp,
  Battery,
  Droplets,
  Wind,
  Play
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const sleepData = {
  lastNight: {
    duration: 7.5,
    quality: 85,
    deep: 2.2,
    rem: 1.8,
    light: 3.5,
  },
  weekAverage: 7.2,
  goal: 8,
};

const recoveryActivities = [
  {
    id: 1,
    title: "Gentle Yoga Flow",
    duration: "15 min",
    difficulty: "Beginner",
    benefits: "Flexibility & Relaxation",
    image: "https://images.unsplash.com/photo-1552196634-24a18d82ac56?w=400",
  },
  {
    id: 2,
    title: "Foam Rolling Session",
    duration: "10 min",
    difficulty: "Beginner",
    benefits: "Muscle Recovery",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
  },
  {
    id: 3,
    title: "Meditation & Breathing",
    duration: "12 min",
    difficulty: "Beginner",
    benefits: "Stress Relief",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
  },
  {
    id: 4,
    title: "Stretching Routine",
    duration: "20 min",
    difficulty: "Beginner",
    benefits: "Mobility & Flexibility",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
  },
];

export function Recovery() {
  const sleepScore = Math.round(sleepData.lastNight.quality);
  const recoveryScore = 78;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Recovery & Sleep</h1>
        <p className="text-lg text-white/60">Rest and restore for peak performance</p>
      </div>

      {/* Recovery Score Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sleep Quality */}
        <GlowCard glowColor="purple" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#9933ff]/20 to-transparent rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#9933ff]/20">
                <Moon className="w-6 h-6 text-[#9933ff]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Sleep Quality</h2>
                <p className="text-sm text-white/60">Last night</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <ProgressRing
                progress={sleepScore}
                size={140}
                strokeWidth={10}
                color="#9933ff"
                label="Quality"
              />
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white/60">Deep Sleep</span>
                    <span className="text-sm font-semibold">{sleepData.lastNight.deep}h</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9933ff] rounded-full"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white/60">REM Sleep</span>
                    <span className="text-sm font-semibold">{sleepData.lastNight.rem}h</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00d4ff] rounded-full"
                      style={{ width: "24%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white/60">Light Sleep</span>
                    <span className="text-sm font-semibold">{sleepData.lastNight.light}h</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00ff88] rounded-full"
                      style={{ width: "46%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Total Sleep</span>
                <span className="text-lg font-bold">{sleepData.lastNight.duration} hours</span>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* Recovery Score */}
        <GlowCard glowColor="green" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#00ff88]/20 to-transparent rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#00ff88]/20">
                <Battery className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Recovery Score</h2>
                <p className="text-sm text-white/60">Today</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <ProgressRing
                progress={recoveryScore}
                size={140}
                strokeWidth={10}
                color="#00ff88"
                label="Ready"
              />
              <div className="flex-1">
                <Badge variant="success" className="mb-4">Good Recovery</Badge>
                <p className="text-white/80 mb-6">
                  Your body is well-rested and ready for a moderate to high intensity workout today.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#00ff88]" />
                    <span className="text-white/70">Resting HR: 58 BPM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00ff88]" />
                    <span className="text-white/70">HRV: 72 ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#00ff88]" />
                    <span className="text-white/70">Hydration: Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>

      {/* AI Recovery Recommendations */}
      <GlowCard glowColor="green">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#00ff88]/20">
            <Sparkles className="w-6 h-6 text-[#00ff88]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">AI Recovery Recommendations</h3>
            <p className="text-white/80 mb-4">
              Based on your sleep quality and recent workout intensity, here's what I recommend:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-5 h-5 text-[#00d4ff]" />
                  <span className="font-semibold">Active Recovery</span>
                </div>
                <p className="text-sm text-white/70">
                  15-20 min of light yoga or stretching
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-5 h-5 text-[#00d4ff]" />
                  <span className="font-semibold">Hydration</span>
                </div>
                <p className="text-sm text-white/70">
                  Increase water intake by 20% today
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-5 h-5 text-[#9933ff]" />
                  <span className="font-semibold">Sleep Goal</span>
                </div>
                <p className="text-sm text-white/70">
                  Aim for 8 hours tonight for optimal recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Recovery Activities */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Recovery Activities</h2>
            <p className="text-white/60">Help your body recover and rebuild</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recoveryActivities.map((activity) => (
            <GlowCard key={activity.id} hover glowColor="green">
              <div className="relative h-32 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
                <Badge variant="info" className="absolute top-3 right-3" size="sm">
                  {activity.difficulty}
                </Badge>
              </div>

              <h3 className="font-bold mb-2">{activity.title}</h3>
              
              <div className="flex items-center gap-3 mb-3 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{activity.duration}</span>
                </div>
              </div>

              <p className="text-sm text-white/70 mb-4">{activity.benefits}</p>

              <NeonButton className="w-full" size="sm">
                <Play className="w-4 h-4 mr-2" />
                Start
              </NeonButton>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Sleep Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlowCard glowColor="purple">
          <div className="text-center">
            <Moon className="w-8 h-8 mx-auto mb-3 text-[#9933ff]" />
            <div className="text-3xl font-bold mb-1">{sleepData.weekAverage}h</div>
            <div className="text-sm text-white/60">Weekly Average</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="green">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#00ff88]" />
            <div className="text-3xl font-bold mb-1">+12%</div>
            <div className="text-sm text-white/60">Sleep Quality vs Last Week</div>
          </div>
        </GlowCard>

        <GlowCard glowColor="blue">
          <div className="text-center">
            <Heart className="w-8 h-8 mx-auto mb-3 text-[#00d4ff]" />
            <div className="text-3xl font-bold mb-1">58</div>
            <div className="text-sm text-white/60">Resting Heart Rate</div>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
