"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Calendar, Award, Zap, BarChart3 } from "lucide-react"

export default function UserStats() {
  // Simulated user stats
  const stats = {
    totalMeditations: 28,
    totalMinutes: 120,
    longestStreak: 7,
    currentStreak: 3,
    badges: 5,
    zenTokens: 145,
    level: 3,
    xpToNextLevel: 75,
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/70 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-purple-300" />
              Total Meditations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMeditations}</div>
            <p className="text-xs text-white/50 mt-1">+3 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/70 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-emerald-300" />
              Total Minutes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMinutes}</div>
            <p className="text-xs text-white/50 mt-1">+15 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/70 flex items-center">
              <Zap className="h-4 w-4 mr-2 text-amber-300" />
              Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.currentStreak} days</div>
            <p className="text-xs text-white/50 mt-1">Longest: {stats.longestStreak} days</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/70 flex items-center">
              <Award className="h-4 w-4 mr-2 text-rose-300" />
              Badges Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.badges}</div>
            <p className="text-xs text-white/50 mt-1">2 more available</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-medium flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-300" />
              Meditation Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end gap-2">
              {[3, 5, 2, 7, 4, 6, 3].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-purple-600 to-indigo-600 rounded-t-sm"
                    style={{ height: `${(value / 7) * 150}px` }}
                  ></div>
                  <span className="text-xs text-white/50">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Meditation Level</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-4xl font-bold">
                    {stats.level}
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-1">
                  <div className="bg-indigo-900 rounded-full p-1">
                    <Award className="h-5 w-5 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">XP to next level</span>
                <span className="text-white/70">{stats.xpToNextLevel}/100</span>
              </div>
              <Progress
                value={stats.xpToNextLevel}
                max={100}
                className="h-2 bg-white/10"
                indicatorClassName="bg-gradient-to-r from-purple-500 to-indigo-500"
              />
              <p className="text-xs text-white/50 text-center mt-2">
                Meditate daily to earn XP and level up your practice
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
