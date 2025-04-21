import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, Clock, Filter, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import MeditationGallery from "@/components/meditation-gallery"

export default function GalleryPage() {
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
            <Clock className="inline-block mr-2 h-8 w-8 text-purple-300" />
            Meditation Gallery
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Explore our collection of pre-made meditations. Listen, collect, and earn rewards.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input
              placeholder="Search meditations by theme, mood, or keyword..."
              className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-white/40"
            />
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-6 mb-8 bg-white/5 border border-white/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-white/10">
              All
            </TabsTrigger>
            <TabsTrigger value="5min" className="data-[state=active]:bg-white/10">
              5 Min
            </TabsTrigger>
            <TabsTrigger value="10min" className="data-[state=active]:bg-white/10">
              10 Min
            </TabsTrigger>
            <TabsTrigger value="15min" className="data-[state=active]:bg-white/10">
              15 Min
            </TabsTrigger>
            <TabsTrigger value="20min" className="data-[state=active]:bg-white/10">
              20 Min
            </TabsTrigger>
            <TabsTrigger value="30min" className="data-[state=active]:bg-white/10">
              30 Min
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-end mb-6">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <TabsContent value="all">
            <MeditationGallery duration="all" />
          </TabsContent>

          <TabsContent value="5min">
            <MeditationGallery duration="5" />
          </TabsContent>

          <TabsContent value="10min">
            <MeditationGallery duration="10" />
          </TabsContent>

          <TabsContent value="15min">
            <MeditationGallery duration="15" />
          </TabsContent>

          <TabsContent value="20min">
            <MeditationGallery duration="20" />
          </TabsContent>

          <TabsContent value="30min">
            <MeditationGallery duration="30" />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
