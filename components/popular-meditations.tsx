"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Heart, Download, Clock, User, Headphones } from "lucide-react"
import Link from "next/link"

export default function PopularMeditations() {
  // Simulated popular meditations
  const popularMeditations = [
    {
      id: "meditation-popular-1",
      title: "Cosmic Consciousness Journey",
      creator: "Zen Master",
      duration: 15,
      plays: 1243,
      likes: 342,
      downloads: 89,
      image: "/celestial-contemplation.png",
    },
    {
      id: "meditation-popular-2",
      title: "Deep Forest Relaxation",
      creator: "Mindful Ape",
      duration: 10,
      plays: 987,
      likes: 256,
      downloads: 67,
      image: "/placeholder.svg?height=200&width=200&query=forest meditation",
    },
    {
      id: "meditation-popular-3",
      title: "Ocean Waves Tranquility",
      creator: "Cosmic Explorer",
      duration: 20,
      plays: 876,
      likes: 198,
      downloads: 45,
      image: "/placeholder.svg?height=200&width=200&query=ocean meditation",
    },
    {
      id: "meditation-popular-4",
      title: "Stress Relief & Inner Peace",
      creator: "Calm Monkey",
      duration: 8,
      plays: 765,
      likes: 187,
      downloads: 42,
      image: "/placeholder.svg?height=200&width=200&query=stress relief meditation",
    },
    {
      id: "meditation-popular-5",
      title: "Abundance Manifestation",
      creator: "Prosperity Guide",
      duration: 12,
      plays: 654,
      likes: 165,
      downloads: 38,
      image: "/placeholder.svg?height=200&width=200&query=abundance meditation",
    },
    {
      id: "meditation-popular-6",
      title: "Dreamscape Journey",
      creator: "Sleep Master",
      duration: 25,
      plays: 543,
      likes: 143,
      downloads: 32,
      image: "/placeholder.svg?height=200&width=200&query=dream meditation",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularMeditations.map((meditation) => (
          <Card key={meditation.id} className="bg-white/5 border-white/10 text-white overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-emerald-900/50 overflow-hidden">
                <img
                  src={meditation.image || "/placeholder.svg"}
                  alt={meditation.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href={`/meditations/${meditation.id}`}>
                  <Button size="icon" className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 w-12 z-10">
                    <Play className="h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>

            <CardContent className="p-4">
              <Link href={`/meditations/${meditation.id}`}>
                <h3 className="font-medium text-lg hover:text-purple-300 transition-colors">{meditation.title}</h3>
              </Link>

              <div className="flex items-center text-white/60 text-sm mt-1 mb-3">
                <User className="h-3 w-3 mr-1" />
                <span>{meditation.creator}</span>
                <span className="mx-2">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{meditation.duration} min</span>
              </div>

              <div className="flex items-center justify-between text-white/60 text-xs">
                <div className="flex items-center">
                  <Headphones className="h-3 w-3 mr-1" />
                  <span>{meditation.plays}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  <span>{meditation.likes}</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-3 w-3 mr-1" />
                  <span>{meditation.downloads}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
