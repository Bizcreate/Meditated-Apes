"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

export default function PrimeMatesStatus() {
  const [isOwner, setIsOwner] = useState(false)

  // For demo purposes
  const toggleOwnership = () => {
    setIsOwner(!isOwner)
  }

  return (
    <div className="flex flex-col items-center">
      {isOwner ? (
        <div className="bg-gradient-to-r from-purple-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 inline-flex flex-col items-center max-w-md">
          <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white mb-2">
            <Crown className="h-3 w-3 mr-1" />
            OG Prime Mate 🦧 – Premium Access Unlocked
          </Badge>
          <p className="text-sm text-center text-white/80">
            Exclusive meditation options and premium features are now available to you
          </p>
          <Button
            variant="link"
            className="text-amber-300 hover:text-amber-200 p-0 h-auto mt-2 text-sm"
            onClick={toggleOwnership}
          >
            View Ascended Ape Options
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
          onClick={toggleOwnership}
        >
          Explore Prime Mates NFT Benefits
        </Button>
      )}
    </div>
  )
}
