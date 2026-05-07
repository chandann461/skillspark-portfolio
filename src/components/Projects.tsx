import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  metric?: string;
};

const projects: Project[] = [
  {
    title: "Ai Agent",
    description:
      "Built a full-stack AI-assisted Appointment Management System with scheduling, cancellation, and real-time appointment tracking features.",
    tags: ["Python", "Vapi", "SQLAlchemy/SQLite", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    
  },
  {
    title: "RAG Chatbot Platform",
    description:
      "Retrieval-Augmented Generation chatbot with LangChain, OpenAI, and Pinecone. Supports multi-tenant document ingestion.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    github: "https://github.com",
    demo: "https://example.com",
    metric: "10k+ queries/day",
  },
  {
    title: "Image Classification API",
    description:
      "Fine-tuned ResNet-50 for medical image classification. Deployed on AWS with auto-scaling and model versioning via MLflow.",
    tags: ["PyTorch", "AWS", "MLflow", "Docker"],
    github: "https://github.com",
    metric: "96.4% accuracy",
  },
  {
    title: "Time-Series Forecasting",
    description:
      "LSTM + Transformer hybrid model for energy demand forecasting. Reduced forecast error by 23% over baseline.",
    tags: ["TensorFlow", "Pandas", "Airflow"],
    github: "https://github.com",
    metric: "MAPE 4.1%",
  },
  {
    title: "Real-Time Object Detection",
    description:
      "YOLOv8 deployed on edge devices for retail analytics. Processes 30 FPS on Jetson Nano with optimized TensorRT inference.",
    tags: ["YOLOv8", "TensorRT", "OpenCV"],
    github: "https://github.com",
    demo: "https://example.com",
    metric: "30 FPS edge",
  },
  {
    title: "MLOps Pipeline Template",
    description:
      "End-to-end MLOps template with DVC, MLflow, and GitHub Actions. CI/CD for training, evaluation, and deployment.",
    tags: ["MLflow", "DVC", "GitHub Actions", "Kubernetes"],
    github: "https://github.com",
    metric: "5min deploy",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 text-center">
          
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {/*Selected Work*/}
          </p>
          
          <h2
            id="projects-heading"
            className="mt-2 font-display text-4xl md:text-5xl font-bold"
          >
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of AI/ML systems I've built end-to-end — from research notebooks
            to production deployments.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="reveal group relative flex flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_-12px_oklch(0.55_0.22_265/0.45)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "var(--gradient-brand)", filter: "blur(40px)", opacity: 0.08 }}
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold leading-tight">
                  {p.title}
                </h3>
                {p.metric && (
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-foreground/90">
                    {p.metric}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source code on GitHub`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} aria-hidden="true" /> Code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} aria-hidden="true" /> Demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
