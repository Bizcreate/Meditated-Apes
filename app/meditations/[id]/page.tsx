import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, Share2, Download, Heart, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import MeditationPlayer from "@/components/meditation-player"

export default function MeditationPage({ params }: { params: { id: string } }) {
  // This would normally fetch the meditation data based on the ID
  const meditationData = {
    id: params.id,
    title: "Inner Peace & Letting Go",
    duration: 10,
    voice: "Gentle Female",
    background: "Tibetan Bowls",
    createdAt: "April 22, 2023",
    plays: 42,
    likes: 18,
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

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/profile">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
        </Link>
      </div>

      {/* Meditation Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Meditation Visualization */}
            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-purple-900/50 to-emerald-900/50 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-emerald-500/30 blur-xl animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/50 to-emerald-400/50 blur-md animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-white/70" />
              </div>
            </div>

            {/* Meditation Info */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{meditationData.title}</h2>

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

              <p className="text-white/60 mb-6">
                Created on {meditationData.createdAt} • {meditationData.plays} plays • {meditationData.likes} likes
              </p>

              <MeditationPlayer />

              <div className="flex flex-wrap gap-3 mt-6">
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  <Heart className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Meditation Script */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Meditation Script</h3>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white/80 whitespace-pre-line leading-relaxed">{meditationData.script}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
