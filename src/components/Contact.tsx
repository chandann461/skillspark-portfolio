import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const socials = [
    { href: "https://github.com", label: "GitHub", Icon: Github },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
    { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
    { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </p>
          <h2 id="contact-heading" className="mt-2 font-display text-4xl md:text-5xl font-bold">
            Let's build something <span className="text-gradient">intelligent</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Open to AI/ML roles, freelance projects, and research collaborations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <form
            onSubmit={onSubmit}
            noValidate
            className="reveal md:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:border-primary outline-none transition-colors"
              />
              {errors.name && <p id="name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:border-primary outline-none transition-colors"
              />
              {errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:border-primary outline-none transition-colors"
              />
              {errors.message && <p id="message-error" className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Send size={16} aria-hidden="true" />
              {status === "sent" ? "Sent — thank you!" : "Send message"}
            </button>
          </form>

          <aside className="reveal md:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-1">Direct</h3>
              <p className="text-sm text-muted-foreground mb-4">Prefer email? Reach me directly:</p>
              <a
                href="mailto:kchandann461@gmail.com"
                
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                kchandann461@gmail.com
              </a>
              <br />
              <a
                href="mailto:23102a010565@mbu.asia"
                
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                23102a010565@mbu.asia
              </a>
            </div>
            

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Find me online</h3>
              <ul className="flex flex-wrap gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5 hover:border-primary/50"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SK.ai — Built with React, TanStack & Tailwind.
        </footer>
      </div>
    </section>
  );
}
