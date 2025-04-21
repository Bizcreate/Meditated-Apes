"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MeditationGenerator() {
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [duration, setDuration] = useState(5)
  const [voice, setVoice] = useState("gentle-female")
  const [background, setBackground] = useState("tibetan-bowls")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!prompt) return

    setIsGenerating(true)

    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false)
      // Simulate a successful generation and redirect to the meditation page
      router.push(`/meditations/meditation-${Date.now()}`)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-purple-200">Meditation Generator</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="meditation-prompt" className="block text-sm font-medium text-purple-100 mb-2">
            What do you want to meditate on today?
          </label>
          <Textarea
            id="meditation-prompt"
            placeholder="Letting go of stress, focus, abundance, inner peace…"
            className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-white/40"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-100 mb-2">Session Duration: {duration} minutes</label>
          <Slider
            defaultValue={[5]}
            max={20}
            min={2}
            step={1}
            onValueChange={(value) => setDuration(value[0])}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-purple-300/70">
            <span>2 min</span>
            <span>5 min</span>
            <span>10 min</span>
            <span>15 min</span>
            <span>20 min</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-purple-100 mb-2">Preferred Voice Style</label>
            <Select value={voice} onValueChange={setVoice}>
              <SelectTrigger className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white">
                <SelectValue placeholder="Select voice" />
              </SelectTrigger>
              <SelectContent className="bg-indigo-900 border-white/10 text-white">
                <SelectItem value="soft-male">Soft Male</SelectItem>
                <SelectItem value="gentle-female">Gentle Female</SelectItem>
                <SelectItem value="robotic-monk">Robotic Monk</SelectItem>
                <SelectItem value="whispering-alien">Whispering Alien</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-100 mb-2">Background Vibe</label>
            <Select value={background} onValueChange={setBackground}>
              <SelectTrigger className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white">
                <SelectValue placeholder="Select background" />
              </SelectTrigger>
              <SelectContent className="bg-indigo-900 border-white/10 text-white">
                <SelectItem value="ocean-waves">Ocean Waves</SelectItem>
                <SelectItem value="tibetan-bowls">Tibetan Bowls</SelectItem>
                <SelectItem value="ambient-lofi">Ambient Lo-Fi</SelectItem>
                <SelectItem value="jungle-sounds">Jungle Sounds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 group relative overflow-hidden"
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-ping" />🌀 Generate My Meditation
            </>
          )}
          <span className="absolute inset-0 rounded-md overflow-hidden">
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 group-active:opacity-80 blur-xl transition-opacity duration-300"></span>
          </span>
        </Button>
      </div>
    </div>
  )
}
