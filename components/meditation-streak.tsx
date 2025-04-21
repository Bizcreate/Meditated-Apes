"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Flame, Trophy, Coins } from "lucide-react"

export default function MeditationStreak() {
  // Simulated data
  const streakDays = 7
  const zenTokens = 145
  const nextReward = 200

  // Calculate progress percentage
  const progress = (zenTokens / nextReward) * 100

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Meditation Streak</h3>
          <div className="flex items-center">
            <Flame className="h-5 w-5 text-orange-400 mr-1" />
            <span className="text-xl font-bold text-white">{streakDays}</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md flex items-center justify-center ${
                i < streakDays ? "bg-gradient-to-br from-orange-500 to-red-600 text-white" : "bg-white/5 text-white/30"
              }`}
            >
              {i < streakDays ? <Flame className="h-4 w-4" /> : <span className="text-xs">{i + 1}</span>}
            </div>
          ))}
        </div>

        <p className="text-sm text-white/70">
          You've meditated for {streakDays} consecutive days! Keep going to earn more rewards.
        </p>

        <Button className="mt-4 w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
          Stake Your Streak
        </Button>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">$ZEN Tokens</h3>
          <div className="flex items-center">
            <Coins className="h-5 w-5 text-emerald-400 mr-1" />
            <span className="text-xl font-bold text-white">{zenTokens}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/70">Progress to next reward</span>
              <span className="text-white/70">
                {zenTokens}/{nextReward}
              </span>
            </div>
            <Progress
              value={progress}
              className="h-2 bg-white/10"
              indicatorClassName="bg-gradient-to-r from-emerald-500 to-teal-500"
            />
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center mr-3">
              <Trophy className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">Next Reward</h4>
              <p className="text-xs text-white/70">Exclusive "Cosmic Zen" NFT Badge</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            View Rewards
          </Button>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
            Claim Tokens
          </Button>
        </div>
      </div>
    </div>
  )
}
