import { Brain, Code2, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Deep Learning", desc: "NLP, CV, transformers" },
  { icon: Code2, label: "Full Stack", desc: "FastAPI + React" },
  { icon: Rocket, label: "MLOps", desc: "Scalable ML pipelines" },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="reveal px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
            About
          </span>
          <h2
            id="about-heading"
            className="mt-3 text-4xl md:text-5xl font-bold"
          >
            Turning data into <span className="text-gradient">decisions</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm an AI/ML engineer passionate about building intelligent
              systems that solve real-world problems. I specialize in{" "}
              <span className="text-foreground font-medium">deep learning, NLP, and computer vision</span>,
              backed by strong full-stack development skills using FastAPI and
              React.
            </p>
            <p>
              I enjoy turning complex data into actionable insights and
              deploying scalable ML pipelines that go from notebook to
              production.
            </p>
          </div>

          <ul className="md:col-span-2 space-y-3">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <li
                key={label}
                className="glass flex items-center gap-4 rounded-xl p-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
