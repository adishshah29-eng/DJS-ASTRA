import { GlowCard } from "@/app/components/ui/GlowCard";
import { NeonButton } from "@/app/components/ui/NeonButton";
import { Badge } from "@/app/components/ui/Badge";
import { ProgressRing } from "@/app/components/ui/ProgressRing";
import { 
  Apple,
  Plus,
  Sparkles,
  Utensils,
  Coffee,
  Sun,
  Moon,
  TrendingUp
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const macros = {
  protein: { current: 128, goal: 150, color: "#00ff88" },
  carbs: { current: 180, goal: 200, color: "#00d4ff" },
  fats: { current: 52, goal: 60, color: "#ffaa00" },
};

const mealSuggestions = [
  {
    id: 1,
    name: "Grilled Chicken Bowl",
    meal: "Lunch",
    calories: 520,
    protein: 45,
    carbs: 48,
    fats: 18,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    aiReason: "High protein to support your strength training",
  },
  {
    id: 2,
    name: "Salmon & Quinoa",
    meal: "Dinner",
    calories: 480,
    protein: 38,
    carbs: 42,
    fats: 20,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    aiReason: "Omega-3s for recovery and anti-inflammation",
  },
  {
    id: 3,
    name: "Greek Yogurt Parfait",
    meal: "Snack",
    calories: 280,
    protein: 22,
    carbs: 35,
    fats: 8,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
    aiReason: "Perfect post-workout protein boost",
  },
];

const todaysMeals = [
  {
    id: 1,
    name: "Oatmeal with Berries",
    time: "7:30 AM",
    meal: "Breakfast",
    calories: 340,
    logged: true,
  },
  {
    id: 2,
    name: "Protein Shake",
    time: "10:00 AM",
    meal: "Snack",
    calories: 180,
    logged: true,
  },
];

export function Nutrition() {
  const totalCalories = 1847;
  const calorieGoal = 2200;
  const calorieProgress = (totalCalories / calorieGoal) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Nutrition</h1>
        <p className="text-lg text-white/60">Fuel your body for optimal performance</p>
      </div>

      {/* Calorie Goal Ring */}
      <GlowCard glowColor="green" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff88]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ProgressRing
              progress={calorieProgress}
              size={180}
              strokeWidth={12}
              color="#00ff88"
              showPercentage={false}
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Daily Calorie Goal</h2>
              <div className="flex items-baseline gap-2 justify-center md:justify-start mb-4">
                <span className="text-5xl font-bold text-[#00ff88]">{totalCalories}</span>
                <span className="text-2xl text-white/60">/ {calorieGoal}</span>
                <span className="text-lg text-white/60">kcal</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Badge variant="success">{calorieGoal - totalCalories} kcal remaining</Badge>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Macros Breakdown */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Macronutrients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlowCard glowColor="green">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Protein</h3>
              <span className="text-sm text-white/60">
                {macros.protein.current}g / {macros.protein.goal}g
              </span>
            </div>
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="absolute inset-y-0 left-0 bg-[#00ff88] rounded-full"
                style={{ width: `${(macros.protein.current / macros.protein.goal) * 100}%` }}
              />
            </div>
            <p className="text-xs text-white/60">
              {Math.round((macros.protein.current / macros.protein.goal) * 100)}% of daily goal
            </p>
          </GlowCard>

          <GlowCard glowColor="blue">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Carbs</h3>
              <span className="text-sm text-white/60">
                {macros.carbs.current}g / {macros.carbs.goal}g
              </span>
            </div>
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="absolute inset-y-0 left-0 bg-[#00d4ff] rounded-full"
                style={{ width: `${(macros.carbs.current / macros.carbs.goal) * 100}%` }}
              />
            </div>
            <p className="text-xs text-white/60">
              {Math.round((macros.carbs.current / macros.carbs.goal) * 100)}% of daily goal
            </p>
          </GlowCard>

          <GlowCard glowColor="orange">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Fats</h3>
              <span className="text-sm text-white/60">
                {macros.fats.current}g / {macros.fats.goal}g
              </span>
            </div>
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="absolute inset-y-0 left-0 bg-[#ffaa00] rounded-full"
                style={{ width: `${(macros.fats.current / macros.fats.goal) * 100}%` }}
              />
            </div>
            <p className="text-xs text-white/60">
              {Math.round((macros.fats.current / macros.fats.goal) * 100)}% of daily goal
            </p>
          </GlowCard>
        </div>
      </div>

      {/* AI Meal Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-[#00ff88]" />
              <h2 className="text-2xl font-bold">AI Meal Suggestions</h2>
            </div>
            <p className="text-white/60">Optimized for your fitness goals</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mealSuggestions.map((meal) => (
            <GlowCard key={meal.id} glowColor="green">
              <div className="relative h-40 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                <ImageWithFallback
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
                <Badge variant="info" className="absolute top-4 left-4">
                  {meal.meal}
                </Badge>
              </div>

              <h3 className="text-lg font-bold mb-3">{meal.name}</h3>

              <div className="grid grid-cols-4 gap-2 mb-4 text-center">
                <div>
                  <div className="text-lg font-bold text-[#ffaa00]">{meal.calories}</div>
                  <div className="text-xs text-white/60">cal</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#00ff88]">{meal.protein}g</div>
                  <div className="text-xs text-white/60">protein</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#00d4ff]">{meal.carbs}g</div>
                  <div className="text-xs text-white/60">carbs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#9933ff]">{meal.fats}g</div>
                  <div className="text-xs text-white/60">fats</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 mb-4">
                <p className="text-xs text-white/80">
                  <span className="text-[#00ff88] font-semibold">AI:</span> {meal.aiReason}
                </p>
              </div>

              <NeonButton className="w-full" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add to Log
              </NeonButton>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Today's Meals */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Today's Meals</h2>
          <NeonButton variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Log Meal
          </NeonButton>
        </div>

        <div className="space-y-3">
          {todaysMeals.map((meal) => {
            const MealIcon = meal.meal === "Breakfast" ? Coffee : meal.meal === "Lunch" ? Sun : meal.meal === "Dinner" ? Moon : Utensils;
            
            return (
              <GlowCard key={meal.id}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#00ff88]/20">
                    <MealIcon className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{meal.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span>{meal.time}</span>
                      <span>•</span>
                      <span>{meal.meal}</span>
                      <span>•</span>
                      <span>{meal.calories} cal</span>
                    </div>
                  </div>
                  <Badge variant="success">Logged</Badge>
                </div>
              </GlowCard>
            );
          })}
          
          <GlowCard className="border-dashed border-2 border-white/20 bg-transparent hover:bg-white/5 cursor-pointer transition-all">
            <div className="flex items-center justify-center gap-3 py-4 text-white/60">
              <Plus className="w-5 h-5" />
              <span>Add another meal</span>
            </div>
          </GlowCard>
        </div>
      </div>

      {/* Hydration Tracker */}
      <GlowCard glowColor="blue">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00d4ff]/20">
              <TrendingUp className="w-6 h-6 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Water Intake</h3>
              <p className="text-sm text-white/60">6 / 8 glasses today</p>
            </div>
          </div>
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-12 rounded-full ${
                  i < 6 ? "bg-[#00d4ff]" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
