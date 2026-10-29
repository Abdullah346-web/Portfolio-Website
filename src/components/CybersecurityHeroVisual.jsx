import { Activity, LockKeyhole, ShieldCheck, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const DEMO_MESSAGES = [
  'Security lab initialized',
  'Loading network topology',
  'Analyzing simulated connections',
  'Demo environment ready',
];

const TERMINAL_LINES = [
  'session: research-lab.local',
  'profile: defensive simulation',
  'telemetry: local sample data',
];

const NETWORK_NODES = [
  { id: 'gateway', x: 16, y: 58, label: 'GW' },
  { id: 'lab', x: 43, y: 25, label: 'LAB' },
  { id: 'node', x: 76, y: 52, label: 'NODE' },
  { id: 'vault', x: 54, y: 80, label: 'VAULT' },
];

const NETWORK_CONNECTIONS = [
  ['gateway', 'lab'],
  ['lab', 'node'],
  ['gateway', 'vault'],
  ['vault', 'node'],
];

const getNode = (id) => NETWORK_NODES.find((node) => node.id === id);

const NetworkGraph = ({ prefersReducedMotion }) => (
  <svg
    viewBox="0 0 100 100"
    className="h-full w-full overflow-visible"
    role="img"
    aria-label="Sample network graph with four connected nodes"
  >
    {NETWORK_CONNECTIONS.map(([startId, endId], index) => {
      const start = getNode(startId);
      const end = getNode(endId);

      return (
        <Motion.line
          key={`${startId}-${endId}`}
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}
          stroke="var(--main-color)"
          strokeOpacity="0.35"
          strokeWidth="0.65"
          strokeDasharray="3 3"
          animate={prefersReducedMotion ? undefined : { strokeOpacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}
        />
      );
    })}
    {NETWORK_NODES.map((node, index) => (
      <Motion.g
        key={node.id}
        animate={prefersReducedMotion ? undefined : { y: [0, -1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
      >
        <circle cx={node.x} cy={node.y} r="5.3" fill="#06130f" stroke="var(--main-color)" strokeWidth="0.75" />
        <circle cx={node.x} cy={node.y} r="1.8" fill="var(--main-color)" />
        <text x={node.x} y={node.y + 10} textAnchor="middle" fill="#94a3b8" fontSize="3.7">{node.label}</text>
      </Motion.g>
    ))}
  </svg>
);

const MonitorFrame = ({ label, className, children, prefersReducedMotion }) => (
  <Motion.div
    animate={prefersReducedMotion ? undefined : { opacity: [0.9, 1, 0.94] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    className={`security-monitor absolute rounded-lg p-1.5 ${className}`}
  >
    <div className="security-monitor-screen relative h-full overflow-hidden rounded-md p-2">
      <div className="security-screen-noise pointer-events-none absolute inset-0" />
      <div className="relative z-10 mb-1 flex items-center justify-between text-[7px] uppercase tracking-[0.16em] text-emerald-300/70">
        <span>{label}</span>
        <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
      </div>
      {children}
    </div>
  </Motion.div>
);

const CybersecurityHeroVisual = ({ prefersReducedMotion }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setMessageIndex((currentIndex) => (currentIndex + 1) % DEMO_MESSAGES.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="security-visual relative min-h-[390px] w-full overflow-hidden rounded-3xl p-3 font-mono sm:min-h-[430px] sm:p-5"
      aria-label="Simulated cybersecurity workstation"
    >
      <div className="security-scanlines pointer-events-none absolute inset-0" />
      <div className="security-room-glow pointer-events-none absolute inset-0" />

      <div className="relative z-20 flex items-center justify-between border-b border-emerald-400/20 pb-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-emerald-300 sm:text-xs">
          <ShieldCheck size={14} />
          Simulated security lab
        </div>
        <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-emerald-400/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
          Demo only
        </span>
      </div>

      <div className="security-workstation relative mt-3 h-[310px] sm:h-[345px]">
        <MonitorFrame
          label="packet view"
          className="left-0 top-7 h-[105px] w-[43%] -rotate-2 sm:top-8 sm:h-[124px]"
          prefersReducedMotion={prefersReducedMotion}
        >
          <div className="security-code-lines space-y-1 text-[7px] leading-3 text-emerald-300/80">
            <p><span className="text-cyan-300">01</span> handshake / verified</p>
            <p><span className="text-cyan-300">02</span> route-map / simulated</p>
            <p><span className="text-emerald-400">03</span> policy / allow</p>
            <p className="text-slate-500">----------------</p>
            <p><span className="text-cyan-300">04</span> packets / local</p>
          </div>
        </MonitorFrame>

        <MonitorFrame
          label="topology"
          className="right-0 top-1 h-[130px] w-[45%] rotate-2 sm:h-[148px]"
          prefersReducedMotion={prefersReducedMotion}
        >
          <div className="h-[92px] sm:h-[108px]">
            <NetworkGraph prefersReducedMotion={prefersReducedMotion} />
          </div>
        </MonitorFrame>

        <Motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="security-center-monitor absolute left-[14%] top-7 z-10 h-[180px] w-[72%] rounded-xl p-1.5 sm:top-9 sm:h-[208px] sm:w-[70%]"
        >
          <div className="security-monitor-screen relative h-full overflow-hidden rounded-lg p-3 sm:p-4">
            <div className="security-screen-noise pointer-events-none absolute inset-0" />
            <div className="relative z-10 mb-3 flex items-center justify-between border-b border-emerald-400/20 pb-2 text-[8px] uppercase tracking-[0.16em] text-emerald-300/80">
              <span className="flex items-center gap-1.5"><Terminal size={11} /> lab-session.local</span>
              <span className="text-emerald-400/70">secure demo</span>
            </div>
            <div className="relative z-10 space-y-1.5 text-[8px] leading-4 text-slate-400 sm:text-[9px]">
              {TERMINAL_LINES.map((line) => <p key={line}><span className="text-cyan-300/80">&gt;</span> {line}</p>)}
              <p className="mt-2 min-h-8 text-emerald-300">
                <span className="text-emerald-500">lab@demo:~$</span> {DEMO_MESSAGES[messageIndex]}
                <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-emerald-400 align-middle" />
              </p>
            </div>
          </div>
        </Motion.div>

        <div className="security-keyboard absolute bottom-4 left-1/2 z-10 h-12 w-[68%] -translate-x-1/2 skew-x-[-8deg] rounded-lg sm:bottom-3 sm:h-14">
          <div className="grid h-full grid-cols-10 gap-1 p-2 opacity-70">
            {Array.from({ length: 30 }, (_, index) => (
              <span key={index} className={`rounded-[2px] bg-emerald-300/20 ${index % 11 === 0 ? 'bg-emerald-300/50 shadow-[0_0_5px_#34D399]' : ''}`} />
            ))}
          </div>
        </div>
        <div className="security-desk absolute bottom-0 left-0 h-5 w-full rounded-[50%] bg-black/80 shadow-[0_-8px_28px_rgba(52,211,153,0.12)]" />
      </div>

      <div className="relative z-20 flex items-center justify-between gap-3 border-t border-emerald-400/15 pt-3 text-[9px] uppercase tracking-wider text-emerald-300/70">
        <span className="flex items-center gap-1.5"><Activity size={12} /> Research workspace</span>
        <span className="flex items-center gap-1.5 text-slate-500"><LockKeyhole size={12} /> No commands executed</span>
      </div>
    </Motion.div>
  );
};

export default CybersecurityHeroVisual;
