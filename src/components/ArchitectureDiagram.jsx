import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

const nodes = [
  {
    id: "client",
    title: "Client Layer",
    tech: "React 19 • PWA • Tailwind",
    icon: <FaLaptopCode size={20} className="text-cyan-400" />,
    badge: "FRONTEND SPA",
    latency: "<16ms UI Render",
    details: [
      "Responsive Single Page Application with offline-ready Progressive Web App (PWA) caching.",
      "Hardware-accelerated animations using Framer Motion on the compositor thread.",
      "State management for real-time review queries and applicant tracking workflows.",
    ],
    border: "border-cyan-500/40",
    glow: "shadow-cyan-500/10",
    color: "text-cyan-400",
  },
  {
    id: "gateway",
    title: "API Gateway",
    tech: "Node.js • Express.js • REST",
    icon: <FaServer size={20} className="text-indigo-400" />,
    badge: "GATEWAY ROUTER",
    latency: "~12ms Routing",
    details: [
      "Asynchronous, non-blocking HTTP reverse proxy handling concurrent user requests.",
      "JWT authorization lifecycle, request validation, and payload schema verification.",
      "Dispatches incoming review text payloads to FastAPI ML inference engine.",
    ],
    border: "border-indigo-500/40",
    glow: "shadow-indigo-500/10",
    color: "text-indigo-400",
  },
  {
    id: "ml",
    title: "ML Inference Engine",
    tech: "FastAPI • Python • LinearSVC",
    icon: <FaBrain size={20} className="text-emerald-400" />,
    badge: "PUBLISHED IJSREM",
    latency: "<5ms Inference",
    details: [
      "Lightweight NLP classifier with TF-IDF + Bigram feature extraction, achieving 88% accuracy.",
      "Specialized Hinglish & code-mixed text normalizer for Indian e-commerce reviews.",
      "Avoids heavy GPU transformer memory overhead, running efficiently on low-resource instances.",
    ],
    border: "border-emerald-500/40",
    glow: "shadow-emerald-500/10",
    color: "text-emerald-400",
  },
  {
    id: "db",
    title: "Data Persistence",
    tech: "MongoDB • MySQL",
    icon: <FaDatabase size={20} className="text-blue-400" />,
    badge: "HYBRID DATABASE",
    latency: "<8ms Query",
    details: [
      "Relational MySQL database schemas for ACID user auth, job postings, and review logs.",
      "MongoDB document store for dynamic applicant profiles and flexible resume data.",
      "Optimized indexing and connection pooling for high-throughput CRUD operations.",
    ],
    border: "border-blue-500/40",
    glow: "shadow-blue-500/10",
    color: "text-blue-400",
  },
  {
    id: "devops",
    title: "Cloud & CI/CD",
    tech: "AWS EC2 • Docker • GitHub Actions",
    icon: <FaCloud size={20} className="text-orange-400" />,
    badge: "AUTOMATED DEVOPS",
    latency: "Zero-Downtime CD",
    details: [
      "Automated build, test, and deploy pipelines via GitHub Actions triggered on main branch push.",
      "Dockerized microservices isolated with custom bridge networks and environment configs.",
      "Hosted on AWS EC2 instances configured with Nginx reverse proxy and SSL certificates.",
    ],
    border: "border-orange-500/40",
    glow: "shadow-orange-500/10",
    color: "text-orange-400",
  },
];

const ArchitectureDiagram = () => {
  const [activeNode, setActiveNode] = useState(nodes[2]); // Default: ML Engine

  return (
    <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          [SYS_ARCH // MICROSERVICES_PIPELINE]
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white tracking-tight">
          Interactive System Architecture
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Interactive full-stack data flow: Click on any architecture node below to inspect live pipeline metrics, routing logic, and cloud infrastructure.
        </p>
      </motion.div>

      {/* Interactive Node Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
        {nodes.map((node, index) => {
          const isActive = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                isActive
                  ? `bg-white/[0.08] ${node.border} shadow-xl ${node.glow} scale-[1.02]`
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {/* Active Indicator Top Line */}
              {isActive && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {node.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    STAGE {index + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {node.title}
                </h3>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                  {node.tech}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className={node.color}>{node.latency}</span>
                <span className="text-gray-500 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Detailed HUD Card */}
      <motion.div
        key={activeNode.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-7 sm:p-9 border border-white/15 shadow-2xl relative overflow-hidden"
      >
        {/* Monospace Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300">INSPECTING_NODE:</span>
            <span className="text-cyan-400 font-bold uppercase">{activeNode.title}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <span>METRIC: <strong className="text-white">{activeNode.latency}</strong></span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {activeNode.badge}
            </span>
          </div>
        </div>

        {/* Node Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                {activeNode.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{activeNode.title}</h4>
                <p className="text-xs text-blue-400 font-mono">{activeNode.tech}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed font-sans">
              Part of Rudra's end-to-end architecture powering real-time web applications, AI microservices, and continuous cloud delivery.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-semibold">
              Implementation & Operational Specs
            </h5>
            <ul className="space-y-2.5">
              {activeNode.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                  <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArchitectureDiagram;
