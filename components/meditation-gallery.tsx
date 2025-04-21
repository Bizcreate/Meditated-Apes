"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, BookmarkPlus, Clock, User, Headphones, Plus, Check } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

type MeditationGalleryProps = {
  duration: string
}

export default function MeditationGallery({ duration }: MeditationGalleryProps) {
  const { toast } = useToast()
  const [collectedMeditations, setCollectedMeditations] = useState<string[]>([])

  // Simulated gallery meditations
  const allMeditations = [
    {
      id: "meditation-gallery-1",
      title: "Morning Clarity & Focus",
      creator: "Zen Master",
      duration: 5,
      category: "Focus",
      plays: 1243,
      likes: 342,
      image: "/morning-clarity.jpg",
      isNew: true,
      isPremium: false,
    },
    {
      id: "meditation-gallery-2",
      title: "Deep Forest Relaxation",
      creator: "Mindful Ape",
      duration: 10,
      category: "Relaxation",
      plays: 987,
      likes: 256,
      image: "/deep-forest.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-3",
      title: "Ocean Waves Tranquility",
      creator: "Cosmic Explorer",
      duration: 15,
      category: "Sleep",
      plays: 876,
      likes: 198,
      image: "/ocean-waves.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-4",
      title: "Stress Relief & Inner Peace",
      creator: "Calm Monkey",
      duration: 5,
      category: "Stress Relief",
      plays: 765,
      likes: 187,
      image: "/stress-relief.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-5",
      title: "Abundance Manifestation",
      creator: "Prosperity Guide",
      duration: 10,
      category: "Manifestation",
      plays: 654,
      likes: 165,
      image: "/abundance.jpg",
      isNew: true,
      isPremium: false,
    },
    {
      id: "meditation-gallery-6",
      title: "Dreamscape Journey",
      creator: "Sleep Master",
      duration: 20,
      category: "Sleep",
      plays: 543,
      likes: 143,
      image: "/dreamscape.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-7",
      title: "Chakra Alignment",
      creator: "Energy Healer",
      duration: 15,
      category: "Energy",
      plays: 432,
      likes: 121,
      image: "/chakra-alignment.jpg",
      isNew: false,
      isPremium: true,
    },
    {
      id: "meditation-gallery-8",
      title: "Cosmic Consciousness",
      creator: "Astral Guide",
      duration: 30,
      category: "Spiritual",
      plays: 321,
      likes: 98,
      image: "/cosmic-consciousness.jpg",
      isNew: false,
      isPremium: true,
    },
    {
      id: "meditation-gallery-9",
      title: "Quick Mindfulness Reset",
      creator: "Zen Master",
      duration: 5,
      category: "Mindfulness",
      plays: 210,
      likes: 76,
      image: "/mindfulness-reset.jpg",
      isNew: true,
      isPremium: false,
    },
    {
      id: "meditation-gallery-10",
      title: "Gratitude Practice",
      creator: "Thankful Heart",
      duration: 10,
      category: "Gratitude",
      plays: 198,
      likes: 65,
      image: "/gratitude.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-11",
      title: "Deep Sleep Preparation",
      creator: "Sleep Master",
      duration: 20,
      category: "Sleep",
      plays: 187,
      likes: 54,
      image: "/deep-sleep.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-12",
      title: "Anxiety Relief",
      creator: "Calm Monkey",
      duration: 15,
      category: "Anxiety",
      plays: 176,
      likes: 43,
      image: "/anxiety-relief.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-13",
      title: "Cosmic Energy Boost",
      creator: "Astral Guide",
      duration: 5,
      category: "Energy",
      plays: 165,
      likes: 32,
      image: "/energy-boost.jpg",
      isNew: true,
      isPremium: false,
    },
    {
      id: "meditation-gallery-14",
      title: "Full Body Relaxation",
      creator: "Mindful Ape",
      duration: 30,
      category: "Relaxation",
      plays: 154,
      likes: 21,
      image: "/body-relaxation.jpg",
      isNew: false,
      isPremium: false,
    },
    {
      id: "meditation-gallery-15",
      title: "Loving Kindness",
      creator: "Compassion Teacher",
      duration: 20,
      category: "Compassion",
      plays: 143,
      likes: 19,
      image: "/loving-kindness.jpg",
      isNew: false,
      isPremium: true,
    },
  ]

  // Filter meditations based on duration
  const filteredMeditations =
    duration === "all" ? allMeditations : allMeditations.filter((med) => med.duration.toString() === duration)

  const addToCollection = (id: string) => {
    if (!collectedMeditations.includes(id)) {
      setCollectedMeditations([...collectedMeditations, id])

      toast({
        title: "Added to Collection!",
        description: "Meditation added to your collection. +5 $ZEN tokens earned!",
        duration: 3000,
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMeditations.map((meditation) => (
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
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                {meditation.isNew && <Badge className="bg-emerald-600">New</Badge>}
                {meditation.isPremium && (
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600">Premium</Badge>
                )}
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Link href={`/meditations/${meditation.id}`}>
                    <h3 className="font-medium text-lg hover:text-purple-300 transition-colors">{meditation.title}</h3>
                  </Link>

                  <div className="flex items-center text-white/60 text-sm mt-1">
                    <User className="h-3 w-3 mr-1" />
                    <span>{meditation.creator}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{meditation.duration} min</span>
                  </div>

                  <Badge variant="outline" className="mt-2 bg-white/5">
                    {meditation.category}
                  </Badge>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full h-8 w-8 ${
                    collectedMeditations.includes(meditation.id)
                      ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => addToCollection(meditation.id)}
                >
                  {collectedMeditations.includes(meditation.id) ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-between text-white/60 text-xs mt-4">
                <div className="flex items-center">
                  <Headphones className="h-3 w-3 mr-1" />
                  <span>{meditation.plays}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  <span>{meditation.likes}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/5 h-7 px-2">
                  <BookmarkPlus className="h-3 w-3 mr-1" />
                  Collect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
