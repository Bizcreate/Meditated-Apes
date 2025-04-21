"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Play, Pause, SkipBack, SkipForward, Sparkles, Save } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MeditationDisplay() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [hasMeditation, setHasMeditation] = useState(false)

  // Simulate meditation data
  const meditationData = hasMeditation
    ? {
        id: `meditation-${Date.now()}`,
        title: "Inner Peace & Letting Go",
        duration: 5,
        voice: "Gentle Female",
        background: "Tibetan Bowls",
        script: `Take a deep breath in... and slowly exhale.

Feel your body becoming heavier with each breath, sinking deeper into relaxation.

As you breathe, imagine a soft purple light surrounding you, protecting you from any distractions.

With each inhale, you're drawing in peace and calm.

With each exhale, you're releasing tension and stress.

Notice any thoughts that arise... acknowledge them... and let them float away like clouds in the sky.

Your mind is becoming clearer, more focused.

You are present in this moment, fully aware and at peace.

Continue breathing deeply, feeling the rhythm of your breath.

You are safe. You are calm. You are at peace.

When you're ready, gently bring your awareness back to your surroundings.

Take one final deep breath in... and exhale completely.

Open your eyes when you're ready, carrying this sense of peace with you.`,
      }
    : null

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSave = () => {
    if (meditationData) {
      router.push(`/meditations/${meditationData.id}`)
    }
  }

  // For demo purposes, let's add a way to toggle having a meditation
  const toggleMeditation = () => {
    if (!hasMeditation) {
      setHasMeditation(true)
    }
  }

  return (
    <div className="space-y-6 h-full flex flex-col">
      <h3 className="text-xl font-semibold text-emerald-200">Meditation Session</h3>

      {meditationData ? (
        <>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-lg font-medium text-emerald-100 mb-2">{meditationData.title}</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-emerald-900/50 text-emerald-200 px-2 py-1 rounded-full">
                {meditationData.duration} minutes
              </span>
              <span className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                {meditationData.voice}
              </span>
              <span className="text-xs bg-indigo-900/50 text-indigo-200 px-2 py-1 rounded-full">
                {meditationData.background}
              </span>
            </div>

            {/* Audio Player */}
            <div className="space-y-3">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-emerald-500"
                  style={{ width: `${(currentTime / (meditationData.duration * 60)) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-xs text-white/60">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(meditationData.duration * 60)}</span>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white hover:bg-white/10"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>

                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Meditation Script */}
          <div className="flex-1 min-h-[200px]">
            <h4 className="text-sm font-medium text-emerald-100 mb-2">Meditation Script</h4>
            <ScrollArea className="h-[200px] rounded-md border border-white/10 bg-white/5 p-4">
              <p className="text-white/80 whitespace-pre-line leading-relaxed">{meditationData.script}</p>
            </ScrollArea>
          </div>

          {/* Save Button */}
          <Button
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
            onClick={handleSave}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Meditation
          </Button>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 py-12">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 flex items-center justify-center">
            <Sparkles className="h-10 w-10 text-white/40" />
          </div>
          <p className="text-white/60 text-center">Generate a meditation to see it here</p>
          <Button
            variant="outline"
            className="border-white/10 text-white/70 hover:bg-white/5"
            onClick={toggleMeditation}
          >
            Show Example
          </Button>
        </div>
      )}
    </div>
  )
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}
