"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Sparkles, Loader2 } from "lucide-react"

export default function NFTMintingInterface() {
  const [name, setName] = useState("Cosmic Meditation #1")
  const [description, setDescription] = useState("A unique meditation experience in the Prime Mates universe")
  const [rarity, setRarity] = useState("rare")
  const [royalties, setRoyalties] = useState(5)
  const [includeAudio, setIncludeAudio] = useState(true)
  const [isMinting, setIsMinting] = useState(false)

  const handleMint = () => {
    if (!name) return

    setIsMinting(true)

    // Simulate minting delay
    setTimeout(() => {
      setIsMinting(false)
      alert("NFT minted successfully!")
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nft-name">NFT Name</Label>
          <Input
            id="nft-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/5 border-white/10 text-white"
            placeholder="Enter a name for your NFT"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nft-description">Description</Label>
          <Textarea
            id="nft-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-white/5 border-white/10 text-white min-h-[100px]"
            placeholder="Describe your meditation NFT"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nft-rarity">Rarity Level</Label>
          <Select value={rarity} onValueChange={setRarity}>
            <SelectTrigger id="nft-rarity" className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select rarity" />
            </SelectTrigger>
            <SelectContent className="bg-indigo-900 border-white/10 text-white">
              <SelectItem value="common">Common</SelectItem>
              <SelectItem value="uncommon">Uncommon</SelectItem>
              <SelectItem value="rare">Rare</SelectItem>
              <SelectItem value="epic">Epic</SelectItem>
              <SelectItem value="legendary">Legendary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="royalties">Creator Royalties: {royalties}%</Label>
          </div>
          <Slider
            id="royalties"
            min={0}
            max={10}
            step={0.5}
            value={[royalties]}
            onValueChange={(value) => setRoyalties(value[0])}
          />
          <p className="text-xs text-white/60">Percentage of secondary sales that will go to you as the creator</p>
        </div>

        <div className="flex items-center justify-between space-x-2 pt-2">
          <div className="space-y-0.5">
            <Label htmlFor="include-audio">Include Audio File</Label>
            <p className="text-xs text-white/60">Attach the meditation audio to this NFT (recommended)</p>
          </div>
          <Switch id="include-audio" checked={includeAudio} onCheckedChange={setIncludeAudio} />
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 group relative overflow-hidden"
          onClick={handleMint}
          disabled={!name || isMinting}
        >
          {isMinting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Minting...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-ping" />
              Mint NFT
            </>
          )}
          <span className="absolute inset-0 rounded-md overflow-hidden">
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-80 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 group-active:opacity-80 blur-xl transition-opacity duration-300"></span>
          </span>
        </Button>
        <p className="text-xs text-white/60 text-center mt-2">Gas fees will apply. Estimated cost: 0.005 ETH</p>
      </div>
    </div>
  )
}
