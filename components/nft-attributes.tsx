"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export default function NFTAttributes() {
  const [attributes, setAttributes] = useState([
    { trait_type: "Meditation Type", value: "Cosmic Journey" },
    { trait_type: "Duration", value: "10 minutes" },
    { trait_type: "Voice", value: "Gentle Female" },
    { trait_type: "Background", value: "Tibetan Bowls" },
    { trait_type: "Rarity", value: "Rare" },
  ])

  const [newAttribute, setNewAttribute] = useState({ trait_type: "", value: "" })

  const addAttribute = () => {
    if (newAttribute.trait_type && newAttribute.value) {
      setAttributes([...attributes, { ...newAttribute }])
      setNewAttribute({ trait_type: "", value: "" })
    }
  }

  const removeAttribute = (index: number) => {
    setAttributes(attributes.filter((_, i) => i !== index))
  }

  const updateAttribute = (index: number, field: "trait_type" | "value", value: string) => {
    const updatedAttributes = [...attributes]
    updatedAttributes[index][field] = value
    setAttributes(updatedAttributes)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-medium text-white mb-4">NFT Attributes</h4>
          <p className="text-sm text-white/70 mb-4">
            These attributes will be stored on-chain as metadata for your meditation NFT. They help define its
            uniqueness and can affect its value.
          </p>

          <div className="space-y-4 mt-6">
            {attributes.map((attr, index) => (
              <div key={index} className="flex space-x-2">
                <div className="flex-1">
                  <Input
                    value={attr.trait_type}
                    onChange={(e) => updateAttribute(index, "trait_type", e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Trait name"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    value={attr.value}
                    onChange={(e) => updateAttribute(index, "value", e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Value"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-rose-400 hover:bg-rose-500/10"
                  onClick={() => removeAttribute(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex space-x-2 mt-4">
            <div className="flex-1">
              <Input
                value={newAttribute.trait_type}
                onChange={(e) => setNewAttribute({ ...newAttribute, trait_type: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="New trait name"
              />
            </div>
            <div className="flex-1">
              <Input
                value={newAttribute.value}
                onChange={(e) => setNewAttribute({ ...newAttribute, value: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
                placeholder="New value"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="border-white/10 text-white hover:bg-white/10"
              onClick={addAttribute}
              disabled={!newAttribute.trait_type || !newAttribute.value}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-4">Metadata Preview</h4>
          <div className="bg-black/30 rounded-xl p-4 font-mono text-sm text-white/80 overflow-auto max-h-[400px]">
            <pre>
              {JSON.stringify(
                {
                  name: "Cosmic Meditation #1",
                  description: "A unique meditation experience in the Prime Mates universe",
                  image: "ipfs://QmXyz...",
                  animation_url: "ipfs://QmAbc...",
                  external_url: "https://meditatedapes.io/nft/1",
                  attributes: attributes,
                  properties: {
                    category: "meditation",
                    creators: [
                      {
                        address: "0x1234...5678",
                        share: 100,
                      },
                    ],
                    royalties: 5,
                  },
                },
                null,
                2,
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
