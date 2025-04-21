import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, Disc, Palette, Coins } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import NFTMintingInterface from "@/components/nft-minting-interface"
import NFTPreview from "@/components/nft-preview"
import NFTAttributes from "@/components/nft-attributes"

export default function MintPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900/90 via-purple-800/80 to-emerald-900/90 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-purple-300" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-emerald-300">
            Meditated Apes
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <ConnectButton />
        </div>
      </header>

      {/* Page Title */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Disc className="inline-block mr-2 h-8 w-8 text-purple-300" />
            Mint Your Meditation NFT
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Transform your meditation session into a unique NFT in the Prime Mates universe
          </p>
        </div>
      </section>

      {/* Minting Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NFT Preview */}
          <div>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10 h-full">
              <h3 className="text-xl font-semibold text-purple-200 mb-6 flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                NFT Preview
              </h3>
              <NFTPreview />
            </div>
          </div>

          {/* Minting Interface */}
          <div>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
              <h3 className="text-xl font-semibold text-purple-200 mb-6 flex items-center">
                <Coins className="mr-2 h-5 w-5" />
                Mint Your NFT
              </h3>
              <NFTMintingInterface />
            </div>
          </div>

          {/* NFT Attributes */}
          <div className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
              <h3 className="text-xl font-semibold text-purple-200 mb-6">NFT Attributes & Metadata</h3>
              <NFTAttributes />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
