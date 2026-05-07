//import profile from "@/assets/profile.jpg";
import profile from "@/assets/chandu_photo.jpeg";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>

          <h1
            id="hero-heading"
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="text-gradient">K Chandu</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
            AI/ML Engineer{" "}
            <span className="text-foreground/40">|</span> 
          </p>

          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            I build intelligent systems that turn complex data into real-world
            impact — from deep learning models to production-ready APIs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("resume")}
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              <Download size={16} /> Resume
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              <Mail size={16} /> Contact
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 md:h-96 md:w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="animate-float relative h-72 w-72 md:h-96 md:w-96 rounded-full p-1 bg-gradient-brand shadow-glow">
            <img
              src={profile}
              alt="Portrait of Sai Kiran, AI/ML Engineer"
              width={384}
              height={384}
              loading="eager"
              //className="h-full w-full rounded-full object-cover"
              //className="h-full w-full rounded-full object-cover object-top"//----->image moved down
              //className="h-full w-full rounded-full object-cover object-bottom"//---->image moved up
              className="h-full w-full rounded-full object-cover object-[center_15%]"
              //image moves cntered but with more focus on upper part of the image where face is located
            />
          </div>
        </div>
      </div>
    </section>
  );
}
