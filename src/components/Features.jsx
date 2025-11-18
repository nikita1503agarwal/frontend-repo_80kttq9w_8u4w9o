import { Bot, PhoneCall, Globe2, Sparkles, Headphones, Rocket } from "lucide-react";

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 p-[1px]">
          <div className="rounded-[10px] bg-slate-900/80 p-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-blue-200/80">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-100 mb-4">
            What we build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">AI agents for every channel</h2>
          <p className="mt-3 text-blue-200/80">From outbound calling to on-site assistants, we deploy agents that move KPIs in days, not months.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={PhoneCall} title="AI Calling Agents" desc="Outbound and inbound voice agents that qualify, schedule, and close." />
          <Feature icon={Globe2} title="Website Agents" desc="On-brand assistants that guide, convert, and support visitors 24/7." />
          <Feature icon={Bot} title="Workflows & Automations" desc="Connect CRMs, calendars, and APIs to automate outcomes." />
          <Feature icon={Headphones} title="Call Center Augmentation" desc="Coach and automate human reps with real-time AI." />
          <Feature icon={Sparkles} title="Fine-tuned Personas" desc="Agents that speak in your tone and follow your playbooks." />
          <Feature icon={Rocket} title="Fast Deployment" desc="Go live in under a week with measurable ROI." />
        </div>
      </div>
    </section>
  );
}

export default Features;
