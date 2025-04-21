"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Calendar, Award, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function MeditationChallenges() {
  // Simulated meditation challenges
  const challenges = [
    {
      id: 1,
      title: "7-Day Mindfulness Challenge",
      description: "Meditate for at least 5 minutes every day for 7 consecutive days",
      participants: 342,
      startDate: "May 1, 2023",
      endDate: "May 7, 2023",
      reward: "Mindfulness Master Badge + 100 $ZEN",
      progress: 71,
      status: "active",
      joined: true,
    },
    {
      id: 2,
      title: "Deep Sleep Improvement",
      description: "Complete 5 sleep meditations in the next 14 days",
      participants: 256,
      startDate: "April 28, 2023",
      endDate: "May 12, 2023",
      reward: "Dream Weaver Badge + 75 $ZEN",
      progress: 40,
      status: "active",
      joined: true,
    },
    {
      id: 3,
      title: "Stress-Free May",
      description: "Complete 10 stress relief meditations during the month of May",
      participants: 198,
      startDate: "May 1, 2023",
      endDate: "May 31, 2023",
      reward: "Zen Master Badge + 150 $ZEN",
      progress: 0,
      status: "upcoming",
      joined: false,
    },
    {
      id: 4,
      title: "Prime Mates Exclusive: Cosmic Journey",
      description: "For Prime Mates NFT holders only. Complete the special Cosmic Journey meditation series",
      participants: 87,
      startDate: "May 5, 2023",
      endDate: "May 20, 2023",
      reward: "Cosmic Explorer Badge + 200 $ZEN + Exclusive NFT",
      progress: 0,
      status: "upcoming",
      joined: false,
      exclusive: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "from-green-500 to-emerald-600"
      case "upcoming":
        return "from-blue-500 to-indigo-600"
      case "completed":
        return "from-purple-500 to-indigo-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "upcoming":
        return "Upcoming"
      case "completed":
        return "Completed"
      default:
        return status
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="bg-white/5 border-white/10 text-white overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg">{challenge.title}</h3>
                <Badge className={`bg-gradient-to-r ${getStatusColor(challenge.status)}`}>
                  {getStatusText(challenge.status)}
                </Badge>
              </div>
              {challenge.exclusive && (
                <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 mt-2 inline-flex">
                  <Trophy className="h-3 w-3 mr-1" />
                  Prime Mates Exclusive
                </Badge>
              )}
            </CardHeader>

            <CardContent className="pb-3">
              <p className="text-white/70 text-sm mb-4">{challenge.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-white/60 text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{challenge.participants} participants</span>
                </div>
                <div className="flex items-center text-white/60 text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>
                    {challenge.startDate} - {challenge.endDate}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-white/80 text-sm">
                  <Award className="h-4 w-4 mr-2 text-amber-400" />
                  <span>Reward: {challenge.reward}</span>
                </div>

                {challenge.status === "active" && challenge.joined && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">Your progress</span>
                      <span className="text-white/60">{challenge.progress}%</span>
                    </div>
                    <Progress
                      value={challenge.progress}
                      className="h-2 bg-white/10"
                      indicatorClassName={`bg-gradient-to-r ${getStatusColor(challenge.status)}`}
                    />
                  </div>
                )}
              </div>
            </CardContent>

            <CardFooter className="border-t border-white/10 pt-4">
              {challenge.joined ? (
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <Clock className="mr-2 h-4 w-4" />
                  {challenge.status === "active" ? "Continue Challenge" : "View Details"}
                </Button>
              ) : (
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  disabled={challenge.exclusive}
                >
                  {challenge.exclusive ? "Prime Mates NFT Required" : "Join Challenge"}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
