import { createElement, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Command, Cpu, Database, Network, ShieldCheck } from 'lucide-react';

const COMMANDS = ['help', 'about', 'skills', 'projects', 'network', 'clear'];

const PROJECTS = [
  'Barbers Crown',
  'Fork and Fire',
  'Tailoring Website',
  'GPA Saver - Mega Project',
];

const SECURITY_SKILLS = [
  { name: 'Linux', detail: 'Existing tools foundation', icon: Command },
  { name: 'JWT', detail: 'Authentication knowledge', icon: ShieldCheck },
  { name: 'REST APIs', detail: 'Service integration', icon: Network },
  { name: 'Node.js', detail: 'Backend development', icon: Cpu },
  { name: 'MongoDB', detail: 'Data layer experience', icon: Database },
];

const NETWORK_NODES = [
  { id: 'gateway', label: 'Gateway', ip: '192.0.2.10', x: 16, y: 54, role: 'Simulated entry point' },
  { id: 'lab', label: 'Research Lab', ip: '198.51.100.24', x: 48, y: 22, role: 'Demo workstation' },
  { id: 'api', label: 'API Node', ip: '203.0.113.42', x: 82, y: 53, role: 'Sample service node' },
  { id: 'vault', label: 'Data Vault', ip: '192.0.2.88', x: 51, y: 82, role: 'Fictional storage node' },
];

const NETWORK_LINKS = [
  ['gateway', 'lab'],
  ['lab', 'api'],
  ['gateway', 'vault'],
  ['vault', 'api'],
];

const INITIAL_HISTORY = [
  { type: 'system', text: 'SIMULATED DEMO // security lab ready' },
  { type: 'system', text: 'Type "help" to view available commands.' },
];

const getNode = (id) => NETWORK_NODES.find((node) => node.id === id);

const getCommandOutput = (command) => {
  switch (command) {
    case 'help':
      return ['Available commands:', ...COMMANDS.map((item) => `  ${item}`)];
    case 'about':
      return [
        'Abdullah Mubeen // cybersecurity learning profile',
        'Exploring secure web engineering and defensive concepts.',
        'This interface is a local, simulated demonstration.',
      ];
    case 'skills':
      return ['Confirmed project skills:', '  Linux · JWT · REST APIs · Node.js · MongoDB'];
    case 'projects':
      return ['Portfolio projects:', ...PROJECTS.map((project) => `  ${project}`)];
    case 'network':
      return [
        'SIMULATED DEMO // fictional topology loaded',
        'No real network scan or connection was performed.',
      ];
    default:
      return [`Unknown command: "${command}"`, 'Type "help" to see the available demo commands.'];
  }
};

const DemoTerminal = () => {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [command, setCommand] = useState('');

  const submitCommand = (event) => {
    event.preventDefault();
    const normalizedCommand = command.trim().toLowerCase();

    if (!normalizedCommand) {
      return;
    }

    if (normalizedCommand === 'clear') {
      setHistory([]);
      setCommand('');
      return;
    }

    setHistory((currentHistory) => [
      ...currentHistory,
      { type: 'command', text: normalizedCommand },
      ...getCommandOutput(normalizedCommand).map((text) => ({ type: 'output', text })),
    ]);
    setCommand('');
  };

  return (
    <div className="cyber-terminal rounded-2xl p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between border-b border-emerald-400/15 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
          <Command size={15} />
          Interactive demo terminal
        </div>
        <span className="text-[10px] uppercase tracking-wider text-emerald-400/60">Local only</span>
      </div>
      <div className="cyber-terminal-history h-56 overflow-y-auto pr-1 text-xs leading-6 sm:h-60">
        {history.map((line, index) => (
          <p key={`${line.type}-${index}`} className={line.type === 'command' ? 'text-cyan-300' : line.type === 'system' ? 'text-emerald-300/80' : 'text-slate-400'}>
            {line.type === 'command' && <span className="text-emerald-400">lab@demo:~$ </span>}
            {line.text}
          </p>
        ))}
      </div>
      <form onSubmit={submitCommand} className="mt-3 flex items-center border-t border-emerald-400/15 pt-3">
        <label htmlFor="demo-command" className="sr-only">Enter a simulated terminal command</label>
        <span className="mr-2 text-xs text-emerald-400">lab@demo:~$</span>
        <input
          id="demo-command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-xs text-emerald-200 outline-none placeholder:text-slate-600"
          placeholder="try help"
          autoComplete="off"
          spellCheck="false"
        />
        <span aria-hidden="true" className="ml-1 h-4 w-1 animate-pulse bg-emerald-400" />
      </form>
      <p className="mt-3 text-[10px] text-slate-600">Predefined commands only · no shell access</p>
    </div>
  );
};

const DemoNetwork = ({ prefersReducedMotion }) => {
  const [selectedNode, setSelectedNode] = useState(NETWORK_NODES[1]);

  return (
    <div className="cyber-network rounded-2xl p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between border-b border-emerald-400/15 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
          <Network size={15} />
          Simulated network
        </div>
        <span className="rounded-full border border-emerald-400/25 px-2 py-1 text-[9px] uppercase tracking-wider text-emerald-300">SIMULATED DEMO</span>
      </div>
      <div className="relative h-64 overflow-hidden rounded-xl border border-emerald-400/10 bg-black/25">
        <svg viewBox="0 0 100 100" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" role="img" aria-label="Interactive simulated network graph">
          {NETWORK_LINKS.map(([startId, endId], index) => {
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
                strokeWidth="0.7"
                strokeDasharray="3 3"
                animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -12] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2, ease: 'linear' }}
              />
            );
          })}
          {NETWORK_NODES.map((node, index) => (
            <Motion.g
              key={node.id}
              role="button"
              tabIndex="0"
              aria-label={`Select ${node.label}`}
              onClick={() => setSelectedNode(node)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedNode(node);
                }
              }}
              animate={prefersReducedMotion ? undefined : { y: [0, -1.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
              className="cursor-pointer"
            >
              <circle cx={node.x} cy={node.y} r="7" fill="#06130f" stroke={selectedNode.id === node.id ? '#a7f3d0' : 'var(--main-color)'} strokeWidth={selectedNode.id === node.id ? '1.2' : '0.8'} />
              <circle cx={node.x} cy={node.y} r="2.2" fill="var(--main-color)" />
              <text x={node.x} y={node.y + 13} textAnchor="middle" fill="#94a3b8" fontSize="4">{node.label}</text>
            </Motion.g>
          ))}
        </svg>
      </div>
      <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-950/10 p-3">
        <p className="text-[10px] uppercase tracking-wider text-emerald-400/70">Selected demo node</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{selectedNode.label}</p>
            <p className="font-mono text-xs text-emerald-300">{selectedNode.ip}</p>
          </div>
          <p className="text-right text-[10px] text-slate-500">{selectedNode.role}</p>
        </div>
      </div>
    </div>
  );
};

const CybersecuritySkills = () => (
  <div className="cyber-skills rounded-2xl p-4 sm:p-5">
    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
      <ShieldCheck size={15} />
      Confirmed security foundations
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      {SECURITY_SKILLS.map(({ name, detail, icon: Icon }) => (
        <div key={name} className="cyber-skill-card flex items-center gap-3 rounded-xl p-3">
          {createElement(Icon, { size: 16, className: 'shrink-0 text-emerald-300' })}
          <div>
            <p className="text-sm font-semibold text-slate-200">{name}</p>
            <p className="text-[10px] text-slate-500">{detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CybersecurityExperience = ({ prefersReducedMotion }) => (
  <section id="cyber-lab" className="cyber-experience relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/70">Mode-exclusive workspace</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Security Lab Interface</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500">A safe, interactive demonstration of learning interests and portfolio work. All activity below is simulated.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <DemoTerminal />
          <CybersecuritySkills />
        </div>
        <DemoNetwork prefersReducedMotion={prefersReducedMotion} />
      </div>
    </div>
  </section>
);

export default CybersecurityExperience;
