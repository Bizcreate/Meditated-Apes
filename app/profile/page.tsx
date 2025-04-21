import { ConnectButton } from "@/components/connect-button"
import { Sparkles, User, Calendar, Award, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserStats from "@/components/user-stats"
import AchievementBadges from "@/components/achievement-badges"
import MeditationHistory from "@/components/meditation-history"
import Footer from "@/components/footer"

export default function ProfilePage() {
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

      {/* Profile Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 p-1">
                <div className="w-full h-full rounded-full bg-indigo-900 flex items-center justify-center overflow-hidden">
                  <User className="h-16 w-16 text-white/70" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-1">
                <div className="bg-indigo-900 rounded-full p-1">
                  <Award className="h-5 w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Cosmic Meditator</h2>
              <p className="text-white/60 mb-4">0x1234...5678</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="bg-white/10 rounded-full px-4 py-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-purple-300" />
                  <span className="text-sm">Joined April 2023</span>
                </div>
                <div className="bg-white/10 rounded-full px-4 py-1 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-emerald-300" />
                  <span className="text-sm">120 minutes meditated</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 bg-white/5 border border-white/10">
            <TabsTrigger value="stats" className="data-[state=active]:bg-white/10">
              Stats
            </TabsTrigger>
            <TabsTrigger value="badges" className="data-[state=active]:bg-white/10">
              Badges
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-white/10">
              Meditation History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats">
            <UserStats />
          </TabsContent>

          <TabsContent value="badges">
            <AchievementBadges />
          </TabsContent>

          <TabsContent value="history">
            <MeditationHistory />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
