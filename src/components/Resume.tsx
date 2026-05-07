import { Download, Eye, Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    role: "AI/ML Engineer",
    org: "Freelance & Open Source",
    period: "2023 — Present",
    points: [
      "Built RAG chatbots and semantic search using LangChain, OpenAI, and pgvector.",
      "Shipped production ML APIs with FastAPI, Docker, and CI/CD on AWS.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Independent Projects",
    period: "2022 — 2023",
    points: [
      "Developed React + TypeScript apps backed by Node.js and PostgreSQL.",
      "Integrated computer vision pipelines (YOLOv8) into web dashboards.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech, AI/ML",
    org: "Mohan Babu University",
    period: "2023 — 2027",
  },
];

const certs = [
  "Data Analyst - udemy",
  "Generative AI with LLMs - udemy",
  "Azure cloud fundamentals - Microsoft",
];

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-12 text-center">
      
          <h2 id="resume-heading" className="mt-2 font-display text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Resume</span>
          </h2>
          {/*<p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            A quick overview
          </p>*/}
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A quick overview my experience, education, and credentials. 
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Eye size={16} aria-hidden="true" /> View PDF
            </a>
            <a
              href="/resume/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} aria-hidden="true" /> Download
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="reveal glass rounded-2xl p-6 md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Briefcase size={18} className="text-primary" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold">Experience</h3>
            </div>
            <ul className="space-y-5">
              {experience.map((e) => (
                <li key={e.role} className="border-l-2 border-primary/40 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold">{e.role} <span className="text-muted-foreground font-normal">· {e.org}</span></p>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-primary" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <ul className="space-y-3">
              {education.map((ed) => (
                <li key={ed.degree}>
                  <p className="font-medium">{ed.degree}</p>
                  <p className="text-sm text-muted-foreground">{ed.org} · {ed.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award size={18} className="text-primary" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {certs.map((c) => <li key={c}>• {c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
