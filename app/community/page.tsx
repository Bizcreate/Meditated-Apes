import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, Users, MessageSquare, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import CommunityFeed from "@/components/community-feed"
import PopularMeditations from "@/components/popular-meditations"
import MeditationChallenges from "@/components/meditation-challenges"

export default function CommunityPage() {
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
            <Users className="inline-block mr-2 h-8 w-8 text-purple-300" />
            Zen Dojo Community
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Connect with fellow meditators, share experiences, and join meditation challenges
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input
              placeholder="Search meditations, users, or challenges..."
              className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-white/40"
            />
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 bg-white/5 border border-white/10">
            <TabsTrigger value="feed" className="data-[state=active]:bg-white/10">
              <MessageSquare className="h-4 w-4 mr-2" />
              Community Feed
            </TabsTrigger>
            <TabsTrigger value="popular" className="data-[state=active]:bg-white/10">
              <Sparkles className="h-4 w-4 mr-2" />
              Popular Meditations
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-white/10">
              <Users className="h-4 w-4 mr-2" />
              Meditation Challenges
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed">
            <CommunityFeed />
          </TabsContent>

          <TabsContent value="popular">
            <PopularMeditations />
          </TabsContent>

          <TabsContent value="challenges">
            <MeditationChallenges />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
