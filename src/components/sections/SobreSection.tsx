import { CanvaEmbed } from "@/components/CanvaEmbed";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig, sobreProject } from "@/lib/site";

const values = [
  { num: "01", label: "Criatividade", desc: "Ideias que conectam marcas e pessoas" },
  { num: "02", label: "Estratégia", desc: "Planejamento com propósito e direção" },
  { num: "03", label: "Identidade", desc: "Comunicação visual autêntica e coerente" },
  { num: "04", label: "Impacto", desc: "Resultados que fazem a diferença" },
];

export function SobreSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-rose/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.1] blur-[100px]" aria-hidden="true" />

      <div className="container-section">
        <SectionHeading eyebrow="A agência" title="Sobre a Amáli" description="A história por trás do nome e a essência que guia cada projeto." />

        <div className="mt-16 grid items-start gap-16 lg:mt-20 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              <p className="whitespace-pre-line text-[15px] font-light leading-[1.85] text-ink/60 sm:text-base">{siteConfig.aboutText}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 space-y-6">
                {values.map((v) => (
                  <div key={v.label} className="flex gap-4">
                    <span className="font-display text-3xl text-rose/25">{v.num}</span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-olive">{v.label}</p>
                      <p className="mt-1 text-[13px] font-light leading-relaxed text-ink/40">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.25} direction="right">
              <div className="overflow-hidden rounded-2xl bg-white p-2.5 shadow-[0_20px_60px_-15px_rgba(114,99,49,0.15)] ring-1 ring-gold/10 sm:p-4">
                <CanvaEmbed title={sobreProject.title} embedUrl={sobreProject.embedUrl!} viewUrl={sobreProject.url} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
