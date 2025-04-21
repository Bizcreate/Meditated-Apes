"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Loader2 } from "lucide-react"

export default function NFTPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        drawNFTPreview(ctx, canvas.width, canvas.height)
      }
    }
  }, [])

  const drawNFTPreview = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#4338ca")
    gradient.addColorStop(0.5, "#6d28d9")
    gradient.addColorStop(1, "#065f46")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Draw cosmic elements
    drawCosmicElements(ctx, width, height)

    // Draw meditation symbol
    drawMeditationSymbol(ctx, width / 2, height / 2, Math.min(width, height) * 0.3)

    // Add some sparkles
    drawSparkles(ctx, width, height, 30)

    // Add border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
    ctx.lineWidth = 10
    ctx.strokeRect(5, 5, width - 10, height - 10)
  }

  const drawCosmicElements = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw some cosmic circles
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 50 + 20

      const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      circleGradient.addColorStop(0, "rgba(255, 255, 255, 0.2)")
      circleGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = circleGradient
      ctx.fill()
    }
  }

  const drawMeditationSymbol = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    // Draw lotus flower symbol
    ctx.save()
    ctx.translate(x, y)

    // Draw petals
    const petalCount = 8
    const petalLength = size * 0.8
    const petalWidth = size * 0.3

    for (let i = 0; i < petalCount; i++) {
      ctx.save()
      ctx.rotate((Math.PI * 2 * i) / petalCount)

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.quadraticCurveTo(petalWidth, -petalLength / 2, 0, -petalLength)
      ctx.quadraticCurveTo(-petalWidth, -petalLength / 2, 0, 0)

      const petalGradient = ctx.createLinearGradient(0, 0, 0, -petalLength)
      petalGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
      petalGradient.addColorStop(1, "rgba(255, 255, 255, 0.3)")

      ctx.fillStyle = petalGradient
      ctx.fill()

      ctx.restore()
    }

    // Draw center circle
    ctx.beginPath()
    ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
    ctx.fill()

    ctx.restore()
  }

  const drawSparkles = (ctx: CanvasRenderingContext2D, width: number, height: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const regeneratePreview = () => {
    setIsGenerating(true)

    setTimeout(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (ctx) {
          drawNFTPreview(ctx, canvas.width, canvas.height)
        }
      }
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="aspect-square w-full rounded-xl overflow-hidden border border-white/20">
        <canvas ref={canvasRef} width={500} height={500} className="w-full h-full" />
      </div>

      <Button
        variant="outline"
        className="w-full border-white/10 text-white hover:bg-white/5"
        onClick={regeneratePreview}
        disabled={isGenerating}
      >
        {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
        Regenerate Preview
      </Button>
    </div>
  )
}
