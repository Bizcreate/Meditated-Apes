"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, Trash2, Clock, User, Headphones, Star, Calendar, Check } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

type MeditationCollectionProps = {
  filter: string
}

export default function MeditationCollection({ filter }: MeditationCollectionProps) {
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<string[]>(["meditation-collection-1", "meditation-collection-3"])

  // Simulated collection meditations
  const allCollectionMeditations = [
    {
      id: "meditation-collection-1",
      title: "Morning Clarity & Focus",
      creator: "Zen Master",
      duration: 5,
      category: "Focus",
      lastPlayed: "Today",
      completions: 3,
      image: "/morning-clarity.jpg",
      isNFT: false,
      completed: true,
    },
    {
      id: "meditation-collection-2",
      title: "Deep Forest Relaxation",
      creator: "Mindful Ape",
      duration: 10,
      category: "Relaxation",
      lastPlayed: "Yesterday",
      completions: 2,
      image: "/deep-forest.jpg",
      isNFT: false,
      completed: true,
    },
    {
      id: "meditation-collection-3",
      title: "Ocean Waves Tranquility",
      creator: "Cosmic Explorer",
      duration: 15,
      category: "Sleep",
      lastPlayed: "3 days ago",
      completions: 1,
      image: "/ocean-waves.jpg",
      isNFT: true,
      completed: true,
    },
    {
      id: "meditation-collection-4",
      title: "Stress Relief & Inner Peace",
      creator: "Calm Monkey",
      duration: 5,
      category: "Stress Relief",
      lastPlayed: "Never",
      completions: 0,
      image: "/stress-relief.jpg",
      isNFT: false,
      completed: false,
    },
    {
      id: "meditation-collection-5",
      title: "Abundance Manifestation",
      creator: "Prosperity Guide",
      duration: 10,
      category: "Manifestation",
      lastPlayed: "Never",
      completions: 0,
      image: "/abundance.jpg",
      isNFT: false,
      completed: false,
    },
  ]

  // Filter meditations based on filter type
  const filteredMeditations = (() => {
    switch (filter) {
      case "favorites":
        return allCollectionMeditations.filter((med) => favorites.includes(med.id))
      case "completed":
        return allCollectionMeditations.filter((med) => med.completed)
      case "nft":
        return allCollectionMeditations.filter((med) => med.isNFT)
      default:
        return allCollectionMeditations
    }
  })()

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
      toast({
        title: "Removed from Favorites",
        description: "Meditation removed from your favorites.",
        duration: 3000,
      })
    } else {
      setFavorites([...favorites, id])
      toast({
        title: "Added to Favorites",
        description: "Meditation added to your favorites.",
        duration: 3000,
      })
    }
  }

  const removeFromCollection = (id: string) => {
    toast({
      title: "Removed from Collection",
      description: "Meditation removed from your collection.",
      duration: 3000,
    })
  }

  return (
    <div className="space-y-6">
      {filteredMeditations.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-white/70 mb-4">No meditations found</h3>
          <p className="text-white/50">
            {filter === "favorites"
              ? "You haven't added any meditations to your favorites yet."
              : filter === "completed"
                ? "You haven't completed any meditations yet."
                : filter === "nft"
                  ? "You don't have any meditation NFTs yet."
                  : "Your collection is empty. Explore the gallery to add meditations."}
          </p>
          <Link href="/gallery">
            <Button className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Explore Gallery
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMeditations.map((meditation) => (
            <Card key={meditation.id} className="bg-white/5 border-white/10 text-white overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Meditation Image */}
                <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-gradient-to-br from-purple-900/50 to-emerald-900/50 overflow-hidden relative">
                  <img
                    src={meditation.image || "/placeholder.svg"}
                    alt={meditation.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link href={`/meditations/${meditation.id}`}>
                      <Button
                        size="icon"
                        className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 w-12 z-10"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </Link>
                  </div>
                  {meditation.isNFT && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600">NFT</Badge>
                    </div>
                  )}
                </div>

                {/* Meditation Info */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/meditations/${meditation.id}`}>
                        <h3 className="font-medium text-lg hover:text-purple-300 transition-colors">
                          {meditation.title}
                        </h3>
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

                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-full h-8 w-8 ${
                          favorites.includes(meditation.id)
                            ? "bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 hover:text-rose-300"
                            : "text-white/60 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => toggleFavorite(meditation.id)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8 text-white/60 hover:text-rose-400 hover:bg-rose-500/10"
                        onClick={() => removeFromCollection(meditation.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-white/60">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Last played: {meditation.lastPlayed}</span>
                    </div>
                    <div className="flex items-center">
                      <Headphones className="h-3 w-3 mr-1" />
                      <span>Completed: {meditation.completions} times</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      {meditation.completed && (
                        <Badge className="bg-emerald-600 mr-2">
                          <Check className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      {meditation.completions >= 3 && (
                        <Badge className="bg-purple-600">
                          <Star className="h-3 w-3 mr-1" />
                          Mastered
                        </Badge>
                      )}
                    </div>
                    <Link href={`/meditations/${meditation.id}`}>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        Listen Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
