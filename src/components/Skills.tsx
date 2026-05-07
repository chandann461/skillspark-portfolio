const categories = [
  {
    title: "AI / ML",
    accent: "from-blue-500 to-indigo-500",
    skills: [
      { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "scikitlearn/scikitlearn-original.svg" },
      { name: "OpenCV", icon: "opencv/opencv-original.svg" },
      { name: "HuggingFace", icon: null, emoji: "🤗" },
    ],
  },
  {
    title: "Backend",
    accent: "from-emerald-500 to-teal-500",
    skills: [
      { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
      //{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "MYSQL", icon: "mysql/mysql-original.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
    ],
  },
  {
    title: "Frontend",
    accent: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Tools",
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "Firebase", icon: "firebase/firebase-plain.svg" },
      { name: "MLflow", icon: null, emoji: "📊" },
      //{ name: "Airflow", icon: "apacheairflow/apacheairflow-original.svg" },
    ],
  },
];

const ICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="reveal px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
            Skills
          </span>
          <h2 id="skills-heading" className="mt-3 text-4xl md:text-5xl font-bold">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A curated stack across the full ML lifecycle — from research to production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="glass rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${cat.accent}`}
                />
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <span
                      className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_0_20px_-5px_oklch(0.65_0.2_265/0.6)]"
                    >
                      {s.icon ? (
                        <img
                          src={`${ICON_BASE}${s.icon}`}
                          alt=""
                          width={18}
                          height={18}
                          loading="lazy"
                          className="h-[18px] w-[18px]"
                        />
                      ) : (
                        <span aria-hidden="true" className="text-base leading-none">
                          {s.emoji}
                        </span>
                      )}
                      <span>{s.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
