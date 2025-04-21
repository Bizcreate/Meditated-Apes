import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, BookOpen, Filter, Search, Grid, List } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import MeditationCollection from "@/components/meditation-collection"
import CollectionStats from "@/components/collection-stats"

export default function CollectionPage() {
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
            <BookOpen className="inline-block mr-2 h-8 w-8 text-purple-300" />
            Your Meditation Collection
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Track your meditation journey and see your collected sessions
          </p>
        </div>
      </section>

      {/* Collection Stats */}
      <section className="container mx-auto px-4 mb-12">
        <CollectionStats />
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input
              placeholder="Search your collection..."
              className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-white/40"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-white/10 text-white hover:bg-white/5">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-white/10 text-white hover:bg-white/5">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Content */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-white/5 border border-white/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-white/10">
              All Meditations
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-white/10">
              Favorites
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-white/10">
              Completed
            </TabsTrigger>
            <TabsTrigger value="nft" className="data-[state=active]:bg-white/10">
              NFT Collection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <MeditationCollection filter="all" />
          </TabsContent>

          <TabsContent value="favorites">
            <MeditationCollection filter="favorites" />
          </TabsContent>

          <TabsContent value="completed">
            <MeditationCollection filter="completed" />
          </TabsContent>

          <TabsContent value="nft">
            <MeditationCollection filter="nft" />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
