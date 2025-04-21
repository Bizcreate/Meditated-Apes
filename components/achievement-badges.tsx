"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Zap, Heart, Star, Lock } from "lucide-react"

export default function AchievementBadges() {
  // Simulated badges data
  const badges = [
    {
      id: 1,
      name: "First Meditation",
      description: "Completed your first meditation session",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
      earned: true,
      date: "April 15, 2023",
    },
    {
      id: 2,
      name: "5-Day Streak",
      description: "Meditated for 5 consecutive days",
      icon: <Zap className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
      earned: true,
      date: "April 20, 2023",
    },
    {
      id: 3,
      name: "Zen Hour",
      description: "Accumulated 60 minutes of meditation",
      icon: <Clock className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      earned: true,
      date: "April 22, 2023",
    },
    {
      id: 4,
      name: "Inner Peace",
      description: "Completed 10 different meditation topics",
      icon: <Heart className="h-6 w-6" />,
      color: "from-rose-500 to-pink-500",
      earned: true,
      date: "April 25, 2023",
    },
    {
      id: 5,
      name: "Cosmic Consciousness",
      description: "Reached meditation level 3",
      icon: <Star className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      earned: true,
      date: "April 28, 2023",
    },
    {
      id: 6,
      name: "10-Day Streak",
      description: "Meditate for 10 consecutive days",
      icon: <Zap className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
      earned: false,
    },
    {
      id: 7,
      name: "Zen Master",
      description: "Accumulate 300 minutes of meditation",
      icon: <Clock className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      earned: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Achievement Badges</h3>
        <Badge className="bg-gradient-to-r from-purple-600 to-indigo-600">
          {badges.filter((badge) => badge.earned).length}/{badges.length} Earned
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => (
          <Card key={badge.id} className={`bg-white/5 border-white/10 text-white ${!badge.earned ? "opacity-60" : ""}`}>
            <CardHeader className="pb-2 flex flex-row items-center space-x-4">
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center`}
              >
                {badge.earned ? badge.icon : <Lock className="h-6 w-6" />}
              </div>
              <div>
                <CardTitle className="text-base">{badge.name}</CardTitle>
                <CardDescription className="text-white/60">
                  {badge.earned ? `Earned on ${badge.date}` : "Not yet earned"}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">{badge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
