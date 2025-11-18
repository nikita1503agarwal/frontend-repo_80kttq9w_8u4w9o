import { Menu, PhoneCall, Shapes } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur-md/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 p-[2px]">
            <div className="h-full w-full rounded-full bg-slate-900"></div>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Mode AI</p>
            <p className="text-xs text-blue-200/70 -mt-0.5">Voice-first Intelligence</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-blue-200/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 hover:bg-blue-500/20 transition-colors">
            <Shapes className="h-4 w-4" />
            View demos
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 px-4 py-2 text-sm text-white shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            <PhoneCall className="h-4 w-4" />
            Talk to an agent
          </a>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-blue-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
