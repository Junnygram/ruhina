"use client";

import { useState, useEffect } from "react";
import { FileText, Printer, Eye, X, MailOpen, Download, Link as LinkIcon } from "lucide-react";

export default function DocumentViewer() {
  const [activeTab, setActiveTab] = useState<"resume" | "cover-letter">("resume");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };
    if (isPreviewOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  const handlePrint = () => {
    window.print();
  };

  const renderResume = (isPrintable = false) => (
    <div 
      id="printable-resume" 
      className={`bg-white text-slate-900 p-8 sm:p-12 shadow-inner border border-slate-200 mx-auto max-w-4xl text-left select-text ${
        isPrintable ? "" : "font-sans text-xs sm:text-sm"
      }`}
      style={{ minHeight: "297mm" }} // Standard A4 height proportion
    >
      {/* Header */}
      <div className="border-b-2 border-emerald-600 pb-6 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
          Ruhina Sardar Rumi
        </h1>
        <p className="text-emerald-700 font-semibold mt-1 tracking-wider text-xs sm:text-sm uppercase font-mono">
          Cloud Computing & Systems Administration Specialist
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 mt-4 text-[11px] text-slate-500 font-mono">
          <span>Toronto, ON</span>
          <span className="hidden sm:inline">•</span>
          <span>(437) 873-5266</span>
          <span className="hidden sm:inline">•</span>
          <a href="mailto:ruhinasardar.rumi@georgebrown.ca" className="hover:underline text-emerald-600">ruhinasardar.rumi@georgebrown.ca</a>
          <span className="hidden sm:inline">•</span>
          <a href="https://www.linkedin.com/in/ruhina-sardar-rumi-159783327/" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600">linkedin.com/in/ruhina-sardar-rumi</a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
        {/* Left Side: Summary & Experience */}
        <div className="md:col-span-8 space-y-6">
          {/* Objective */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 font-mono">
              Objective Statement
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Detail-oriented and technically proficient Cloud Computing student seeking the Junior Systems Administrator (Intern) position for Fall 2026 at S&C Electric Canada Ltd. Aiming to leverage hands-on training in Linux/Windows systems administration, network infrastructure configuration, and cloud architectures to support corporate IT efficiency and system reliability.
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 font-mono">
              Professional Experience
            </h2>

            {/* ICT Tech */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline gap-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Systems & Support Technician
                </h3>
                <span className="text-slate-500 text-xs font-mono">Sept 2023 – Nov 2024</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold font-mono">
                Ideal Computer Technology Ltd. | Remote
              </p>
              <ul className="list-disc pl-5 text-slate-600 text-xs space-y-1">
                <li>Provided Tier 1/2 remote technical support for distributed users, resolving OS (Windows/macOS), software, and network routing discrepancies.</li>
                <li>Administered Active Directory and Microsoft Entra ID (Azure AD) for user provisioning, group permission templates, and password resets.</li>
                <li>Supported Microsoft 365 tenant settings, managing SaaS configuration issues and troubleshooting user profile access.</li>
                <li>Remotely diagnosed hardware failures (memory, storage, peripherals) and guided on-site personnel through resolutions.</li>
              </ul>
            </div>

            {/* Integreon */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline gap-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Cyber Incident Analyst (Contract)
                </h3>
                <span className="text-slate-500 text-xs font-mono">Jan 2025 – Present</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold font-mono">
                Integreon | Remote
              </p>
              <ul className="list-disc pl-5 text-slate-600 text-xs space-y-1">
                <li>Analyzed complex datasets and electronic records for security incidents to identify compromised PII and assess infrastructure vulnerabilities.</li>
                <li>Managed high-volume ticket queues in a secure virtual desktop environment, meeting strict SLA turnaround and accuracy targets.</li>
              </ul>
            </div>

            {/* Canada Post */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap justify-between items-baseline gap-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Post Office Clerk
                </h3>
                <span className="text-slate-500 text-xs font-mono">June 2025 – Present</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold font-mono">
                Canada Post | Part-Time
              </p>
              <ul className="list-disc pl-5 text-slate-600 text-xs space-y-1">
                <li>Handled high-security shipping transactions and verified confidential documents in strict compliance with federal privacy and safety policies.</li>
                <li>Utilized proprietary databases to process assets, resolving transactional errors and database discrepancies under time constraints.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Side: Skills & Education */}
        <div className="md:col-span-4 space-y-6">
          {/* Qualifications */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 font-mono">
              Qualifications
            </h2>
            <ul className="list-disc pl-4 text-slate-600 text-xs space-y-1">
              <li>Enrolled in Cloud Computing Advanced Diploma with practical training in enterprise infrastructure.</li>
              <li>Hands-on familiarity with Active Directory, Microsoft 365, and user permissions templates.</li>
              <li>Strong baseline knowledge of Linux bash scripting and file permissions management.</li>
            </ul>
          </section>

          {/* Skills */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-2.5">
              <div>
                <span className="block font-bold text-slate-800 text-xs">Operating Systems</span>
                <span className="text-slate-600 text-xs">Windows Server 2022, Windows 10/11, Ubuntu, RHEL</span>
              </div>
              <div>
                <span className="block font-bold text-slate-800 text-xs">Networking & Cloud</span>
                <span className="text-slate-600 text-xs">TCP/IP, DNS, DHCP, VLANs, Subnetting, Cloud Basics</span>
              </div>
              <div>
                <span className="block font-bold text-slate-800 text-xs">Tools & SaaS</span>
                <span className="text-slate-600 text-xs">Active Directory, Microsoft Entra ID, VMware, Office 365</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1.5 font-mono">
              Education
            </h2>
            <div>
              <h3 className="font-bold text-slate-800 text-xs">
                Advanced Diploma in Cloud Computing Technologies
              </h3>
              <p className="text-slate-600 text-xs mt-0.5">
                George Brown College, Toronto
              </p>
              <p className="text-emerald-700 text-[10px] font-mono mt-0.5">
                Expected Completion: Dec 2027
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-xs">
                Bachelor of Computer Science
              </h3>
              <p className="text-slate-600 text-xs mt-0.5">
                University of the People, USA
              </p>
              <p className="text-slate-500 text-[10px] font-mono mt-0.5">
                Completed: Jan 2026
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const renderCoverLetter = () => (
    <div 
      className="bg-white text-slate-900 p-8 sm:p-12 shadow-inner border border-slate-200 mx-auto max-w-4xl text-left select-text font-sans text-xs sm:text-sm space-y-6"
      style={{ minHeight: "297mm" }}
    >
      {/* Sender Header */}
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-900">Ruhina Sardar Rumi</h2>
        <div className="flex flex-wrap gap-x-4 text-xs text-slate-500 font-mono mt-1">
          <span>Toronto, ON</span>
          <span>(437) 873-5266</span>
          <a href="mailto:ruhinasardar.rumi@georgebrown.ca" className="hover:underline text-emerald-600">ruhinasardar.rumi@georgebrown.ca</a>
        </div>
        <p className="text-xs text-slate-400 mt-2 font-mono">August 11, 2026</p>
      </div>

      {/* Recipient */}
      <div className="text-xs sm:text-sm text-slate-700 space-y-0.5 pt-2">
        <p className="font-bold text-slate-900">Hiring Manager</p>
        <p>S&C Electric Canada Ltd.</p>
        <p>90 Belfield Road</p>
        <p>Toronto, ON, M9W 1G4</p>
        <p className="font-semibold text-slate-900 pt-3">
          Regarding: Junior Systems Administrator (Intern) – Fall 2026
        </p>
      </div>

      {/* Body */}
      <div className="text-slate-600 leading-relaxed space-y-4 text-xs sm:text-sm">
        <p>Dear Hiring Manager,</p>
        <p>
          I am writing to express my strong interest in the Junior Systems Administrator (Intern) position for Fall 2026 at S&C Electric Canada Ltd. As a current student in the Advanced Diploma in Cloud Computing Technologies program at George Brown College, combined with my completed Bachelor of Computer Science degree, I possess a solid foundation in multi-platform system operations and infrastructure. I am eager to contribute my technical knowledge and dedicated problem-solving approach to your IT operations team.
        </p>
        <p>
          My academic journey and hands-on lab environments have allowed me to build core competencies in Linux command-line management, Windows Server deployment, network topology configuration, and virtualization. Additionally, my background as an IT Technician at Ideal Computer Technology Ltd. provided practical exposure to diagnosing hardware vulnerabilities, resolving active software conflicts, and managing network peripherals under tight deadlines. Complementing this technical background, my current experience at Canada Post has sharpened my customer-facing communication, escalation troubleshooting, and high-pressure task prioritization skills.
        </p>
        <p>
          I am particularly drawn to S&C Electric Canada Ltd. due to your commitment to innovation and reliable power delivery systems. I am highly motivated to bridge the gap between on-premises architecture and modern cloud environments while supporting your team with Active Directory management, Office 365 administration, and process automation. I am an adaptable, self-starting learner who thrives both when working independently on complex technical tasks and when collaborating across cross-functional teams.
        </p>
        <p>
          Thank you for your time and consideration of my application. I welcome the opportunity to discuss further how my academic training, technical troubleshooting skills, and work ethic align with the goals of S&C Electric Canada Ltd.
        </p>
        <p className="pt-4">Best regards,</p>
        <p className="font-bold text-slate-900">Ruhina Sardar Rumi</p>
      </div>
    </div>
  );

  return (
    <div id="credentials-viewer" className="w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4 gap-4">
        {/* Document selector Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("resume")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === "resume"
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Interactive Resume</span>
          </button>
          <button
            onClick={() => setActiveTab("cover-letter")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === "cover-letter"
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <MailOpen className="w-4 h-4" />
            <span>Cover Letter</span>
          </button>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex-1 sm:flex-none inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-slate-850 px-4 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Fullscreen</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-500 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Document View Body (Scrollable display sheet) */}
      <div className="flex-1 bg-slate-950/40 p-4 sm:p-8 overflow-y-auto max-h-[600px] border-b border-slate-800/80">
        {activeTab === "resume" ? renderResume() : renderCoverLetter()}
      </div>

      {/* Fullscreen Overlay Modal */}
      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div 
            className="w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  DOCUMENT PREVIEW (FULLSCREEN)
                </span>
                <h4 className="text-sm font-bold text-white uppercase font-mono">
                  {activeTab === "resume" ? "Ruhina_Sardar_Rumi_Resume" : "Ruhina_Cover_Letter"}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
                <div className="w-[1px] h-6 bg-slate-800" />
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body (Scrollable Sheet) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-12 bg-slate-950">
              {activeTab === "resume" ? renderResume(true) : renderCoverLetter()}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 text-[10px] text-zinc-500 font-mono flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>Ruhina Sardar Rumi — systems_docs_v1.sh</span>
              <span>Click outside or press ESC to dismiss</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
