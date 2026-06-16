import Image from "next/image";
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

const pillars = [
  {
    title: "Missão",
    text: "Transformar ideias em experiências autênticas, com criatividade, estratégia, branding, conteúdo e comunicação digital.",
  },
  {
    title: "Visão",
    text: "Referência em Franca até 2027, impulsionando marcas com soluções criativas, parcerias e impacto real.",
  },
  {
    title: "Valores",
    text: "Propósito, autenticidade, empatia, inovação, diversidade, inclusão e impacto.",
  },
];

const team = [
  { name: "Amanda", role: "Produção e marketing digital", photo: "/integrantes/amanda.png" },
  { name: "Ananda", role: "Redação e planejamento", photo: "/integrantes/ananda.png" },
  { name: "Juliana", role: "Criação e conteúdo", photo: "/integrantes/juliana.png" },
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
                    <span className="font-display text-3xl text-rose/50">{v.num}</span>
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

            <FadeIn delay={0.35}>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
                {pillars.map((p) => (
                  <div key={p.title} className="rounded-xl bg-cream-dark/60 px-6 py-6 ring-1 ring-gold/8">
                    <h3 className="font-display text-xl tracking-wider text-rose sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-[13px] font-light leading-relaxed text-ink/50">{p.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mt-24 lg:mt-28">
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-rose" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose sm:text-xs">Quem somos</span>
            </div>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1] text-ink">A equipe</h3>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.12}>
                <div className="group text-center">
                  <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl ring-2 ring-gold/10 transition-all duration-500 group-hover:ring-rose/30 sm:max-w-[320px]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, 320px"
                      quality={90}
                    />
                  </div>
                  <h4 className="mt-5 font-display text-2xl text-rose sm:text-3xl">{member.name}</h4>
                  <p className="mt-1.5 text-sm font-light text-ink/45">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
