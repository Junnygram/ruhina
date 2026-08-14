import Link from "next/link";
import { 
  Server, 
  Database, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Cpu, 
  Network, 
  Sliders, 
  BookOpen, 
  ShieldAlert, 
  Terminal,
  Calendar,
  Lock,
  Settings,
  Link as LinkIcon
} from "lucide-react";
import CommandLineTerminal from "@/components/CommandLineTerminal";
import DocumentViewer from "@/components/DocumentViewer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070b13] text-slate-100 font-sans selection:bg-emerald-500/20 antialiased overflow-hidden">
      {/* Tech Dotted Grids */}
      <div className="absolute inset-0 tech-grid opacity-[0.2] pointer-events-none z-0"></div>
      <div className="absolute inset-0 tech-grid-fine opacity-[0.05] pointer-events-none z-0"></div>

      {/* Cyberpunk grid glowing elements */}
      <div className="absolute top-[5%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#070b13]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400 group-hover:bg-slate-850 group-hover:border-emerald-500/30 transition-all">
              <Server className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs font-bold tracking-widest text-slate-200 uppercase">
              rsr.sys
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-wider uppercase text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#terminal" className="hover:text-emerald-400 transition-colors">Console</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#documents" className="hover:text-emerald-400 transition-colors">Documents</a>
          </nav>
          <div>
            <a
              href="mailto:ruhinasardar.rumi@georgebrown.ca"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.25)] font-mono"
            >
              PING ME
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SYSTEMS_OPERATOR_ONLINE // Fall 2026 Co-op</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-mono">
                Ruhina Sardar Rumi
              </h1>
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent w-fit font-mono">
                Junior Systems Administrator & Cloud Tech Specialist
              </h2>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
              Equipped with a solid foundation in Computer Science and specialized training in Cloud Infrastructure. Passionate about maintaining enterprise systems, automating processes, and managing Active Directory and virtualization topologies to guarantee high availability and reliability.
            </p>

            <div className="flex flex-wrap gap-3 text-[10px] font-mono text-slate-500 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900/40 border border-slate-800/80 px-3 py-2 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Toronto, ON, Canada</span>
              </div>
              <a 
                href="mailto:ruhinasardar.rumi@georgebrown.ca"
                className="flex items-center gap-1.5 bg-slate-900/40 border border-slate-800/80 px-3 py-2 rounded-lg hover:border-emerald-500/30 hover:text-slate-300 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>ruhinasardar.rumi@georgebrown.ca</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ruhina-sardar-rumi-159783327/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-slate-900/40 border border-slate-800/80 px-3 py-2 rounded-lg hover:border-emerald-500/30 hover:text-slate-300 transition-all"
              >
                <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>linkedin.com/in/ruhina-sardar-rumi</span>
              </a>
            </div>
          </div>

          {/* Quick Config Profile Card */}
          <div className="lg:col-span-5 bg-slate-900/30 border border-slate-800 rounded-2xl p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl pointer-events-none"></div>
            
            <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center gap-2">
              <Settings className="w-3.5 h-3.5" />
              <span>Host specifications</span>
            </h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300">Platforms</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Windows Server 2022, Active Directory, Red Hat, Ubuntu</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Network className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300">Networking Protocols</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Subnetting, VLAN Routing, DNS/DHCP Provisioning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sliders className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300">Virtualization & Tools</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">VMware Workstation, Microsoft 365 SaaS Administration</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300">Cyber Analyst Background</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Vulnerability Scanning, Secure Virtual Desktop Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Command Line Terminal Section */}
      <section id="terminal" className="border-t border-slate-800 bg-[#070b13]/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              INTERACTIVE CONSOLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Execute Terminal Diagnostics
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Test Ruhina's background directly from the secure virtual terminal below. Type <code className="bg-slate-900 border border-slate-800 px-1 py-0.5 rounded text-emerald-400 font-mono text-xs">skills</code>, <code className="bg-slate-900 border border-slate-800 px-1 py-0.5 rounded text-emerald-400 font-mono text-xs">experience</code>, or <code className="bg-slate-900 border border-slate-800 px-1 py-0.5 rounded text-emerald-400 font-mono text-xs">projects</code> to run queries.
            </p>
          </div>
          
          <CommandLineTerminal />
        </div>
      </section>

      {/* Technical Skill Matrix Section */}
      <section id="skills" className="border-t border-slate-800 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              CORE INFRASTRUCTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Technical Competence Grid
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* System Admin */}
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/20 transition-all space-y-3">
              <Server className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-sm font-mono">Systems Admin</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Active Directory management, User & Group creation, Microsoft Entra ID integration, security permissions, and password policies.
              </p>
            </div>

            {/* Network Ops */}
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/20 transition-all space-y-3">
              <Network className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-sm font-mono">Networking</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                TCP/IP routing, DNS and DHCP server configurations, Virtual LAN subnet segmentation, and interface telemetry audits.
              </p>
            </div>

            {/* OS Environments */}
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/20 transition-all space-y-3">
              <Sliders className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-sm font-mono">Multi-OS Provisioning</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Windows Server 2022 deployment, client workstation configuration, Linux bash automation shell scripts (Ubuntu, Red Hat).
              </p>
            </div>

            {/* Virtualization & SaaS */}
            <div className="bg-slate-900/20 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/20 transition-all space-y-3">
              <Database className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-sm font-mono">Virtualization</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Hypervisor infrastructure management, VMware isolated lab orchestration, Microsoft 365 SaaS user access administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience History & Academics */}
      <section id="experience" className="border-t border-slate-800 bg-[#070b13]/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Timeline Left side */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                  EXPERIENCE REGISTRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-mono">
                  Professional Timeline
                </h3>
              </div>

              {/* Timeline Container */}
              <div className="border-l border-slate-800 pl-6 space-y-8 relative">
                {/* Job 1 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 border border-slate-950"></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h4 className="font-bold text-slate-100 text-sm font-mono">Cyber Incident Analyst (Contract)</h4>
                    <span className="text-[10px] font-mono text-slate-500">Jan 2025 – Present</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold font-mono">Integreon | Remote</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Analyzing complex databases and logs for security incidents to identify compromised personal data. Operating securely inside sandboxed virtual desktop configurations to protect data integrity.
                  </p>
                </div>

                {/* Job 2 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-950"></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h4 className="font-bold text-slate-100 text-sm font-mono">Systems & Support Technician</h4>
                    <span className="text-[10px] font-mono text-slate-500">Sept 2023 – Nov 2024</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold font-mono">Ideal Computer Technology Ltd. | Remote</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Managed active directory objects, provisioned users, handled security group memberships and resets. Provided remote Tier 1/2 resolution for operating systems, networks, and SaaS (M365) configurations.
                  </p>
                </div>

                {/* Job 3 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-950"></div>
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h4 className="font-bold text-slate-100 text-sm font-mono">Post Office Clerk</h4>
                    <span className="text-[10px] font-mono text-slate-500">June 2025 – Present</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold font-mono">Canada Post | Part-Time</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Handled high-security shipping procedures, verified credentials and client identification in compliance with privacy guidelines. Resolved database transactions and parcel inventory errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Labs Right side */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                  ACADEMIC LABS
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight font-mono">
                  Practical Showcases
                </h3>
              </div>

              <div className="space-y-4">
                {/* Lab 1 */}
                <div className="bg-slate-900/10 border border-slate-800/80 rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase font-mono tracking-wider">Virtual Enterprise Lab</span>
                  </div>
                  <h5 className="font-bold text-slate-200 text-xs font-mono">Network Architectures</h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Configured isolated multi-subnet virtual laboratory spaces using hypervisors. Set up Windows Server domains with functional Active Directory DS, DNS records, DHCP scopes, and integrated Linux clients.
                  </p>
                </div>

                {/* Lab 2 */}
                <div className="bg-slate-900/10 border border-slate-800/80 rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase font-mono tracking-wider">Linux Scripting Lab</span>
                  </div>
                  <h5 className="font-bold text-slate-200 text-xs font-mono">Process Automation</h5>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Created bash automation shell scripts to streamline user onboarding parameters, monitor system uptime, output telemetry reports, and schedule automated backup archives in virtual environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Documents Section */}
      <section id="documents" className="border-t border-slate-800 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              CREDENTIAL CENTER
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Verification Documents
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Preview and save print-friendly versions of Ruhina's professional resume and Cover Letter. Click the buttons below to switch tabs or open a fullscreen modal display.
            </p>
          </div>

          <DocumentViewer />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-850 bg-slate-950 py-8 z-10 relative">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-widest text-slate-350 uppercase">
              rsr.sys
            </span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/ruhina-sardar-rumi-159783327/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="mailto:ruhinasardar.rumi@georgebrown.ca" className="hover:text-emerald-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
