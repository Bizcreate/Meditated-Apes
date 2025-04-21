"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function MeditationHistory() {
  // Simulated meditation history
  const meditations = [
    {
      id: "meditation-1",
      title: "Inner Peace & Letting Go",
      date: "April 28, 2023",
      duration: 10,
      voice: "Gentle Female",
      background: "Tibetan Bowls",
      likes: 3,
    },
    {
      id: "meditation-2",
      title: "Focus & Concentration",
      date: "April 26, 2023",
      duration: 5,
      voice: "Soft Male",
      background: "Ambient Lo-Fi",
      likes: 2,
    },
    {
      id: "meditation-3",
      title: "Abundance & Gratitude",
      date: "April 24, 2023",
      duration: 15,
      voice: "Gentle Female",
      background: "Ocean Waves",
      likes: 5,
    },
    {
      id: "meditation-4",
      title: "Stress Relief",
      date: "April 22, 2023",
      duration: 10,
      voice: "Robotic Monk",
      background: "Jungle Sounds",
      likes: 1,
    },
    {
      id: "meditation-5",
      title: "Deep Sleep",
      date: "April 20, 2023",
      duration: 20,
      voice: "Whispering Alien",
      background: "Tibetan Bowls",
      likes: 4,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Your Meditation History</h3>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {meditations.map((meditation) => (
          <Card key={meditation.id} className="bg-white/5 border-white/10 text-white overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Meditation Visualization */}
              <div className="w-full md:w-1/4 aspect-video md:aspect-square bg-gradient-to-br from-purple-900/50 to-emerald-900/50 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/30 to-emerald-500/30 blur-xl animate-pulse"></div>
                </div>
                <Link href={`/meditations/${meditation.id}`}>
                  <Button size="icon" className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 w-12 z-10">
                    <Play className="h-6 w-6" />
                  </Button>
                </Link>
              </div>

              {/* Meditation Info */}
              <div className="flex-1 p-4 md:p-6">
                <Link href={`/meditations/${meditation.id}`}>
                  <h4 className="text-lg font-medium hover:text-purple-300 transition-colors">{meditation.title}</h4>
                </Link>

                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="text-xs bg-emerald-900/50 text-emerald-200 px-2 py-1 rounded-full">
                    {meditation.duration} minutes
                  </span>
                  <span className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                    {meditation.voice}
                  </span>
                  <span className="text-xs bg-indigo-900/50 text-indigo-200 px-2 py-1 rounded-full">
                    {meditation.background}
                  </span>
                </div>

                <div className="flex items-center text-white/60 text-sm mt-auto">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{meditation.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{meditation.duration} min</span>
                  <Heart className="h-4 w-4 mr-1" />
                  <span>{meditation.likes}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
