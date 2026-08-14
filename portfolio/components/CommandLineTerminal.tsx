"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Shield, Play } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function CommandLineTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "system-init",
      output: (
        <div className="space-y-1 font-mono text-xs text-zinc-400">
          <p className="text-emerald-400">RSR-SYS [Version 1.0.0]</p>
          <p>© {new Date().getFullYear()} Ruhina Sardar Rumi. All rights reserved.</p>
          <p className="pt-2">Type <span className="text-emerald-400 font-bold">help</span> to view all available commands.</p>
        </div>
      ),
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-zinc-400 py-1 font-mono">
            <div><span className="text-emerald-400 font-bold">help</span> - Show this help menu</div>
            <div><span className="text-emerald-400 font-bold">skills</span> - List technical expertise</div>
            <div><span className="text-emerald-400 font-bold">experience</span> - Show professional experience</div>
            <div><span className="text-emerald-400 font-bold">education</span> - Show academic credentials</div>
            <div><span className="text-emerald-400 font-bold">projects</span> - View virtual enterprise labs</div>
            <div><span className="text-emerald-400 font-bold">contact</span> - Show communication channels</div>
            <div><span className="text-emerald-400 font-bold">clear</span> - Clear the terminal console</div>
          </div>
        );
        break;
      case "skills":
        response = (
          <div className="space-y-3 text-zinc-300 font-mono py-1">
            <div>
              <span className="text-emerald-400 font-bold uppercase block text-xs tracking-wider">Operating Systems:</span>
              <span className="text-zinc-400">Windows Server 2022, Windows 10/11 Enterprise, Linux (Ubuntu/RHEL)</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold uppercase block text-xs tracking-wider">Networking & Cloud:</span>
              <span className="text-zinc-400">VLANs, DNS, DHCP, Subnetting, TCP/IP, Cloud Infrastructure Architecture</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold uppercase block text-xs tracking-wider">Software & Systems:</span>
              <span className="text-zinc-400">Active Directory, Microsoft Entra ID (Azure AD), Microsoft 365, VMware Workstation</span>
            </div>
          </div>
        );
        break;
      case "experience":
        response = (
          <div className="space-y-3 text-zinc-300 font-mono py-1">
            <div>
              <span className="text-emerald-400 font-bold">Systems & Support Technician @ Ideal Computer Technology Ltd.</span>
              <span className="text-zinc-500 text-xs block">Sept 2023 - Nov 2024</span>
              <ul className="list-disc pl-5 text-zinc-400 text-xs space-y-0.5 mt-1">
                <li>Managed Active Directory & Entra ID (Azure AD) user objects, permission templates, and security groups.</li>
                <li>Provided Tier 1/2 systems, network, and SaaS configuration support.</li>
                <li>Diagnosed hardware vulnerabilities and provisioning errors.</li>
              </ul>
            </div>
            <div className="pt-2">
              <span className="text-emerald-400 font-bold">Cyber Incident Analyst @ Integreon (Contract)</span>
              <span className="text-zinc-500 text-xs block">Jan 2025 - Present</span>
              <ul className="list-disc pl-5 text-zinc-400 text-xs space-y-0.5 mt-1">
                <li>Analyzed complex datasets for security incidents to identify compromised personal data.</li>
                <li>Operated securely within virtualized sandboxed environments.</li>
              </ul>
            </div>
          </div>
        );
        break;
      case "education":
        response = (
          <div className="space-y-3 text-zinc-300 font-mono py-1">
            <div>
              <span className="text-emerald-400 font-bold">Advanced Diploma in Cloud Computing Technologies</span>
              <span className="text-zinc-400 block text-xs">George Brown College (Toronto, ON) | Dec 2027</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Bachelor of Computer Science</span>
              <span className="text-zinc-400 block text-xs">University of the People (USA) | Jan 2023 - Jan 2026</span>
            </div>
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="space-y-3 text-zinc-300 font-mono py-1">
            <div>
              <span className="text-emerald-400 font-bold">Virtual Enterprise Network Configuration:</span>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                Architected and deployed isolated multi-subnet virtual lab topologies using hypervisors. Implemented Windows Server (AD DS, DNS, DHCP) and integrated Linux nodes with strict subnet boundaries.
              </p>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Linux System Administration Automation:</span>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                Engineered shell scripts to automate systems monitoring, performance telemetry exports, and user credential management under Ubuntu and Red Hat environments.
              </p>
            </div>
          </div>
        );
        break;
      case "contact":
        response = (
          <div className="space-y-1 text-zinc-300 font-mono py-1 text-xs">
            <p><span className="text-emerald-400 font-bold">Email:</span> <a href="mailto:ruhinasardar.rumi@georgebrown.ca" className="hover:underline text-zinc-200">ruhinasardar.rumi@georgebrown.ca</a></p>
            <p><span className="text-emerald-400 font-bold">Phone:</span> (437) 873-5266</p>
            <p><span className="text-emerald-400 font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/ruhina-sardar-rumi-159783327/" target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-200">linkedin.com/in/ruhina-sardar-rumi</a></p>
            <p><span className="text-emerald-400 font-bold">Location:</span> Toronto, ON, Canada</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        response = "";
        break;
      default:
        response = (
          <div className="text-red-400 font-mono text-xs">
            sh: command not found: {cmd}. Type <span className="text-emerald-400 font-bold">help</span> to view commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div 
      className="w-full bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl flex flex-col h-[400px] cursor-text"
      onClick={focusInput}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></span>
          </div>
          <div className="h-3 w-[1px] bg-slate-800 mx-1"></div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>ruhina@rsr-sys:~</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400/80">
          <Shield className="w-3 h-3 text-emerald-500" />
          <span>SECURE SYSTEM</span>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs select-text">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            {item.command !== "system-init" && (
              <div className="flex items-center gap-2 text-zinc-200">
                <span className="text-emerald-500">visitor@rsr-sys:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            {item.output}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/60 border-t border-slate-800 font-mono text-xs">
        <span className="text-emerald-500">visitor@rsr-sys:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-700 select-text"
          placeholder="type a command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button type="submit" className="text-zinc-500 hover:text-emerald-400 transition-colors">
          <Play className="w-3 h-3 fill-current" />
        </button>
      </form>
    </div>
  );
}
