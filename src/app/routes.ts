import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/components/RootLayout";
import { Dashboard } from "@/app/pages/Dashboard";
import { WorkoutPlan } from "@/app/pages/WorkoutPlan";
import { LiveWorkout } from "@/app/pages/LiveWorkout";
import { PostWorkoutFeedback } from "@/app/pages/PostWorkoutFeedback";
import { Progress } from "@/app/pages/Progress";
import { Nutrition } from "@/app/pages/Nutrition";
import { Recovery } from "@/app/pages/Recovery";
import { Community } from "@/app/pages/Community";
import { Profile } from "@/app/pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "workouts", Component: WorkoutPlan },
      { path: "workout/:id", Component: LiveWorkout },
      { path: "workout/:id/feedback", Component: PostWorkoutFeedback },
      { path: "progress", Component: Progress },
      { path: "nutrition", Component: Nutrition },
      { path: "recovery", Component: Recovery },
      { path: "community", Component: Community },
      { path: "profile", Component: Profile },
    ],
  },
]);
