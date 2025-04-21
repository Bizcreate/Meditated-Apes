"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Calendar, Headphones, Award, Sparkles, Check } from "lucide-react"

export default function CollectionStats() {
  // Simulated collection stats
  const stats = {
    totalMeditations: 5,
    completedMeditations: 3,
    totalMinutes: 45,
    lastSession: "Today",
    streak: 4,
    zenTokens: 75,
    nextReward: 100,
  }

  // Calculate progress percentage
  const collectionProgress = (stats.completedMeditations / stats.totalMeditations) * 100
  const rewardProgress = (stats.zenTokens / stats.nextReward) * 100

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/70">Collection Progress</h3>
              <Headphones className="h-5 w-5 text-purple-300" />
            </div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/60">Completed</span>
              <span className="text-white/60">
                {stats.completedMeditations}/{stats.totalMeditations}
              </span>
            </div>
            <Progress
              value={collectionProgress}
              className="h-2 bg-white/10"
              indicatorClassName="bg-gradient-to-r from-purple-500 to-indigo-500"
            />
            <p className="text-xs text-white/50 mt-2">
              {stats.completedMeditations === stats.totalMeditations
                ? "All meditations completed!"
                : `${stats.totalMeditations - stats.completedMeditations} meditations remaining`}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/70">Meditation Time</h3>
              <Clock className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.totalMinutes} min</span>
              <span className="text-xs text-white/60 mt-1">Total meditation time</span>
            </div>
            <div className="flex items-center mt-2 text-xs text-white/50">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Last session: {stats.lastSession}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/70">Current Streak</h3>
              <Award className="h-5 w-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.streak} days</span>
              <span className="text-xs text-white/60 mt-1">Keep your streak going!</span>
            </div>
            <div className="flex justify-between mt-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    i < stats.streak ? "bg-gradient-to-br from-amber-500 to-orange-600" : "bg-white/10"
                  }`}
                >
                  {i < stats.streak ? (
                    <Check className="h-3 w-3 text-white" />
                  ) : (
                    <span className="text-xs text-white/40">{i + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/70">$ZEN Tokens</h3>
              <Sparkles className="h-5 w-5 text-purple-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{stats.zenTokens}</span>
              <span className="text-xs text-white/60 mt-1">Earned from meditations</span>
            </div>
            <div className="space-y-1 mt-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Next reward</span>
                <span className="text-white/60">
                  {stats.zenTokens}/{stats.nextReward}
                </span>
              </div>
              <Progress
                value={rewardProgress}
                className="h-2 bg-white/10"
                indicatorClassName="bg-gradient-to-r from-emerald-500 to-teal-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
