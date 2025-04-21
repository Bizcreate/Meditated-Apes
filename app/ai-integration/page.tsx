import { ConnectButton } from "@/components/connect-button"
import { Sparkles, ArrowLeft, Cpu, Wand2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import AIModelSelector from "@/components/ai-model-selector"
import AIPromptTemplates from "@/components/ai-prompt-templates"
import AISettings from "@/components/ai-settings"

export default function AIIntegrationPage() {
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
            <Cpu className="inline-block mr-2 h-8 w-8 text-purple-300" />
            AI Integration Settings
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Customize how AI generates your meditation experiences and fine-tune the parameters
          </p>
        </div>
      </section>

      {/* AI Settings Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Model Selection */}
          <div className="md:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10 h-full">
              <h3 className="text-xl font-semibold text-purple-200 mb-6 flex items-center">
                <Wand2 className="mr-2 h-5 w-5" />
                AI Model Selection
              </h3>
              <AIModelSelector />
            </div>
          </div>

          {/* AI Prompt Templates */}
          <div className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
              <h3 className="text-xl font-semibold text-purple-200 mb-6">Meditation Prompt Templates</h3>
              <AIPromptTemplates />
            </div>
          </div>

          {/* Advanced AI Settings */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-white/10">
              <h3 className="text-xl font-semibold text-purple-200 mb-6">Advanced AI Settings</h3>
              <AISettings />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
