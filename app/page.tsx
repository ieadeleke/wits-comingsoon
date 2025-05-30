import { Countdown } from "@/components/countdown"
import { EmailSignup } from "@/components/email-signup"
import { Features } from "@/components/features"
import { Header } from "@/components/header"
import { BackgroundAnimation } from "@/components/background-animation"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <BackgroundAnimation />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-teal-500/10 z-0"></div>

      {/* <Header /> */}

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-xs md:text-sm mb-4">
              Coming Soon
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              The new and improved Wired Wits is just days away!
            </h1>
            <Countdown targetDate="2025-06-01T00:00:00" />
          </div>

          <div className="space-y-6 md:space-y-8 backdrop-blur-sm bg-white/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200">
              We&apos;re getting ready to launch our first product:{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Wits Newsroom
              </span>{" "}
              — a powerful suite of tools built to help you reclaim control of the news.
            </p>

            <Features />

            <div className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl font-medium text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
                Truth, clarity, and understanding — powered by AI.
              </span>
            </div>

            <p className="text-base md:text-lg text-slate-300 italic">Stay tuned… big things are coming.</p>
          </div>

          {/* <EmailSignup /> */}
        </div>
      </main>

      <footer className="py-6 md:py-8 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm md:text-base">
            © {new Date().getFullYear()} Wired Wits. All rights reserved.
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
