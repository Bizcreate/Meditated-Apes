"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sparkles, Cpu, Brain, Zap, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function AIModelSelector() {
  const [selectedModel, setSelectedModel] = useState("gpt-4o")

  const models = [
    {
      id: "gpt-4o",
      name: "GPT-4o",
      description: "Advanced model with deep understanding of meditation practices",
      icon: <Brain className="h-5 w-5 text-purple-300" />,
      isPremium: true,
    },
    {
      id: "claude-3",
      name: "Claude 3",
      description: "Balanced model with excellent meditation script generation",
      icon: <Sparkles className="h-5 w-5 text-emerald-300" />,
      isPremium: true,
    },
    {
      id: "llama-3",
      name: "Llama 3",
      description: "Open-source model with good meditation capabilities",
      icon: <Zap className="h-5 w-5 text-amber-300" />,
      isPremium: false,
    },
    {
      id: "mistral-large",
      name: "Mistral Large",
      description: "Efficient model for quick meditation generation",
      icon: <Cpu className="h-5 w-5 text-blue-300" />,
      isPremium: false,
    },
  ]

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedModel} onValueChange={setSelectedModel} className="space-y-4">
        {models.map((model) => (
          <div
            key={model.id}
            className={`flex items-start space-x-3 p-4 rounded-xl border ${
              selectedModel === model.id
                ? "bg-white/10 border-purple-500/50"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            } transition-colors`}
          >
            <RadioGroupItem value={model.id} id={model.id} className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center">
                <Label htmlFor={model.id} className="text-base font-medium flex items-center cursor-pointer">
                  {model.icon}
                  <span className="ml-2">{model.name}</span>
                  {model.isPremium && (
                    <span className="ml-2 text-xs bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-2 py-0.5 rounded-full">
                      Premium
                    </span>
                  )}
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-white/40 hover:text-white/60 ml-auto">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{model.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-white/60 mt-1">{model.description}</p>
            </div>
          </div>
        ))}
      </RadioGroup>

      <div className="pt-4 border-t border-white/10">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          <Sparkles className="mr-2 h-4 w-4" />
          Apply Model Selection
        </Button>
      </div>
    </div>
  )
}
