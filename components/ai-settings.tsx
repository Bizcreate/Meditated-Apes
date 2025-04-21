"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, RefreshCw } from "lucide-react"

export default function AISettings() {
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(2000)
  const [voiceStyle, setVoiceStyle] = useState("natural")
  const [enablePersonalization, setEnablePersonalization] = useState(true)
  const [adaptToMood, setAdaptToMood] = useState(true)
  const [rememberPreferences, setRememberPreferences] = useState(true)
  const [audioQuality, setAudioQuality] = useState("high")

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Generation Settings */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-white mb-4">Text Generation</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="temperature">Creativity (Temperature): {temperature}</Label>
                <span className="text-white/60 text-sm">
                  {temperature < 0.4 ? "More focused" : temperature > 0.7 ? "More creative" : "Balanced"}
                </span>
              </div>
              <Slider
                id="temperature"
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
              />
              <p className="text-xs text-white/60">
                Lower values produce more focused and predictable meditations. Higher values produce more creative and
                varied results.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="max-tokens">Maximum Length: {maxTokens}</Label>
                <span className="text-white/60 text-sm">
                  ~{Math.round(maxTokens / 150)} minute{Math.round(maxTokens / 150) !== 1 ? "s" : ""}
                </span>
              </div>
              <Slider
                id="max-tokens"
                min={500}
                max={4000}
                step={100}
                value={[maxTokens]}
                onValueChange={(value) => setMaxTokens(value[0])}
              />
              <p className="text-xs text-white/60">
                Controls the maximum length of the generated meditation script. Longer scripts allow for more detailed
                guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Voice & Audio Settings */}
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-white mb-4">Voice & Audio</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="voice-style">Voice Style</Label>
              <Select value={voiceStyle} onValueChange={setVoiceStyle}>
                <SelectTrigger id="voice-style" className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select voice style" />
                </SelectTrigger>
                <SelectContent className="bg-indigo-900 border-white/10 text-white">
                  <SelectItem value="natural">Natural & Warm</SelectItem>
                  <SelectItem value="soothing">Extra Soothing</SelectItem>
                  <SelectItem value="whisper">Gentle Whisper</SelectItem>
                  <SelectItem value="cosmic">Cosmic Guide</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-white/60">Determines the overall style and tone of the meditation voice.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audio-quality">Audio Quality</Label>
              <Select value={audioQuality} onValueChange={setAudioQuality}>
                <SelectTrigger id="audio-quality" className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select audio quality" />
                </SelectTrigger>
                <SelectContent className="bg-indigo-900 border-white/10 text-white">
                  <SelectItem value="standard">Standard (Faster)</SelectItem>
                  <SelectItem value="high">High Quality</SelectItem>
                  <SelectItem value="ultra">Ultra HD (Premium)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-white/60">
                Higher quality audio takes longer to generate but sounds more natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personalization Settings */}
      <div className="pt-6 border-t border-white/10">
        <h4 className="text-lg font-medium text-white mb-4">Personalization</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label htmlFor="personalization">Enable Personalization</Label>
              <p className="text-xs text-white/60">Allow AI to learn from your preferences and meditation history</p>
            </div>
            <Switch id="personalization" checked={enablePersonalization} onCheckedChange={setEnablePersonalization} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label htmlFor="adapt-mood">Adapt to Mood</Label>
              <p className="text-xs text-white/60">Adjust meditation style based on your current emotional state</p>
            </div>
            <Switch id="adapt-mood" checked={adaptToMood} onCheckedChange={setAdaptToMood} />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="space-y-0.5">
              <Label htmlFor="remember-preferences">Remember Preferences</Label>
              <p className="text-xs text-white/60">Save your preferred meditation styles and settings</p>
            </div>
            <Switch id="remember-preferences" checked={rememberPreferences} onCheckedChange={setRememberPreferences} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 pt-6">
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset to Defaults
        </Button>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  )
}
