import { ConnectButton } from "@/components/connect-button"
import MeditationGenerator from "@/components/meditation-generator"
import MeditationDisplay from "@/components/meditation-display"
import PrimeMatesStatus from "@/components/prime-mates-status"
import MeditationStreak from "@/components/meditation-streak"
import Footer from "@/components/footer"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
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
          <Link href="/profile">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              Profile
            </Button>
          </Link>
          <ConnectButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Generate AI-Powered{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-emerald-300">
              Meditation Sessions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-purple-100/80 mb-8">
            Customize your meditation experience and save it to your collection in the Prime Mates universe
          </p>
        </div>

        {/* Cosmic Decoration */}
        <div className="relative h-32 mb-8">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-emerald-500/30 blur-xl animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/50 to-emerald-400/50 blur-md animate-pulse"></div>
          </div>
        </div>

        {/* Prime Mates Status */}
        <PrimeMatesStatus />
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 mb-16">
        {/* Meditation Generator */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
          <MeditationGenerator />
        </div>

        {/* Meditation Display */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
          <MeditationDisplay />
        </div>
      </div>

      {/* Staking Section */}
      <section className="container mx-auto px-4 py-12 mb-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Meditation Streak & Rewards</h2>
          <MeditationStreak />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
