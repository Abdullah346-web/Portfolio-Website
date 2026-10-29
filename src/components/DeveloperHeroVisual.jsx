import { ShieldCheck } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const DeveloperHeroVisual = ({ prefersReducedMotion }) => (
  <Motion.div
    animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="hero-card relative overflow-hidden rounded-3xl p-6 backdrop-blur-xl sm:p-8"
  >
    <div className="mb-10 flex items-center justify-between border-b border-slate-800 pb-4">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-main shadow-[0_0_8px_#24F0F3]" />
      </div>
      <span className="font-mono text-xs text-slate-500">abdullah.dev</span>
    </div>
    <div className="space-y-5 font-mono text-sm leading-7">
      <p className="text-slate-500"><span className="text-main">const</span> developer = {'{'}</p>
      <p className="pl-5 text-slate-300">name: <span className="text-cyan-300">&quot;Abdullah Mubeen&quot;</span>,</p>
      <p className="pl-5 text-slate-300">stack: <span className="text-cyan-300">&quot;MERN&quot;</span>,</p>
      <p className="pl-5 text-slate-300">focus: <span className="text-cyan-300">&quot;secure web&quot;</span>,</p>
      <p className="pl-5 text-slate-300">status: <span className="text-main">&quot;building&quot;</span></p>
      <p className="text-slate-500">{'}'};</p>
    </div>
    <div className="hero-status mt-10 flex items-center gap-3 rounded-xl px-4 py-3 text-xs text-slate-300">
      <ShieldCheck size={18} className="text-main" />
      <span>Curious by nature. Building for the web.</span>
    </div>
  </Motion.div>
);

export default DeveloperHeroVisual;
