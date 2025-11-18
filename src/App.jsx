import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100 relative">
      {/* star field */}
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 0, transparent 1px), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.4) 0, transparent 1px), radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,0.35) 0, transparent 1px)'}} />

      <Navbar />

      <main className="relative pt-24">
        <Hero />
        <Features />
        <CTA />

        <footer className="border-t border-white/10 py-10 mt-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200/60">© {new Date().getFullYear()} Mode AI. All rights reserved.</p>
            <div className="text-sm text-blue-200/60">Built for the future of voice.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
